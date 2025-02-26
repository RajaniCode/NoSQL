REM MongoDB Default Directory: "<Root>\db\data" or "C:\db\data"
REM mongod -dbpath "e:\MMAP" --storageEngine mmapv1
REM Remove MongoDB MMAPv1 Directory
rmdir "e:\MMAP" /s /q
echo "Removed MMAPv1 Directory"