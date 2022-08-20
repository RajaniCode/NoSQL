# MongoDB Default Directory: /<Root>/db/data or /c/db/data
# mongod -dbpath /e/WT --storageEngine wiredTiger
# Remove MongoDB WiredTiger Directory
rm -rf /e/WT
echo "Removed WiredTiger Directory"

# Make MongoDB WiredTiger Directory
mkdir -p /e/WT 
echo "Made WiredTiger Directory"

# start mongod
start mongod --dbpath /e/WT --storageEngine wiredTiger --port 27017

# configure mongo
start mongo --port 27017 --eval "config = { _id: 's0', members:[{ _id : 0, host : 'localhost:27017' }]};rs.initiate(config)"