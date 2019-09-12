#!/bin/bash

set -ex

yarn install

yarn go ${@}

cd out

esy install
esy pesy
esy build
esy test

cd ..

rm -rf out
