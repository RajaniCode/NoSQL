REM MongoDB Default Directory: "<Root>\db\data" or "C:\db\data"
REM mongod -dbpath "e:\MMAP" --storageEngine mmapv1
REM Remove MongoDB MMAPv1 Directory
rmdir "e:\MMAP" /s /q
echo "Removed MMAPv1 Directory"

REM Make MongoDB MMAPv1 Directory
mkdir "e:\MMAP" 
echo "Made MMAPv1 Directory"

REM start mongod
start mongod --dbpath e:\MMAP --storageEngine mmapv1 --port 27017

REM configure mongo
start mongo --port 27017 --eval "config = { _id: 's0', members:[{ _id : 0, host : 'localhost:27017' }]};rs.initiate(config)"