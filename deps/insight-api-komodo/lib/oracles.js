'use strict';

const Common = require('./common');
const fs = require('fs');

const firstOracleIndex = 0;
const publisherIndex = 0;

function OraclesController(node) {
  this.node = node;
  this.nodeConfig = JSON.parse(fs.readFileSync(this.node.configPath, 'UTF-8'));
  this.cacheFname = this.node.configPath.replace('bitcore-node.json', 'oracles-cache.json');
  this.cache = {
    oracleslist: null,
    firstOracle: {
      isValid: false,
      info: null,
      sample: null,
    },
    foundationSample: null,
    addressBook: null
  };
  this.common = new Common({log: this.node.log});
}

OraclesController.prototype.getOraclesList = function() {
  const self = this;

  return new Promise((resolve, reject) => { 
    self.node.services.bitcoind.oracleslist(function(err, data) {
      if (err) reject({error: true, err});
      if (data) {
        self.cache.oracleslist = data;
        resolve(data);
      }
    });
  });
};

OraclesController.prototype.getOracleInfo = function(txid) {
  const self = this;

  return new Promise((resolve, reject) => { 
    self.node.services.bitcoind.oraclesinfo(txid, function(err, data) {
      if (err) reject({error: true, err});
      if (data) resolve(data);
    });
  });
};

OraclesController.prototype.getOracleSamples = function(txid, address) {
  const self = this;

  return new Promise((resolve, reject) => { 
    self.node.services.bitcoind.oraclessamples(txid, address, '1', function(err, data) {
      if (err) reject({error: true, err});
      if (data) resolve(data);
    });
  });
};

OraclesController.prototype.getOracleSample = async function(txid) {
  const oracleInfo = await this.getOracleInfo(txid);
  const self = this;

  if (oracleInfo && oracleInfo.registered && oracleInfo.registered.length) {
    const publisherInfo = oracleInfo.registered[publisherIndex];
    self.node.log.info('publisherInfo', publisherInfo)
    const lastOracleSample = await this.getOracleSamples(oracleInfo.txid, publisherInfo.baton);

    self.node.log.info('lastOracleSample', lastOracleSample)

    if (lastOracleSample &&
        lastOracleSample.samples &&
        lastOracleSample.samples.length &&
        lastOracleSample.samples[0].data &&
        lastOracleSample.samples[0].data.length &&
        lastOracleSample.samples[0].data[0]) {
      const decodedData = Buffer.from(lastOracleSample.samples[0].data[0], 'hex').toString('utf8');

      self.node.log.info('decodedData', decodedData);
      return decodedData;
    }

    return null;
  }
};

OraclesController.prototype.checkFirstOracleRule = function(oracleTxId) {
  const self = this;

  return new Promise((resolve, reject) => {    
    self.node.services.bitcoind.getBlockOverview(1, function(err, block) {
      if (err) reject({error: true, err});
      self.node.log.info(block);

      if (block && block.txids && block.txids.length) {
        self.node.services.bitcoind.getDetailedTransaction(block.txids[0], function(err, transaction) {
          self.node.log.info(transaction);
          if (err) reject({error: true, err});
          
          if (transaction && transaction.coinbase) {
            const address = transaction.outputs[0].address;

            self.node.log.info('address', address);
            self.node.services.bitcoind.getDetailedTransaction(oracleTxId, function(err, oracleTx) {
              self.node.log.info(oracleTx);
              if (err) reject({error: true, err});

              if (oracleTx.inputs.find(x => x.address === address)) {
                self.node.log.info('first oracle rule passed');
                resolve(true);
              }
            });
          }
        });
      }
    });
  });
};

