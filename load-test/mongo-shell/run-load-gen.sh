#!/usr/bin/env bash

#
# required:
#   argConnectDb
#   argDb
#   argCollectionName
#
read -d '' EVAL_ARG <<"EOS"
var argConnectDb='sbtest'
,argDb='sbtest'
,argCollectionName='loadtest'
,argHost='vm0'
,argTxtLen=1024
,argCollectionCount=1
,argSeconds=31536000
,argDelayMs=10
,argThreadCount=1
EOS
EVAL_ARG=$(echo $EVAL_ARG | tr -d '\n\r')
mongo --nodb --eval "${EVAL_ARG}" load-gen.js

