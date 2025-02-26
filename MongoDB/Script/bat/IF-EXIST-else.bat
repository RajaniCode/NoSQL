# Git Bash: ./IF-EXIST-else.bat

IF EXIST "e:\MMAP" (
REM Remove MongoDB MMAPv1 Directory
rmdir "e:\MMAP" /s /q
echo "Removed MMAPv1 Directory"
) else (
echo "e:\WT EXIST"
)

IF NOT EXIST "e:\MMAP" (
REM Make MongoDB MMAPv1 Directory
mkdir "e:\MMAP"
echo "Made MMAPv1 Directory"
)