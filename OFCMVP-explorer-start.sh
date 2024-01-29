#!/bin/bash
export NVM_DIR="/home/diesmaster/.nvm"
[ -s "/home/diesmaster/.nvm/nvm.sh" ] && . "/home/diesmaster/.nvm/nvm.sh" # This loads nvm
cd OFCMVP-explorer
nvm use v8; ./node_modules/bitcore-node-komodo/bin/bitcore-node start
