Bitcore Node
============

A Bitcoin full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to [Bitcoin Core with additional indexing](https://github.com/bitpay/bitcoin/tree/0.12.1-bitcore) for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Install

```bash
npm install -g bitcore-node
bitcore-node start
```

Note: For your convenience, we distribute bitcoind binaries for x86_64 Linux and x86_64 Mac OS X. Upon npm install, the binaries for your platform will be downloaded. For more detailed installation instructions, or if you want to compile the project yourself, then please see the Bitcore branch of [Bitcoin Core with additional indexing](https://github.com/bitpay/bitcoin/tree/0.12.1-bitcore).

## Prerequisites

- GNU/Linux x86_32/x86_64, or OSX 64bit *(for bitcoind distributed binaries)*
- Node.js v0.10, v0.12 or v4
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~200GB of disk storage
- ~8GB of RAM

## Configuration

Bitcore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your Bitcore Node.

```bash
bitcore-node create -d <bitcoin-data-dir> mynode
cd mynode
bitcore-node install <service>
bitcore-node install https://github.com/yourname/helloworld
```

This will create a directory with configuration files for your node and install the necessary dependencies. For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of Bitcore:

- [Insight API](https://github.com/bitpay/insight-api)
- [Insight UI](https://github.com/bitpay/insight-ui)
- [Bitcore Wallet Service](https://github.com/bitpay/bitcore-wallet-service)

## Documentation

- [Upgrade Notes](docs/upgrade.md)
- [Services](docs/services.md)
  - [Bitcoind](docs/services/bitcoind.md) - Interface to Bitcoin Core
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/bitpay/bitcore/blob/master/CONTRIBUTING.md) file.

## OFC

Locally cached data:
- First oracle and it's 1st publisher's data sample
- Address book
- Oracles list

### API
If you need to change default routes or params edit the following files

```insight-api-komodo/lib/index.js#L232```

```insight-api-komodo/lib/oracles.js```

[OFC Oracles API description with examples](OFC-API.md)

### Main oracle update interval
If you need to change main oracle's default update interval edit the following file ```OCCS-explorer/bitcore-node.json```. Find oracles section, change updateInterval to desired value in seconds.

### Oracles RPC passphrough methods
If you need to expose access to oracles komodod RPC methods such as oraclesamples or oracleinfo edit the following file ```OCCS-explorer/bitcore-node.json```. Find oracles section, change passphroughMethods value to ```true```.

### UI
If you need to change symbol or default host/port edit ```insight-ui-komodo/public/js/config.js```

### Komodod .conf example
```
rpcuser=user123
rpcpassword=password123
rpcport=58472
server=1
txindex=1
addressindex=1
timestampindex=1
spentindex=1
rpcworkqueue=256
rpcbind=127.0.0.1
rpcallowip=0.0.0.0/0
zmqpubrawtx=tcp://127.0.0.1:11000
zmqpubhashblock=tcp://127.0.0.1:11000
uacomment=bitcore
showmetrics=0
```

Make sure to check if zmq port is available on your machine.

Komodod instance can be remote so it makes possible to run explorer and daemon as separate containers.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore-node/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc.

- bitcoin: Copyright (c) 2009-2015 Bitcoin Core Developers (MIT License), 2023 OFC
