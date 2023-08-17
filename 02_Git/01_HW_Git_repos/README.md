## Homework #1

### [JSON](https://github.com/dz-artsiukh/QA_Course/tree/main/02_Git/JSON)

### 4. Создать внешний репозиторий c названием JSON.
- В свеом аккаунте GitHub кликнуть Repositories;
- кликнуть [New]
- ввести имя 'JSON'
- выбрать Public + readme, 
- кликнуть 'Create repository'

### 5. Клонировать репозиторий JSON на локальный компьютер.

- в созданном репозитории нажать [Clone] и скопировать ссылку 
- в терминале ввести `git clone https://github.com/dz-artsiukh/JSON.git`

### 6. Внутри локального JSON создать файл “new.json”. 

- `cd json` 
- `touch new.json`

### 7. Добавить файл под гит 

- `git add new.json`
OR
- `git add .`

### 8. Закоммитить файл. 

- `git commit -m "first file add"`

### 9. Отправить файл на внешний GitHub репозиторий. 

- `git push`

### 10. Отредактировать содержание файла “new.json” - написать информацию о себе (ФИО, возраст, количество домашних животных, 
будущая желаемая зарплата). Всё написать в формате JSON. 

- `vim new.json` 

```
{
        "O_sebe":{
                        "Full_name": "Dzianis Artsiukh",
                        "Age": "37",
                        "Number of pets": 1,
                        "Anticipated salary": 2000
                }
}
```

### 11. Отправить изменения на внешний репозиторий.

- `git add new.json` 
- `git commit -m "about myself"` 
- `git push`

### 12. Создать файл preferences.json  

- `touch preferences.json`

### 13. В файл preferences.json добавить информацию о своих предпочтениях (Любимый фильм, любимый сериал, любимая еда, любимое время года, сторона которую хотели бы посетить) в формате JSON. - vim preferences.json --> i
- `vim preferences.json`
```
{
        "Preferences":{
                        "Favourite film": "Corageous",
                        "Favourire TV series": "The Chosen",
                        "Favourite food": "Fried potato",
                        "Favourite season": "Summer",
                        "Country you wish to travel to": "Georgia"
                        }
}
```
- esc --> :wq

### 14. Создать файл sklls.json добавить информацию о скиллах которые будут изучены на курсе в формате JSON cat > skills.json -->

- `vim skills.json`
```
{
        "skills":{
                "skill 1": "terminal",
                "skill 2": "git",
                "skill 3": "HTTP requests",
                "skill 4": "testing of mobile applications",
                "skill 5": "testing of web-sites"
                }
}
```
- esc --> :wq
- `git add preferences.json skills.json`
- `git commit -m "preferences + skills"`
- `git push`

### 15. Отправить сразу 2 файла на внешний репозиторий. 

- `git add preferences.json skills.json` 
- `git commit -m "preferences + skills"`
- `git push`

### 16. На веб интерфейсе создать файл bug_report.json. 

- Add file 
- Create new file

### 17. Сделать Commit changes (сохранить) изменения на веб интерфейсе. 

- press button "Commit changes"

### 18. На веб интерфейсе модифицировать файл bug_report.json, добавить баг репорт в формате JSON.
- нажать "Edit this file"
```
{
    "bug report":{
                "ID": 1,
                "Severity": "Minor",
                "Environment": "MacOS Ventura 13.4.1 Chrome 114",
                "Title": "[Become a partner] button on 'Our partners' page in [أكثر] ([More]) menu isn't translated when selected langauge is AR",
                "Steps": [ { 
                            "1.": "Navigate to capital.com",
                            "2.": "Select AR language",
                            "3.": "Hover over [أكثر] ([More]) menu"
                            "4.": "Click on menu item [شركاؤنا] ([Our partners])",
                            "": "Note: The bug is also reproduced for the mobile"
                        } ]
                "Expected result": "[Become a partner] button is translated to AR",
                "Actual result": "[Become a partner] button isn't translated to AR",
                "License": "ALL",
                "Role": "ALL",
                "Link": "https://drive.google.com/file/d/1-9NZu1E58CC2n3l2r1bDMtY6V7-I92Ru/view?usp=sharing",
                "Bug started": "@ideear",
                "Bug reproduced": "",
                "Bug didn't reproduce": ""
                }
}
```
### 19. Сделать Commit changes (сохранить) изменения на веб интерфейсе. 

