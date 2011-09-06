#!/bin/bash

FILENAME=Kog_$1.tgz
DIRPATH=./Archives/
IDISKPATH=/Volumes/umezaki/Documents/Kogarashi/

if [ $1 ]
then
	echo making $FILENAME backup to $DIRPATH

	tar czf $DIRPATH$FILENAME *.csv *.js *.maxpat *.txt *.awk *.sh
	
	if [ -d $IDISKPATH ]
	then
		echo copying to $IDISKPATH
		cp $DIRPATH$FILENAME $IDISKPATH
	else
		echo $IDISKPATH not found
	fi
	
else
	echo "usage: backup date (e.g. backup 090411)"
fi
