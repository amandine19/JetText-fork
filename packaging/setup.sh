#!/bin/bash

git --version foo >/dev/null 2>&1 || { 
	echo >&2 "Git missing.";
	sudo bash -c 'apt-get -y install git >/dev/null 2>&1 & disown'
}

ffmpeg -L foo >/dev/null 2>&1 || { 
	echo >&2 "FFMPEG missing.";
	git clone git://source.ffmpeg.org/ffmpeg.git ffmpeg
	ffmpeg/configure && make && make install
}