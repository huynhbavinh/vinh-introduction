#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:huynhbavinh/vinh-introduction.git main:gh-pages

cd -