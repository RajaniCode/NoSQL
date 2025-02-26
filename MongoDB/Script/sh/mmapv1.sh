# MongoDB Default Directory: /<Root>/db/data or /c/db/data
# mongod -dbpath /e/MMAP --storageEngine mmapv1
# Remove MongoDB MMAPv1 Directory
rm -rf /e/MMAP
echo "Removed MMAPv1 Directory"

# Make MongoDB MMAPv1 Directory
mkdir -p /e/MMAP 
echo "Made MMAPv1 Directory"

# start mongod
start mongod --dbpath /e/MMAP --storageEngine mmapv1 --port 27017

# configure mongo
start mongo --port 27017 --eval "config = { _id: 's0', members:[{ _id : 0, host : 'localhost:27017' }]};rs.initiate(config)"