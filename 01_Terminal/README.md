![Dzianis Artsiukh_Terminal](https://github.com/dz-artsiukh/QA_Course/assets/117485665/fb4fb336-5444-4501-aafb-8fe064a91870)


## 01_HomeWork: Terminal (GitBash)
**1. See the current working directory path**
```
$ pwd

```
**2. Create directory**
```
$ mkdir 01hw

```
**3. Go to the directory, which was created**
```
$ cd 01hw

```
**4. Create 3 directories**
```
$ mkdir f1 f2 f3
OR
mkdir {1, f2, f3}
OR
mkdir f{1..3}

```
**5. Go to any directory**
```
$ cd f1

```
**6. Create 5 files: 3 txt, 2 json**
```
$ touch text{1..3}.txt info{1..2}.json

```
**7. Create 3 directories**
```

$ mkdir subf{1..3}

```
**8. Display contain of directory**
```
$ ls -la

```
**9,10,11. Open any text file, write something, save and close**
```
9 $ cat text1.txt
10 $ cat > text1.txt
	"Hi..."
11 Ctrl + D

```
**12 Shift one level above the current directory**
```
$ cd ..

```

**13 Move any 2 files to any directory**
```
$ mv f1/text1.txt f1/text2.txt f2

```
**14 Copy any 2 files to any directory**
```
$ cp f1/text3.txt f1/info1.json f3
```
**15 Find the file by name**
```
$ find . -name "text" 
OR 
$find . -name text1.txt
```
**16 View the contents of a file in real time**
```
$ tail -f f1/text1.txt | grep -i -C 2  "word"

```
**17 Print several first lines of the  file**
```
$ head -n 3 f1/res.txt
```
**18 Print several last lines of the  file**
```
$ tail -n 3 f1/res.txt

```
**19 Read the contents of a large text file**
```
$ less -n3 f1/res.txt

To close the window that appears press the key "q"
```
**20 Display date and time**
```

$ date
```
**21 Send an HTTP request to the server**
```
$ curl http://162.55.220.72:5005/

# REQUEST #1:
	curl http://162.55.220.72:5006/terminal-hw-request

# RESPONSE #1

"Intro": "Hello!! This is your the first response from server",
  "Tasks": {
    "Task_1": "Send the next URL in terminal: http://162.55.220.72:5005/get_method?name=(set_your_String)&age=(set_your_number)",
    "result": [
      "Your_String",
      "Your_number"
    ]
  }
}
	
# REQUEST #2
	curl 'http://162.55.220.72:5005/get_method?name=Dennis&age=37'                                                                 

# RESPONSE #2

[
  "Denis",
  "37"
]


```
**22 Write a script that will automatically execute steps 3-8,13**
```
$ cat > script.sh

# Open a file
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

# Make script executable
$ chmod +x script.txt

# Run a script
$ bash script.sh
```
## 02_Homework Terminal (GitBash)

**1. Create the directory**
```
$ mkdir dir_1
```
**2. Go to the directory, which was created**
```
$ cd dir_1
```
**3. Create the directory inner_dir_1**
```
$ mkdir inner_dir_1
```
**4. See the current working directory path**
```
$ pwd
```
**5. Create the empty file tf_1.txt**
```
$ touch tf_1.txt
```
**6. Using the command cat, create file tf_2.txt, containing lines: the first 1, the second 2, the third 3**
```
$ cat > tf_2.txt
" - the first 1
- the second 2
- the third 3с "
```
**7. Go to a directory inner_dir_1**
```
$ cd inner_dir_1
```
**8. Using the command cat, create file tf_3.txt, containing any lines**
```
$ cat > tf_3.txt -->
"any row 1
second any row 2
last any row 3 "
```
**9. Using the command cat, add to tf_3.txt line “the second 2”**
```
$ cat >> tf_3.txt
"the second 2"
```
**10. Using the command cat, add to tf_3.txt line “the sec 2”**
```
$ cat >> tf_3
"the sec 2"
```

**11. Using the command cat, add to tf_2.txt line “the sec 3”**
 ```
$ cat ../tf_2.txt
"the sec 3"
```
**12. Using the command cat, add to tf_3.txt line “the SeCoNd 2”**
```
$ cat >>  tf_3.txt
"the SeCoNd 2"
```
**13. Using the command cat, add to tf_2.txt line “the seConD 2”**
```
$ cat >> ../tf_2.txt
"the seConD 2"
press: ctrl+D to exit editor and save input
```
**14. Create the text file tf_4.txt, containing 15 lines**
```
$ cat > tf_4.txt
add 15 rows
press: ctrl+D to exit editor and save input
```
**15. Create the text file tF_5.txt, containing 13 lines**
```
$ cat > tF_5.txt -->
add 13 rows
press: ctrl+D to exit editor and save input
```
**16. Display the list of the contents of your current working directory**
```
$ ls -la
```
**17. Move up one  directory level**

```
$ cd ..
```
**18. Display contain of the file tf_3.txt**
```
$ cat inner_dir_1/tf_3.txt
```
**19. Find the path to the file tf_4.txt**
```
$ find . -name tf_4.txt //путь относительно папки, в которой находишься
OR
find $(pwd) -name tf_4.txt //абсолютный путь к файлу
OR
realpath inner_dir_1/tf_4.txt
OR
readlink -f inner_dir_1/tf_4.txt
```
**20. Clear the file tf_4.txt from the contents without deleting the file itself**
```
$ cat > inner_dir_1/tf_4.txt
press ctrl+D to save and exit editor
OR
> inner_dir_1/tf_4.txt --> ctrl+D
press ctrl+D to save and exit editor
```
**21. Find the path to files that have "tf" in their names**
```
$ find . -name "*tf*"
OR
find $(pwd) -name "*tf*"
```
**22. Find the path to files that have "tf" in their names in a case-insensitive manner**
```
$ find . -iname "*tf*"
```
**23. Find lines in files where there is a combination of letters "sec" in the current directory**
```
$ grep sec *   (only in this folder)
$ grep -r sec  (+ subfolders)
```
**24. Find lines in files where there is a combination of letters "sec" in a case-insensitive manner in the current directory**
```
$ grep -i sec * 
```
(only this folder)

```
$ grep -i sec *
```
(- subfolders)
```
$ grep -i -r sec 
```
(+ subfolders)
**25. Find lines in files where there is only a combination of letters "sec" in the current directory**
```
$ grep -w sec * (- subfolders)
$ grep -r -w sec (+ subfolders)
```
**26. Find lines in files where there is only a combination of letters "sec" in a case-insensitive manner in the current directory**
```
$ grep -iw sec * (- subfolders)
$ grep -irw "sec" (+ subfolders)
```
**27. Find lines in files where there is a combination of letters "second" in the current directory**

```
$ grep second *
$ grep -r second
```
**28. Find lines in files where there is a combination of letters "second" in a case-insensitive manner in the current directory**
```
$ grep -i second *
$ grep -ir second
```
**29. Find lines in files that contain the letter combination "second" in all folders  level lower**

```
$ grep -r second (to find in all subdirectories)
$ grep -r "second" ../.. (to find file one level lower)
$ grep -r "second" */* (to find file in folders one level up)
```
**30. Find the name and path to files where there is a combination of letters "second" in the current directory**
```
$ grep -l second * 
$ grep -l -r second
```
**31. Find lines in files where there isn't a combination of letters "second"**
```
$ grep -v second *
$ grep -rv second
```
**32. Find the name and path to files where there isn't a combination of letters "second"**
```
$ grep -L second * (only in this folder without subfolders)
$ grep -rL second (+subfolders)
```
**33. Display the last 4 lines of any text file**
```
$ tail -n 4 inner_dir_1/tF_5.txt
```

**34. Display the first 4 lines of any text file**
```
$ head -n 4 inner_dir_1/tF_5.txt
```

**35. Command in a single line. Create a directory and create a text file with contents**

```
$ mkdir inner_dir_2 && echo "Some text" > inner_dir_2/some_text.txt
```
**36. Command in a single line. Move text files where there is a word "sec" to any directory**

```
$ mv $(grep -lr sec) inner_dir_2
```

**37. Command in a single line. Cory text files where there is a word "sec" to any directory**
```
$ cp $(grep -lr sec) inner_dir_3
```
**38. Command in a single line. Find lines in files where there is a combination of letters "sec". Cory these lines to new text files**
```
$ grep -rh sec > sec_log.txt
```
**39. Command in a single line. Delete files where there is a word "sec"**

```
$ rm $(grep -lr sec)   - (+subfolders)
$ rm $(grep -l sec *)  - (-subfolders)

```
**40. Display the spring "Good Job!!" to the screen**
```
$ echo 'Good job!!'
	OR
$ echo Good job\!!
```
