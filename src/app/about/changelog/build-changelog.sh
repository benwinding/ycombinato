#!/usr/bin/env bash

# Get the directory of the script
SCRIPT_DIR=$(dirname "$0")

TARGET_PATH=$SCRIPT_DIR/git-log.txt
echo ">>> creating git log txt output in "$TARGET_PATH""

# Get's the last few git commits from the repo, puts them into a file for the app to display
git log -10 --pretty=format:"%h%x09%an%x09%ad%x09%s" --date=iso > $TARGET_PATH