OraclesController.prototype.start = async function(req, res) {
  const self = this;

  try {
    const localCacheRaw = fs.readFileSync(self.cacheFname, 'UTF-8');
    self.cache = JSON.parse(localCacheRaw);
  } catch (error) {
    self.node.log.info(error);
  }

  const fetchData = async() => {
    self.node.log.info('oracles start stub');
    const oracles = await this.getOraclesList();
  
    self.node.log.info('oracles', oracles)
  
    if (oracles && oracles.length) {
      const isFirstOracleOk = !this.cache.firstOracle.isValid ? await this.checkFirstOracleRule(oracles[firstOracleIndex]) : true;

      if (isFirstOracleOk) {
        const firstOracleInfo = await this.getOracleInfo(oracles[firstOracleIndex]);
        this.cache.firstOracle.info = firstOracleInfo;

        self.node.log.info('firstOracleInfo', firstOracleInfo)

        const oracleData = JSON.parse(await this.getOracleSample(firstOracleInfo.txid));
        this.cache.firstOracle.sample = oracleData;

        self.node.log.info('firstOracleData', oracleData);
        const nextOracleData = JSON.parse(await this.getOracleSample(oracleData.o));
        self.node.log.info('nextOracleData', nextOracleData);
        this.cache.foundationSample = nextOracleData;
        fs.writeFileSync(this.cacheFname, JSON.stringify(this.cache));

        // fetch address book
        const addressBookOracle = nextOracleData.find(x => x.n && x.n.indexOf('ADDRESS BOOK') > -1);
        if (addressBookOracle) {
          self.node.log.info('fetch address book oracle', addressBookOracle);
          const addressBookOracleData = JSON.parse(await this.getOracleSample(addressBookOracle.o));
          self.node.log.info('addressBookOracleData', addressBookOracleData);
          this.cache.addressBook = addressBookOracleData;
          fs.writeFileSync(this.cacheFname, JSON.stringify(this.cache));
        }
      }
    }
  }

  setInterval(() => {
    fetchData();
  }, self.nodeConfig.oracles.updateInterval * 1000);
  fetchData();
};

OraclesController.prototype.dumpData = function() {
  fs.writeFileSync(this.cacheFname, JSON.stringify(this.cache));
  this.node.log.info('oracles on node stop, dumped data');
};

// http request handlers
OraclesController.prototype.oraclesdata = function(req, res) {
  const self = this;
  const txid = req.params.txid;

  self.getOracleSample(txid)
  .then((result) => {
    if (!result) return self.common.handleErrors({ code: 'oracles-err1', message: 'no samples data' }, res);

    res.jsonp({
      data: JSON.parse(result)
    });
  });
};

OraclesController.prototype.oraclesaddress = function(req, res) {
  const self = this;
  const pubkey = req.params.pubkey;

  this.node.services.bitcoind.oraclesaddress(pubkey, function(err, data) {
    if (err) {
      return self.common.handleErrors(err, res);
    }
    res.jsonp({
      data
    });
  });
};

OraclesController.prototype.oracleslist = function(req, res) {
  const self = this;

  if (self.cache.oracleslist) {
    res.jsonp({
      data: self.cache.oracleslist
    });
  } else {
    this.node.services.bitcoind.oracleslist(function(err, data) {
      if (err) {
        return self.common.handleErrors(err, res);
      }
      res.jsonp({
        data
      });
    });
  }
};

OraclesController.prototype.oraclesinfo = function(req, res) {
  const self = this;
  const txid = req.params.txid;

  this.node.services.bitcoind.oraclesinfo(txid, function(err, data) {
    if (err) {
      return self.common.handleErrors(err, res);
    }
    res.jsonp({
      data
    });
  });
};

OraclesController.prototype.oraclessample = function(req, res) {
  const self = this;
  const otxid = req.params.otxid;
  const txid = req.params.txid;

  this.node.services.bitcoind.oraclessample(otxid, txid, function(err, data) {
    if (err) {
      return self.common.handleErrors(err, res);
    }
    res.jsonp({
      data
    });
  });
};

OraclesController.prototype.oraclessamples = function(req, res) {
  const self = this;
  const txid = req.params.txid;
  const address = req.params.address;
  const num = req.params.num;

  this.node.services.bitcoind.oraclessamples(txid, address, num, function(err, data) {
    if (err) {
      return self.common.handleErrors(err, res);
    }
    res.jsonp({
      data
    });
  });
};

OraclesController.prototype.getFirstOracle = function(req, res) {
  const self = this;
  const isFirstOracleData = req.query.type === 'info';
  const isFoundationData = req.query.type === 'foundation';
  const isAddressBookData = req.query.type === 'addressbook';

  if (isFirstOracleData) {
    res.jsonp({
      data: self.cache.firstOracle.info
    });
  } else if (isFoundationData) {
    res.jsonp({
      data: self.cache.foundationSample
    });
  } else if (isAddressBookData) {
    res.jsonp({
      data: self.cache.addressBook
    });
  } else {
    res.jsonp({
      data: self.cache
    });
  }
};

OraclesController.prototype.getAddressBookEntry = function(req, res) {
  const self = this;
  const address = req.params.address;

  if (self.cache.addressBook) {
    const addressBookEntry = self.cache.addressBook.find(x => x.r && x.r === address);

    res.jsonp({
      data: addressBookEntry ? addressBookEntry : 'unable to find entry'
    });
  } else {
    res.jsonp({
      data: 'address book unavailable'
    });
  }
};

module.exports = OraclesController;
