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
,argCollectionName='loadtest2'
,argHost='vm0'
,argUsername='sbtest'
,argPassword='password'
,argTxtLen=2048
,argCollectionCount=20
,argSeconds=43200
,argDelayMs=10
,argThreadCount=10
EOS
EVAL_ARG=$(echo $EVAL_ARG | tr -d '\n\r')
mongo --nodb --eval "${EVAL_ARG}" load-gen.js