- Commit changes

### 20. Синхронизировать внешний и локальный репозиторий JSON 

- `git pull`



### [XML] (https://github.com/dz-artsiukh/QA_Course/tree/main/02_Git/XML)

### 21. Создать внешний репозиторий c названием XML. 
- В свеом аккаунте GitHub кликнуть Repositories;
- кликнуть [New]
- ввести имя 'XML'
- выбрать Public + readme, 
- кликнуть 'Create repository'

### 22. Клонировать репозиторий XML на локальный компьютер. 

- в созданном репозитории нажать [Clone] и скопировать ссылку 
- в терминале ввести `git clone https://github.com/dz-artsiukh/XML.git`

### 23. Внутри локального XML создать файл “new.xml”. 

- `touch new.xml`

### 24. Добавить файл под гит. 

- `git add new.xml`

### 25. Закоммитить файл. 

- `git commit -m "first commit: created xml"`

### 26. Отправить файл на внешний GitHub репозиторий. 

- `git push`

27. Отредактировать содержание файла “new.xml” - написать информацию о себе (ФИО, возраст, количество домашних животных, будущая желаемая зарплата). Всё написать в формате XML.

- `cat >> new.xml`
```
<about_me>
	<full_name>Dzianis Artsiukh</full_name>
	<age>37</age>
	<animals>1</animals>
	<anticipated salary>2000</anticipated salary>
</about_me>
```
### 28. Отправить изменения на внешний репозиторий. 

- `git add new.xml` 
- `git commit -m "added info to xml"` 
- `git push`

### 29. Создать файл preferences.xml 

- `touch preferences.xml`

### 30. В файл preferences.xml добавить информацию о своих предпочтениях (Любимый 
фильм, любимый сериал, любимая еда, любимое время года, сторона которую хотели бы посетить) в формате XML.

- `vim preferences.xml`
- press "i"
```
<preferences>
	<favorite_film>Courageous</favorite_film>
	<favorite_TV_series>The Chosen</favorite_TV_series>
	<favorite_food>Fried potato</favorite_food>
	<favorite_season>Summer</favorite_season>	
	<country_wish_to_travel_to>Georgia</country_wish_to_travel_to>
</preferences>
```
- esc --> :wq

### 31. Создать файл sklls.xml добавить информацию о скиллах которые будут изучены на курсе в формате XML

- `vim skills.xml`
- press "i"
```
<skills>
	<skill_1>Terminal</skill_1>
	<skill_2>git</skill_2>
	<skill_3>HTTP requests</skill_3>
	<skill_4>testing of mobile applications</skill_4>
	<skill_5>testing of web-sites</skill_5>
	<skill_6>writing bug reports</skill_6>
	<skill_7>writing test cases</skill_7>
</skills>
```
- esc --> :wq

### 32. Сделать коммит в одну строку. 
- `git commit -am commit "fixed code in files"`
### 33. Отправить сразу 2 файла на внешний репозиторий 

- `git push`

### 34. На веб интерфейсе создать файл bug_report.xml. 

- Add file -> Create new file

###  35. Сделать Commit changes (сохранить) изменения на веб интерфейсе. 

- Commit changes

### 36. На веб интерфейсе модифицировать файл bug_report.xml, добавить баг репорт в формате XML. 

