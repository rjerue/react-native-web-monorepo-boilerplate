#!/bin/bash

add_lib() {
  echo "adding $2 to $1 "
  yarn workspace $1 add $2 &> /dev/null
}

add_to_all(){
  add_lib "web" "$1"
  add_lib "mobile" "$1"
  add_lib "shared" "$1"
  echo "added to all libs"
}

run_test(){
  yarn workspace $1 test
}

echo "running preflight check"

echo "adding Mocks"
add_to_all "git+ssh://git@git.viasat.com/ICAT/MyViasatMocks.git#master git+ssh://git@git.viasat.com/ICAT/mv-typings.git#master -D"
echo "adding andromeda"
yarn add git+ssh://git@git.viasat.com/ICAT/andromeda.git#master -W &> /dev/null

echo "removing node_modules"

rm -fr node_modules packages/mobile/node_modules packages/web/node_modules packages/shared/node_modules

echo "modules removed"

echo "running clean yarn install"
yarn install &> /dev/null
