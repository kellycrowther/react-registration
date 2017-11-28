#!/bin/bash

echo "Your comment, followed by [ENTER]:"
read comment

git pull
git add .
git commit -a -m "${comment}"
git push
