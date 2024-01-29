#!/bin/bash
export NVM_DIR="/root/.nvm"
[ -s "/root/.nvm/nvm.sh" ] && . "/root/.nvm/nvm.sh" # This loads nvm
cd OCCS-explorer
nvm use v8; ./node_modules/bitcore-node-komodo/bin/bitcore-node start
