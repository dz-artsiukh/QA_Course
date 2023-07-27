#!/bin/bash
cd scriptest
mkdir 01hw_script
cd 01hw_script
mkdir f{1..3}
cd f1
touch text{1..3}.txt info{1..2}.json
mkdir subf{1..3}
ls -la
mv text1.txt text2.txt ../f2
