#!/usr/bin/env bash
################################################################################
# Script for installing Insight Explorer on Ubuntu 18.04 and 20.04
# Authors: @rumeysayilmaz @aklix @pbca26 @DeckerSU
#-------------------------------------------------------------------------------
# Recommended Node version: v8.17.0
################################################################################

STEP_START='\e[1;47;42m'
STEP_END='\e[0m'

CUR_DIR=$(pwd)
COIN="OCCS"

rpchost="127.0.0.1"
rpcport="58472"
rpcuser="user246246276"
rpcpassword="passd6bb94637f105a0299e62089201b4087d3934f50366ad4834ef247e780d53417d8"
zmqport=11000
webport=3001

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
nvm use v8
npm install git+https://git@github.com/pbca26/bitcore-node-komodo

# # Coin config
echo -e "Preparing $COIN"

# Create coin explorer and bitcore-node.json config for it

$CUR_DIR/node_modules/bitcore-node-komodo/bin/bitcore-node create $COIN-explorer
cd $COIN-explorer
$CUR_DIR/node_modules/bitcore-node-komodo/bin/bitcore-node install git+https://git@github.com/pbca26/insight-api-komodo git+https://git@github.com/pbca26/insight-ui-komodo
cd $CUR_DIR

cat << EOF > $CUR_DIR/$COIN-explorer/bitcore-node.json
{
  "network": "mainnet",
  "port": $webport,
  "services": [
    "bitcoind",
    "insight-api-komodo",
    "insight-ui-komodo",
    "web"
  ],
  "oracles": {
    "passthroughMethods": false,
    "updateInterval": 300
  },
  "servicesConfig": {
    "bitcoind": {
      "connect": [
        {
          "rpchost": "$rpchost",
          "rpcport": $rpcport,
          "rpcuser": "$rpcuser",
          "rpcpassword": "$rpcpassword",
          "zmqpubrawtx": "tcp://$rpchost:$zmqport"
        }
      ]
    },
    "insight-api-komodo": {
      "rateLimiterOptions": {
        "whitelist": ["::ffff:127.0.0.1","127.0.0.1"],
        "whitelistLimit": 500000,
        "whitelistInterval": 3600000
      }
    }
  }
}
EOF

# creating launch script for coin explorer
cat << EOF > $CUR_DIR/$COIN-explorer-start.sh
#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
cd $COIN-explorer
nvm use v8; ./node_modules/bitcore-node-komodo/bin/bitcore-node start
EOF
sudo chmod +x $COIN-explorer-start.sh

./apply-ofc-changes.sh $COIN-explorer
