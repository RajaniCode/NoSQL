# MongoDB Default Directory: /<Root>/db/data or /c/db/data
# mongod -dbpath /e/MMAP --storageEngine mmapv1
# Remove MongoDB MMAPv1 Directory
rm -rf /e/MMAP
echo "Removed MMAPv1 Directory"