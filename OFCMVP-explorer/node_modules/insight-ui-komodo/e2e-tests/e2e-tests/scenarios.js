'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

/*var fs = require('fs');
function writeScreenShot(data, filename) {
  var stream = fs.createWriteStream(filename);
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}
browser.executeScript('setTimeout(function(){}, 1000)').then(function() {
  
});
browser.takeScreenshot().then((png) => {
  writeScreenShot(png, 'test.png');
});
//browser.wait(function() {}, 60000);
*/

describe('explorer app', function() {
  it('should load index view', function() {
    browser.get('/MOCK');
    expect(element.all(by.repeater('b in blocks')).count()).toEqual(5);
    expect(element.all(by.repeater('b in blocks')).first().getText()).toMatch(/214370/);
  });

  it('should load tokens list view', function() {
    browser.get('/tokens/MOCK');
    expect(element.all(by.repeater('t in tokens')).count()).toEqual(50);
    expect(element.all(by.repeater('t in tokens')).all(by.css('a')).first().getText()).toMatch(/Simple Rick's Wafers/);
    expect(element.all(by.repeater('t in tokens')).all(by.css('small')).first().getText()).toMatch(/Come home to the impossible flavor of your own completion. Come home to Simple Rick's./);
    expect(element.all(by.repeater('t in tokens')).all(by.css('td')).get(1).getText()).toMatch(/9999/);
    expect(element.all(by.repeater('t in tokens')).all(by.css('td')).get(2).getText()).toMatch(/CfPkmvm8NtHkVrtdUiL8NXmyoUh4mrJYHn/);
    
    browser.executeScript('window.scrollTo(0,9999);').then(function() {
      expect(element.all(by.repeater('t in tokens')).count()).toEqual(100);
    });
  });

  it('should load token details view', function() {
    browser.get('/tokens/685e282400b92a4e12829a1c6b85d947751c3094ff8583cefff47b403e568d02/transactions/MOCK');
    
    expect(element.all(by.css('h1')).first().getText()).toMatch(/Token Overview: CopyCat/);
    expect(element.all(by.css('.well div')).first().getText()).toMatch(/Token ID/);
    expect(element.all(by.css('.well div a')).first().getText()).toMatch(/685e282400b92a4e12829a1c6b85d947751c3094ff8583cefff47b403e568d02/);
    // token summary table
    expect(element.all(by.css('h4')).first().getText()).toMatch(/Summary/);
    expect(element.all(by.css('table')).first().all(by.css('tr')).get(0).getText()).toMatch(/Description/);
    expect(element.all(by.css('table')).first().all(by.css('tr')).get(0).getText()).toMatch(/Test token create via JS/);
    expect(element.all(by.css('table')).first().all(by.css('tr')).get(1).all(by.css('td')).get(0).getText()).toMatch(/Supply/);
    expect(element.all(by.css('table')).first().all(by.css('tr')).get(1).all(by.css('td')).get(1).getText()).toMatch(/1/);
    expect(element.all(by.css('table')).first().all(by.css('tr')).get(2).all(by.css('td')).get(0).getText()).toMatch(/Creator/);
    expect(element.all(by.css('table')).first().all(by.css('tr')).get(2).all(by.css('td a')).get(0).getText()).toMatch(/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/);
    expect(element.all(by.css('table')).first().all(by.css('tr')).get(3).all(by.css('td')).get(0).getText()).toMatch(/Transactions/);
    expect(element.all(by.css('table')).first().all(by.css('tr')).get(3).all(by.css('td')).get(1).getText()).toMatch(/3/);
    expect(element.all(by.css('table')).first().all(by.css('tr')).get(4).all(by.css('td')).get(0).getText()).toMatch(/Block Height/);
    expect(element.all(by.css('table')).first().all(by.css('tr')).get(4).all(by.css('td')).get(1).getText()).toMatch(/41948/);
    expect(element.all(by.css('table')).first().all(by.css('tr')).get(5).all(by.css('td')).get(0).getText()).toMatch(/Created at/);
    expect(element.all(by.css('table')).first().all(by.css('tr')).get(5).all(by.css('td')).get(1).getText()).toMatch(/Sep 16, 2021 2:34:37 PM/);

    // token NFT data table
    expect(element.all(by.css('table')).last().all(by.css('tr')).get(0).all(by.css('td')).get(0).getText()).toMatch(/ID/);
    expect(element.all(by.css('table')).last().all(by.css('tr')).get(0).all(by.css('td')).get(1).getText()).toMatch(/1/);
    expect(element.all(by.css('table')).last().all(by.css('tr')).get(1).all(by.css('td')).get(0).getText()).toMatch(/URL/);
    expect(element.all(by.css('table')).last().all(by.css('tr')).get(1).all(by.css('td a')).get(0).getText()).toMatch('https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/1500718.png');
    expect(element.all(by.css('table')).last().all(by.css('tr')).get(2).all(by.css('td')).get(0).getText()).toMatch(/Royalty/);
    expect(element.all(by.css('table')).last().all(by.css('tr')).get(2).all(by.css('td')).get(1).getText()).toMatch(/10%/);
    expect(element.all(by.css('table')).last().all(by.css('tr')).get(3).all(by.css('td')).get(0).getText()).toMatch(/Arbitrary data/);
    expect(element.all(by.css('table')).last().all(by.css('tr')).get(3).all(by.css('td')).get(1).getText()).toMatch(/CryptoKittie Knock off/);

    // NFT image
    expect(element.all(by.css('.container img')).last().getAttribute('src')).toMatch('https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/1500718.png');
    expect(element.all(by.css('textarea')).first().getText()).toMatch(JSON.stringify({
      "id": 1,
      "url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/1500718.png",
      "royalty": 100,
      "arbitrary": "CryptoKittie Knock off"
    }, null, 2));

    // bottom nav bar
    expect(element.all(by.css('h4')).get(2).all(by.css('span')).first().getText()).toMatch('Transactions');
    expect(element.all(by.css('h4')).get(2).all(by.css('a')).get(0).getText()).toMatch('Richlist');
    expect(element.all(by.css('h4')).get(2).all(by.css('a')).get(1).getText()).toMatch('Orderbook');
    expect(element.all(by.css('h4')).get(2).all(by.css('a')).get(2).getText()).toMatch('Trades');
    
    // token transactions
    expect(element.all(by.repeater('tx in txs')).count()).toEqual(3);
    // transfer tx
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-bot a')).last().getText()).toMatch(/f2148720c7bd7eb4d42f51997d10ac7e6cdc1c78ffdde61d7af329ad6f55d081/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-bot')).first().getText()).toMatch(/Oct 15, 2021 5:22:19 PM/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-bot')).first().getText()).toMatch(/mined/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-mid .col-md-5')).first().getText()).toMatch(/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-mid .col-md-5')).first().getText()).toMatch(/1 CopyCat/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-mid .col-md-6')).first().getText()).toMatch(/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-mid .col-md-6')).first().getText()).toMatch(/1 CopyCat/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-top')).first().getText()).toMatch(/FEE: 0.00001 MOCK/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-top')).first().getText()).toMatch(/1 COPYCAT/);

    // token create tx
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-bot a')).last().getText()).toMatch(/56555d676c7de8d31293bf0bb6bcfe34cddbf98e23a92d11d919f15ddd2a362c/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-bot')).first().getText()).toMatch(/Sep 16, 2021 2:34:37 PM/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-bot')).first().getText()).toMatch(/mined/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-mid .col-md-5')).first().getText()).toMatch(/Coinbase/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-mid .col-md-6')).first().getText()).toMatch(/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-mid .col-md-6')).first().getText()).toMatch(/1 CopyCat/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-top')).first().getText()).toMatch(/FEE: 0.00001 MOCK/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-top')).first().getText()).toMatch(/1 COPYCAT/);
  });

  it('should load token details richlist view', function() {
    browser.get('/tokens/685e282400b92a4e12829a1c6b85d947751c3094ff8583cefff47b403e568d02/richlist/MOCK');

    // bottom nav bar
    expect(element.all(by.css('h4')).get(2).all(by.css('span')).first().getText()).toMatch('Richlist');
    expect(element.all(by.css('h4')).get(2).all(by.css('a')).get(0).getText()).toMatch('Transactions');
    expect(element.all(by.css('h4')).get(2).all(by.css('a')).get(1).getText()).toMatch('Orderbook');
    expect(element.all(by.css('h4')).get(2).all(by.css('a')).get(2).getText()).toMatch('Trades');
    
    // token richlist
    expect(element.all(by.repeater('item in richlist')).count()).toEqual(1);
    expect(element.all(by.repeater('item in richlist')).get(0).all(by.css('td a')).first().getText()).toMatch('CaopajuemreFwEAfbywvFi8oFyrJPNkDs1');
    expect(element.all(by.repeater('item in richlist')).get(0).all(by.css('td')).last().getText()).toMatch('1');
  });

  it('should load token details orderbook view', function() {
    browser.get('/tokens/685e282400b92a4e12829a1c6b85d947751c3094ff8583cefff47b403e568d02/orderbook/MOCK');

    // bottom nav bar
    expect(element.all(by.css('h4')).get(2).all(by.css('span')).get(1).getText()).toMatch('Orderbook');
    expect(element.all(by.css('h4')).get(2).all(by.css('a')).get(0).getText()).toMatch('Transactions');
    expect(element.all(by.css('h4')).get(2).all(by.css('a')).get(1).getText()).toMatch('Richlist');
    expect(element.all(by.css('h4')).get(2).all(by.css('a')).get(2).getText()).toMatch('Trades');
    
    // token orderbook
    expect(element.all(by.repeater('o in orderbook')).count()).toEqual(1);
    expect(element.all(by.repeater('o in orderbook')).get(0).all(by.css('td')).get(0).getText()).toMatch('Buy');
    expect(element.all(by.repeater('o in orderbook')).get(0).all(by.css('td')).get(1).getText()).toMatch('1');
    expect(element.all(by.repeater('o in orderbook')).get(0).all(by.css('td')).get(2).getText()).toMatch('0.00001 MOCK');
  });

  it('should load token details trades view', function() {
    browser.get('/tokens/685e282400b92a4e12829a1c6b85d947751c3094ff8583cefff47b403e568d02/trades/MOCK');

    // bottom nav bar
    expect(element.all(by.css('h4')).get(2).all(by.css('span')).get(2).getText()).toMatch('Trades');
    expect(element.all(by.css('h4')).get(2).all(by.css('a')).get(0).getText()).toMatch('Transactions');
    expect(element.all(by.css('h4')).get(2).all(by.css('a')).get(1).getText()).toMatch('Richlist');
    expect(element.all(by.css('h4')).get(2).all(by.css('a')).get(2).getText()).toMatch('Orderbook');
    
    // token trades stats
    expect(element.all(by.css('.trades-stats-block')).get(0).getText()).toMatch(/Total volume: 1 CopyCat/);
    expect(element.all(by.css('.trades-stats-block')).get(0).getText()).toMatch(/Total trades: 1/);
    
    // token trades
    expect(element.all(by.repeater('tx in txs')).count()).toEqual(1);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-bot a')).last().getText()).toMatch(/685e282400b92a4e12829a1c6b85d947751c3094ff8583cefff47b403e568d02/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-bot')).first().getText()).toMatch(/Nov 17, 2021 11:30:20 PM/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-bot')).first().getText()).toMatch(/mined/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-mid .col-md-5')).first().getText()).toMatch(/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-mid .col-md-5')).first().getText()).toMatch(/1 CopyCat/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-mid .col-md-6')).first().getText()).toMatch(/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-mid .col-md-6')).first().getText()).toMatch(/1 CopyCat/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-top')).first().getText()).toMatch(/FEE: 0.00001 MOCK/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-top')).first().getText()).toMatch(/PRICE: 0.001 MOCK/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-top')).first().getText()).toMatch(/1 COPYCAT/);
  });

  it('should load token address details w/ transactions', function() {
    browser.get('/tokens/74e3a1a2c9b95fa9f634f171a105a458d6c47033366c8e2b9858cd81091a2c00/address/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/MOCK');
  
    expect(element.all(by.css('h1')).get(0).all(by.css('span')).get(0).getText()).toMatch('Address');
    expect(element.all(by.css('h1')).get(0).all(by.css('small')).get(0).getText()).toMatch('1 CopyCat');
    expect(element.all(by.css('.well')).get(0).all(by.css('strong span')).get(0).getText()).toMatch('Address');
    expect(element.all(by.css('.well')).get(0).all(by.css('span')).get(1).getText()).toMatch('CaopajuemreFwEAfbywvFi8oFyrJPNkDs1');
    
    expect(element.all(by.css('.row table')).get(0).all(by.css('tr')).get(0).all(by.css('td')).get(0).getText()).toMatch('Total Received');
    expect(element.all(by.css('.row table')).get(0).all(by.css('tr')).get(0).all(by.css('td')).get(1).getText()).toMatch('3 CopyCat');
    expect(element.all(by.css('.row table')).get(0).all(by.css('tr')).get(1).all(by.css('td')).get(0).getText()).toMatch('Total Sent');
    expect(element.all(by.css('.row table')).get(0).all(by.css('tr')).get(1).all(by.css('td')).get(1).getText()).toMatch('2 CopyCat');
    expect(element.all(by.css('.row table')).get(0).all(by.css('tr')).get(2).all(by.css('td')).get(0).getText()).toMatch('Final Balance');
    expect(element.all(by.css('.row table')).get(0).all(by.css('tr')).get(2).all(by.css('td')).get(1).getText()).toMatch('1 CopyCat');
    expect(element.all(by.css('.row table')).get(0).all(by.css('tr')).get(3).all(by.css('td')).get(0).getText()).toMatch('No. Transactions');
    expect(element.all(by.css('.row table')).get(0).all(by.css('tr')).get(3).all(by.css('td')).get(1).getText()).toMatch('3');    
    
    expect(element.all(by.css('qrcode')).get(0).getAttribute('data')).toMatch('CaopajuemreFwEAfbywvFi8oFyrJPNkDs1');
    
    // token transactions
    expect(element.all(by.repeater('tx in txs')).count()).toEqual(3);
    // transfer tx
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-bot a')).last().getText()).toMatch(/f2148720c7bd7eb4d42f51997d10ac7e6cdc1c78ffdde61d7af329ad6f55d081/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-bot')).first().getText()).toMatch(/Oct 15, 2021 5:22:19 PM/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-bot')).first().getText()).toMatch(/mined/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-mid .col-md-5')).first().getText()).toMatch(/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-mid .col-md-5')).first().getText()).toMatch(/1 CopyCat/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-mid .col-md-6')).first().getText()).toMatch(/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-mid .col-md-6')).first().getText()).toMatch(/1 CopyCat/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-top')).first().getText()).toMatch(/FEE: 0.00001 MOCK/);
    expect(element.all(by.repeater('tx in txs')).get(0).all(by.css('.line-top')).first().getText()).toMatch(/1 COPYCAT/);

    // token create tx
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-bot a')).last().getText()).toMatch(/56555d676c7de8d31293bf0bb6bcfe34cddbf98e23a92d11d919f15ddd2a362c/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-bot')).first().getText()).toMatch(/Sep 16, 2021 2:34:37 PM/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-bot')).first().getText()).toMatch(/mined/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-mid .col-md-5')).first().getText()).toMatch(/Coinbase/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-mid .col-md-6')).first().getText()).toMatch(/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-mid .col-md-6')).first().getText()).toMatch(/1 CopyCat/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-top')).first().getText()).toMatch(/FEE: 0.00001 MOCK/);
    expect(element.all(by.repeater('tx in txs')).get(2).all(by.css('.line-top')).first().getText()).toMatch(/1 COPYCAT/);
  });

  it('should load token transaction view', function() {
    browser.get('/tokens/74e3a1a2c9b95fa9f634f171a105a458d6c47033366c8e2b9858cd81091a2c00/transactions/74e3a1a2c9b95fa9f634f171a105a458d6c47033366c8e2b9858cd81091a2c00/MOCK');
    
    expect(element.all(by.css('h1')).get(0).all(by.css('span')).get(0).getText()).toMatch('Token Transaction');
    expect(element.all(by.css('.well')).get(0).all(by.css('strong span')).get(0).getText()).toMatch('Transaction');
    expect(element.all(by.css('.well')).get(0).all(by.css('span')).get(1).getText()).toMatch('f2148720c7bd7eb4d42f51997d10ac7e6cdc1c78ffdde61d7af329ad6f55d081');
    
    expect(element.all(by.css('.table')).get(0).all(by.css('tr')).get(1).all(by.css('td')).get(0).getText()).toMatch('Received Time');
    expect(element.all(by.css('.table')).get(0).all(by.css('tr')).get(1).all(by.css('td')).get(1).getText()).toMatch('Oct 15, 2021 5:22:19 PM');
    expect(element.all(by.css('.table')).get(0).all(by.css('tr')).get(2).all(by.css('td')).get(0).getText()).toMatch('Included in Block');
    expect(element.all(by.css('.table')).get(0).all(by.css('tr')).get(2).all(by.css('td a')).get(0).getText()).toMatch('00890a8aab33002b2f9b012fd9fbc645f86ef0503c70800dce05ca808fd2829d');
    expect(element.all(by.css('.table')).get(0).all(by.css('tr')).get(5).all(by.css('td')).get(0).getText()).toMatch('Token');
    expect(element.all(by.css('.table')).get(0).all(by.css('tr')).get(5).all(by.css('td a')).get(0).getText()).toMatch('CopyCat');

    expect(element.all(by.css('.block-tx')).get(0).all(by.css('.line-bot a')).last().getText()).toMatch(/f2148720c7bd7eb4d42f51997d10ac7e6cdc1c78ffdde61d7af329ad6f55d081/);
    expect(element.all(by.css('.block-tx')).get(0).all(by.css('.line-bot')).first().getText()).toMatch(/Oct 15, 2021 5:22:19 PM/);
    expect(element.all(by.css('.block-tx')).get(0).all(by.css('.line-bot')).first().getText()).toMatch(/mined/);
    expect(element.all(by.css('.block-tx')).get(0).all(by.css('.line-mid .col-md-5')).first().getText()).toMatch(/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/);
    expect(element.all(by.css('.block-tx')).get(0).all(by.css('.line-mid .col-md-5')).first().getText()).toMatch(/1 CopyCat/);
    expect(element.all(by.css('.block-tx')).get(0).all(by.css('.line-mid .col-md-6')).first().getText()).toMatch(/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/);
    expect(element.all(by.css('.block-tx')).get(0).all(by.css('.line-mid .col-md-6')).first().getText()).toMatch(/1 CopyCat/);
    expect(element.all(by.css('.block-tx')).get(0).all(by.css('.line-top')).first().getText()).toMatch(/FEE: 0.00001 MOCK/);
    expect(element.all(by.css('.block-tx')).get(0).all(by.css('.line-top')).first().getText()).toMatch(/1 COPYCAT/);
  });

  it('should load token address holdings view', function() {
    browser.get('/tokens/address/CaopajuemreFwEAfbywvFi8oFyrJPNkDs1/MOCK');
    
    expect(element.all(by.css('h1')).get(0).all(by.css('span')).get(0).getText()).toMatch(/Token holdings/);
    expect(element.all(by.css('h1')).get(0).all(by.css('span')).get(0).getText()).toMatch(/(13)/);
    expect(element.all(by.css('.well')).get(0).all(by.css('strong span')).get(0).getText()).toMatch('Address');
    expect(element.all(by.css('.well')).get(0).all(by.css('span')).get(1).getText()).toMatch('CaopajuemreFwEAfbywvFi8oFyrJPNkDs1');
    
    expect(element.all(by.repeater('t in holdings')).count()).toEqual(13);
    expect(element.all(by.repeater('t in holdings')).get(0).all(by.css('td a')).get(0).getText()).toMatch('Test');
    expect(element.all(by.repeater('t in holdings')).get(0).all(by.css('td')).get(1).getText()).toMatch('10');
    expect(element.all(by.repeater('t in holdings')).get(1).all(by.css('td a')).get(0).getText()).toMatch('CopyCat');
    expect(element.all(by.repeater('t in holdings')).get(1).all(by.css('td')).get(1).getText()).toMatch('1');
  });
});
