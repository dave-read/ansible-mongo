


var argTxtLen,argIntRange,argCollectionCount,argSeconds,argThreadCount;
var argUsername,argHost,argPassword,argDb,argCollectionName,argConnectDb,argDelayMs

var txtLen = applyDefault(argTxtLen,1024);
var intRange = applyDefault(argIntRange,100);
var collectionCount = applyDefault(argCollectionCount,10);

var seconds = applyDefault(argSeconds,30);
var threadCount = applyDefault(argThreadCount,1);

function applyDefault(value,defaultValue) {
 return (value === undefined) ? defaultValue : value;
}

var newDoc = { 
    nbr: { "#RAND_INT" : [ 0 , intRange ] },
    txt: { "#RAND_STRING": [txtLen] }
}

var ops = [];

if (argConnectDb===undefined) {
   print("ERROR: connect db must be set using argConnectDb")
   exit(1);
}
if (argDb===undefined) {
   print("ERROR: target db must be set using argDb")
   exit(1);
}
if (argCollectionName===undefined) {
   print("ERROR: target collection must be set using argCollectionName")
   exit(1);
}
print("collectionCount:"+collectionCount)
for ( i = 1; i<=collectionCount; ++i){
 obj = new Object();
 obj.op="insert"; 
 obj.ns=argDb+"."+argCollectionName+"_"+i;
 obj.doc=newDoc;
 obj.showResult=true
 if (argDelayMs!==undefined) { obj.delay=argDelayMs };
 ops.push(obj);
 print("adding:"+JSON.stringify(obj,null,4));
}

runParms = new Object();

if (argHost!==undefined) { runParms.host=argHost; }
if (argUsername!==undefined) { runParms.username=argUsername; }
if (argPassword!==undefined) { runParms.password=argPassword; }

runParms.db=argConnectDb;
runParms.parallel=threadCount;
runParms.seconds=seconds;
runParms.hideResults=false;
runParms.ops=ops;

print("starting with:"+JSON.stringify(runParms,null,4));

res=benchRun(runParms);

print("done:"+JSON.stringify(res,null,4));

