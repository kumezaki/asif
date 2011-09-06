#!/bin/bash

FILENAME=tmp.js

cd ~/Docs/Music/Kogarashi
pwd

export PATH=$PATH:/usr/local/bin
echo $PATH

FILENAME_AWK=kog_score_parser.awk
FILENAME_CSV=kog_score.csv
cp Kogarashi\ Score.csv $FILENAME_CSV
if [ -e $FILENAME_AWK ]
then
	echo $FILENAME_AWK found
	if [ -e $FILENAME_CSV ]
	then
		echo $FILENAME_CSV found
		gawk -f $FILENAME_AWK $FILENAME_CSV > $FILENAME
	else
		echo $FILENAME_CSV not found
		exit
	fi
else
	echo $FILENAME_AWK not found
	exit
fi

cp $FILENAME Kog_Comb_Score_Cues.js

echo success!!!
