# syntax=docker/dockerfile:1

# note: this docker file assumes you already have OFC explorer installed locally

# set the base image to Debian
# https://hub.docker.com/_/debian/
FROM debian:latest

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update && apt-get install -y git curl autoclean libzmq3-dev make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev clang

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
COPY . .

# remove line below
RUN rm -rf OCCS-explorer/node_modules/zmq

RUN cd OCCS-explorer && npm install zmq@2.15.3 && cd ../

# run explorer deps install here
# see install-explorer.sh for full list of commands to install deps
# or do something like RUN ./install-explorer.sh in Docker container

# start explorer
WORKDIR OCCS-explorer
CMD ["./node_modules/bitcore-node-komodo/bin/bitcore-node", "start"]
EXPOSE 3001