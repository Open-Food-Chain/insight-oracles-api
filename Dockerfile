# syntax=docker/dockerfile:1

# note: this docker file assumes you already have OFC explorer installed locally

# set the base image to Debian
# https://hub.docker.com/_/debian/
FROM debian:latest

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update && apt-get install -y git curl libzmq3-dev make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev clang

# use pyenv to install old python version 3.5 for node 8
RUN git clone --depth=1 https://github.com/pyenv/pyenv.git .pyenv
ENV PYENV_ROOT="${HOME}/.pyenv"
ENV PATH="${PYENV_ROOT}/shims:${PYENV_ROOT}/bin:${PATH}"
RUN CC=clang pyenv install 3.5

RUN eval "$(pyenv init -)"
RUN pyenv global 3.5

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
# this is the only version that compiles zmq bindings using python 3.5
# all other versions below and up fail to compile zmq :(
ENV NODE_VERSION 8.17.0

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v

WORKDIR .

RUN git clone https://github.com/pbca26/insight-oracles-api
WORKDIR insight-oracles-api

RUN npm install git+https://git@github.com/pbca26/bitcore-node-komodo

ARG COIN="OCCS"
ARG rpchost="127.0.0.1"
ARG rpcport="58472"
ARG rpcuser="user246246276"
ARG rpcpassword="passd6bb94637f105a0299e62089201b4087d3934f50366ad4834ef247e780d53417d8"
ARG zmqport=11000
ARG webport=3001

RUN ./node_modules/bitcore-node-komodo/bin/bitcore-node create ${COIN}-explorer
RUN cd ${COIN}-explorer && .././node_modules/bitcore-node-komodo/bin/bitcore-node install git+https://git@github.com/pbca26/insight-api-komodo git+https://git@github.com/pbca26/insight-ui-komodo
RUN nl=$'\n' && echo "\
{$nl\
  \"network\": \"mainnet\",$nl\
  \"port\": $webport,$nl\
  \"services\": [$nl\
    \"bitcoind\",$nl\
    \"insight-api-komodo\",$nl\
    \"insight-ui-komodo\",$nl\
    \"web\"$nl\
  ],$nl\
  \"oracles\": {$nl\
    \"passphroughMethods\": false,$nl\
    \"updateInterval\": 300$nl\
  },$nl\
  \"servicesConfig\": {$nl\
    \"bitcoind\": {$nl\
      \"connect\": [$nl\
        {$nl\
          \"rpchost\": \"$rpchost\",$nl\
          \"rpcport\": $rpcport,$nl\
          \"rpcuser\": \"$rpcuser\",$nl\
          \"rpcpassword\": \"$rpcpassword\",$nl\
          \"zmqpubrawtx\": \"tcp://${rpchost}:${zmqport}\"$nl\
        }$nl\
      ]$nl\
    },$nl\
    \"insight-api-komodo\": {$nl\
      \"rateLimiterOptions\": {$nl\
        \"whitelist\": [\"::ffff:127.0.0.1\",\"127.0.0.1\"],$nl\
        \"whitelistLimit\": 500000,$nl\
        \"whitelistInterval\": 3600000$nl\
      }$nl\
    }$nl\
  }$nl\
}$nl\
" > ${COIN}-explorer/bitcore-node.json

RUN ls -la deps/insight-ui-komodo
RUN cp deps/bitcore-node-komodo/lib/services/bitcoind.js ${COIN}-explorer/node_modules/bitcore-node-komodo/lib/services
RUN cp deps/bitcoind-rpc/lib/index.js ${COIN}-explorer/node_modules/bitcoind-rpc/lib
RUN cp deps/insight-api-komodo/lib/index.js ${COIN}-explorer/node_modules/insight-api-komodo/lib
RUN cp deps/insight-api-komodo/lib/oracles.js ${COIN}-explorer/node_modules/insight-api-komodo/lib
RUN cp -r deps/insight-ui-komodo ${COIN}-explorer/node_modules/

# start explorer
WORKDIR OCCS-explorer
RUN ls -la
CMD ["./node_modules/bitcore-node-komodo/bin/bitcore-node", "start"]
EXPOSE 3001