ansible all -s -m shell -a "service mongod status"
ansible all -s -m shell -a "ps -ef | grep mongod"
