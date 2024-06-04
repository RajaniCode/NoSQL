# MongoDB Default Directory: /<Root>/db/data or /c/db/data
# mongod -dbpath /e/WT --storageEngine wiredTiger
# Remove MongoDB WiredTiger Directory
rm -rf /e/WT
echo "Removed WiredTiger Directory"
# Make MongoDB WiredTiger Directory
mkdir -p /e/WT 
echo "Made WiredTiger Directory"
