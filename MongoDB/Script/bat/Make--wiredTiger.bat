REM MongoDB Default Directory: "<Root>\db\data" or "C:\db\data"
REM mongod -dbpath "e:\WT" --storageEngine wiredTiger
REM Remove MongoDB WiredTiger Directory
rmdir "e:\WT" /s /q
echo "Removed WiredTiger Directory"
REM Make MongoDB WiredTiger Directory
mkdir "e:\WT" 
echo "Made WiredTiger Directory"