- нажать "Edit this file"
```
<bug_report>
                <id>1</id>
                <severity>Minor</severity>
                <Environment>MacOS Ventura 13.4.1 Chrome 114</Environment>
                <Title>[Become a partner] button on 'Our partners' page in [أكثر] ([More]) menu isn't translated when selected langauge is AR</Title>
                <Steps> https://github.com/dz-artsiukh/XML/blob/main/bug_report.xml
                      <n1>Navigate to capital.com</n1>
                      <n2>Select AR language</n2>
                      <n3>Hover over [أكثر] ([More]) menu</n3>
                      <n4>Click on menu item [شركاؤنا] ([Our partners])</n4>
                      <Note>The bug is also reproduced for the mobile</Note>
                </Steps>
                <Expected_result>[Become a partner] button is translated to AR</Expected_result>
                <Actual_result>[Become a partner] button isn't translated to AR</Actual_result>
                <License>ALL</License>
                <Role>ALL</Role>
                <Link>https://drive.google.com/file/d/1-9NZu1E58CC2n3l2r1bDMtY6V7-I92Ru/view?usp=sharing</Link>
                <Bug_started>@ideear</Bug_started>
                <Bug_reproduced> </Bug_reproduced>
                <Bug_didnt_reproduce> </Bug_didnt_reproduce>
</bug_report>
```

### 37. Сделать Commit changes (сохранить) изменения на веб интерфейсе. 

- нажать кнопку "Commit changes"

### 38. Синхронизировать внешний и локальный репозиторий XML 

- `git pull`

### [TXT](https://github.com/dz-artsiukh/QA_Course/tree/main/02_Git/TXT)

### 1. Создать внешний репозиторий c названием TXT. 

- В свеом аккаунте GitHub кликнуть Repositories;
- кликнуть [New]
- ввести имя 'TXT'
- выбрать Public + readme, 
- кликнуть 'Create repository'

### 2. Клонировать репозиторий TXT на локальный компьютер. 

- `git clone https://github.com/dz-artsiukh/TXT.git`

### 3. Внутри локального TXT создать файл “new.txt”. 

- `touch new.txt`

### 4. Добавить файл под гит. 

- `git add new.txt`

### 5. Закоммитить файл.

- `git commit -m "new file create"`

### 6. Отправить файл на внешний GitHub репозиторий.

- `git push`

### 7. Отредактировать содержание файла “new.txt” - написать информацию о себе (ФИО, возраст, количество домашних животных, будущая желаемая зарплата). Всё написать в формате TXT.

- `cat >> new.txt`
```
	"Full name: Dzianis Artsiukh
	Age: 37
	Number of animals: 1
	Anticipated salary: 2000"
```

### 8. Отправить изменения на внешний репозиторий. 

- `git commit -am "info added"` 
- `git push`

### 9. Создать файл preferences.txt 

- `touch preferences.txt`

### 10. В файл preferences.txt” добавить информацию о своих предпочтениях (Любимый фильм, любимый сериал, любимая еда, любимое время года, сторона которую хотели бы посетить) в формате TXT.

- `cat >> preferences.txt`
```	
	"Favorite film: Courageous
	Favorite TV serial: The Chosen
	Favorite food: Fried potatos
	Favorite season: Summer
	Country you wish to travel to: Georgia"
```
### 11. Создать файл sklls.txt добавить информацию о скиллах которые будут изучены на курсе в формате TXT

- `cat > skills.txt`
```
	"...
	skills
	..."
```

### 12. Сделать коммит в одну строку.

- `git add skills.txt preferences.txt && git commit -m "3 text files added"`

### 13. Отправить сразу 2 файла на внешний репозиторий.

- `git push`

### 14. На веб интерфейсе создать файл bug_report.txt. 

- кликнуть "Create new file"
- ввести имя файла "bug_report.txt" 

### 15. Сделать Commit changes (сохранить) изменения на веб интерфейсе.

- кликнуть "Commit changes"

### 16. На веб интерфейсе модифицировать файл bug_report.txt, добавить баг репорт в формате TXT.

- кликнуть  "Edit this file"  

### 17. Сделать Commit changes (сохранить) изменения на веб интерфейсе.

- кликнуть "Commit changes"

### 18. Синхронизировать внешний и локальный репозиторий TXT 
- `git pull`