# usage example: ./update-insight.sh OCCS-explorer
echo "update bitcore-node-komodo ${1}"
cp deps/bitcore-node-komodo/lib/services/bitcoind.js ${1}/node_modules/bitcore-node-komodo/lib/services

echo "update bitcoind-rpc ${1}"
cp deps/bitcoind-rpc/lib/index.js ${1}/node_modules/bitcoind-rpc/lib

echo "update insight-api-komodo ${1}"
cp deps/insight-api-komodo/lib/index.js ${1}/node_modules/insight-api-komodo/lib
cp deps/insight-api-komodo/lib/oracles.js ${1}/node_modules/insight-api-komodo/lib

echo "update insight-ui-komodo ${1}"
cp -r deps/insight-ui-komodo ${1}/node_modules/