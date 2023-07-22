#!/bin/bash

# exit immediately if any command fails
set -e
echo "Deployment started ..."
git pull origin master
echo "Deployment finished!"
