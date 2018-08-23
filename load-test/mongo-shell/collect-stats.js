
/*
{
        "db" : "test",
        "collections" : 1,
        "views" : 0,
        "objects" : 412583,
        "avgObjSize" : 1065,
        "dataSize" : 439400895,
        "storageSize" : 423694336,
        "numExtents" : 0,
        "indexes" : 1,
        "indexSize" : 3297280,
        "ok" : 1
}
*/

var priorVal = db.stats();
while(true) {
  sleep(1000);
  var currentVal = db.stats();
  var countDiff = currentVal.objects - priorVal.objects;  
  var dataSizeDiff = (currentVal.dataSize - priorVal.dataSize) /1024;  
  var storageSizeDiff = (currentVal.storageSize - priorVal.storageSize) /1024;  
  print(countDiff+"\t"+NumberInt(dataSizeDiff)+"\t"+NumberInt(storageSizeDiff)+"\t"+NumberInt(currentVal.dataSize/1024/1024)+"\t"+NumberInt(currentVal.storageSize/1024/1024));
  priorVal=currentVal;
}
