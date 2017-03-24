print("starting replica set init ...");
rs.initiate( {
   _id : "rs4",
   members: [
      { 
     _id : 0
     ,host : "vm0:27017"
          ,priority : 10
             },
      { 
     _id : 1
     ,host : "vm1:27017"
          ,priority : 1
             },
      { 
     _id : 2
     ,host : "vm2:27017"
          ,priority : 0
               ,hidden : true
        },
      ]
})
print("replica set init done");
rs.status();

/* TODO: add conditional properties to enable security
print("start loop");
for (i =0;i<=30; i++) {
   print("start loop.  iteration:"+i);
   var isMaster=db.isMaster().ismaster;
   print("isMaster:"+isMaster);
   if(isMaster === true) {
     break;
   }
   print("start sleep");
   sleep(1000);
   print("stop sleep");
}
db.createUser(
  {
    user: "admin",
    pwd: "mongo",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" },{ "role" : "clusterAdmin", "db" : "admin" } ]
  }
);
*/

