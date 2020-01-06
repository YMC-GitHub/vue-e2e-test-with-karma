#!/bin/sh

#tasks:
#back up old author code some branch
#create a none commit log branch

old="master"
new="ymc"

#back up old author code some branch
git branch "$old" && git checkout --orphan "$new"

#create a none commit log branch
git checkout --orphan "$new"

#file-usage
#./dev/start-with-new-user.sh
