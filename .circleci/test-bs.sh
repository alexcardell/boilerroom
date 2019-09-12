#!/bin/bash

set -ex

yarn install

yarn go ${@}

cd out

yarn install

yarn test

cd ..

rm -rf out
