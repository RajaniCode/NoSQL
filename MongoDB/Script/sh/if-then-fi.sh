# Git Bash: ./if-then-fi.sh

if [ -d /e/MMAP ]
then
    echo "Removing /e/MMAP"
    # Remove MongoDB MMAPv1 Directory
    rm -rf /e/MMAP
    echo "Removed MMAPv1 Directory"
fi
if [ ! -d /e/MMAP ]
then
    echo "Making /e/MMAP"
    # Make MongoDB MMAPv1 Directory
    mkdir -p /e/MMAP
    echo "Made MMAPv1 Directory"
fi

