#!/usr/bin/env bash

#
# required:
#   argConnectDb
#   argDb
#   argCollectionName
#
read -d '' EVAL_ARG <<"EOS"
var argConnectDb='admin'
,argDb='test'
,argCollectionName='loadtest'
,argHost='vm0'
,argTxtLen=1024
,argCollectionCount=5
,argSeconds=600000
,argDelayMs=10
,argThreadCount=5
,argTTLSeconds=432000
EOS
EVAL_ARG=$(echo $EVAL_ARG | tr -d '\n\r')
mongo --nodb --eval "${EVAL_ARG}" load-gen.js

