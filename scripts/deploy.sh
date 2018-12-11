#!/bin/bash

# Check that script is being run on master branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "master" ]]; then
  echo -e "\033[1;31mDeployment only allowed on master branch\033[0m"
  exit 1;
fi

# Require a commit message
if [ $# -eq 0 ]
  then
    echo -e "\033[1;31mCommit message required\033[0m"
    exit 1
fi

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd public
# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master

# Come Back up to the Project Root
cd ..