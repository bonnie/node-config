#!/bin/bash

if [ $# -ne 1 ]
then
  echo ''
  echo 'USAGE: mknode <project name>'
  echo '    A new project directory with <project name> will be built'
  echo '    in the current directory, and default node options will be'
  echo '    initialized and installed.'
  echo ''
  exit
fi

if [ -d $1 ]; then
  echo "$1 already exists. Exiting."
  echo
  exit
fi

mkdir $1
cd $1
npm init --yes
npm install
