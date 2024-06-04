REM  Translated original .sh file to .bat   
REM  10gen
REM  script to start a replica set on localhost


echo "del data files for a clean start"

del /Q e:\WT\config
del /Q e:\WT\
del /Q e:\WT\config

PING 1.1.1.1 -n 1 -w 5000 >NUL


REM  start a replica set

mkdir e:\WT\rs1
mkdir e:\WT\rs2
mkdir e:\WT\rs3
start mongod --replSet m101 --dbpath e:\WT\rs1 -storageEngine wiredTiger --port 37017 --smallfiles --oplogSize 100
start mongod --replSet m101 --dbpath e:\WT\rs2 -storageEngine wiredTiger --port 37018 --smallfiles --oplogSize 100
start mongod --replSet m101 --dbpath e:\WT\rs3 -storageEngine wiredTiger --port 37019 --smallfiles --oplogSize 100

PING 1.1.1.1 -n 1 -w 5000 >NUL

REM  connect to one server and initiate the set
start mongo --port 37017 --eval "config = { _id: 's0', members:[{ _id : 0, host : 'localhost:37017' },{ _id : 1, host : 'localhost:37018' },{ _id : 2, host : 'localhost:37019' }]};rs.initiate(config)"