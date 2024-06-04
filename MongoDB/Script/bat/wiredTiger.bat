REM MongoDB Default Directory: "<Root>\db\data" or "C:\db\data"
REM mongod -dbpath "e:\WT" --storageEngine wiredTiger
REM Remove MongoDB WiredTiger Directory
rmdir "e:\WT" /s /q
echo "Removed WiredTiger Directory"

REM Make MongoDB WiredTiger Directory
mkdir "e:\WT" 
echo "Made WiredTiger Directory"

REM start mongod
start mongod --dbpath e:\WT --storageEngine wiredTiger --port 27017

REM configure mongo
start mongo --port 27017 --eval "config = { _id: 's0', members:[{ _id : 0, host : 'localhost:27017' }]};rs.initiate(config)"