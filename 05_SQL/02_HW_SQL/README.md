## SQL_HW_1

### Создать .sql файл в котором под каждой командой напишите sql запрос который выполнит команду.

### 1. Вывести все поля и все строки.
```
SELECT * FROM public.students;
```

###  2. Вывести всех студентов в таблице
```
SELECT "name" FROM public.students;
```

### 3. Вывести только Id пользователей
```
SELECT id FROM public.students;
```

### 4. Вывести только имя пользователей
```
SELECT "name" FROM public.students;
```

### 5. Вывести только email пользователей
```
SELECT email FROM public.students;
```

### 6. Вывести имя и email пользователей
```
SELECT "name", email FROM public.students;
```

### 7. Вывести id, имя, email и дату создания пользователей
```
SELECT id, "name", email, created_on FROM public.students;
```

### 8. Вывести пользователей где password 12333
```
SELECT * FROM public.students
WHERE "password" = '12333';
```

### 9. Вывести пользователей которые были созданы 2021-03-26 00:00:00
```
SELECT * FROM public.students
WHERE created_on = '2021-03-26 00:00:00';
```

### 10. Вывести пользователей где в имени есть слово Анна
```
SELECT * FROM public.students
WHERE "name" LIKE '%Anna%';
```

### 11. Вывести пользователей где в имени в конце есть 8
```
SELECT * FROM public.students
WHERE "name" LIKE '%8';
```

### 12. Вывести пользователей где в имени в есть буква а
```
SELECT * FROM public.students
WHERE "name" LIKE '%a%';
```

### 13. Вывести пользователей которые были созданы 2021-07-12 00:00:00
```
SELECT * FROM public.students
WHERE created_on = '2021-07-12 00:00:00';
```

### 14. Вывести пользователей которые были созданы 2021-07-12 00:00:00 и имеют пароль 1m313
```
SELECT * FROM public.students
WHERE created_on = '2021-07-12 00:00:00' AND "password" LIKE '1m313';
```

### 15. Вывести пользователей которые были созданы 2021-07-12 00:00:00 и у которых в имени есть слово Andrey
```
SELECT * FROM public.students
WHERE created_on = '2021-07-12 00:00:00' AND "name" LIKE '%Andrey%';
```

### 16. Вывести пользователей которые были созданы 2021-07-12 00:00:00 и у которых в имени есть цифра 8
```
SELECT * FROM public.students
WHERE created_on = '2021-07-12 00:00:00' AND "name" LIKE '%8%';
```

### 17. Вывести пользователя у которых id равен 110
```
SELECT * FROM public.students
WHERE id = 110;
```

### 18. Вывести пользователя у которых id равен 153
```
SELECT * FROM public.students
WHERE id > 140;
```

### 19. Вывести пользователя у которых id больше 140
```
SELECT * FROM public.students
WHERE id > 140;
```

### 20. Вывести пользователя у которых id меньше 130
```
SELECT * FROM public.students
WHERE id < 130;
```

### 21. Вывести пользователя у которых id меньше 127 или больше 188
```
SELECT * FROM public.students
WHERE id < 127 OR id > 188;
```

### 22. Вывести пользователя у которых id меньше либо равно 137
```
SELECT * FROM public.students
WHERE id <= 137;
```

### 23. Вывести пользователя у которых id больше либо равно 137
```
SELECT * FROM public.students
WHERE id >= 137;
```

### 24. Вывести пользователя у которых id больше 180 но меньше 190
```
SELECT * FROM public.students
WHERE id > 180 AND id < 190;
```

### 25. Вывести пользователя у которых id между 180 и 190
```
SELECT * FROM public.students
WHERE id BETWEEN 180 AND 190;
```

### 26. Вывести пользователей где password равен 12333, 1m313, 123313
```
SELECT * FROM public.students
WHERE "password" = '12333' OR "password" = '1m313' OR "password" = '123313';
```
```
SELECT * FROM public.students
WHERE "password" LIKE '12333' OR "password" LIKE '1m313' OR "password" LIKE '123313';
```

### 27. Вывести пользователей где created_on равен 2020-10-03 00:00:00, 2021-05-19 00:00:00, 2021-03-26 00:00:00
```
SELECT * FROM public.students
WHERE created_on = '2020-10-03 00:00:00' OR created_on = '2021-05-19 00:00:00' OR created_on = '2021-03-26 00:00:00';
```

### 28. Вывести минимальный id 
- отобразить только столбец с минимальным ID
```
SELECT MIN(id) FROM public.students;
```
- отобразить пользователя, у которого минимальный ID
```
SELECT * FROM public.students
WHERE id = (
	SELECT MIN(id) FROM public.students
);
```

### 29. Вывести максимальный id.
- отобразить только столбец с минимальным id
```
SELECT MAX(id) FROM public.students;
```
- отобразить всю строку с минимальным id
```
SELECT * FROM public.students
WHERE id = (
	SELECT MAX(id) FROM public.students
);
```

### 30. Вывести количество пользователей
- общее кол-во рядов
```
SELECT COUNT(*) FROM public.students;
```
- общее количество id в таблице
```
SELECT COUNT(id) FROM public.students;
```

### 31. Вывести id пользователя, имя, дату создания пользователя. Отсортировать по порядку возрастания даты добавления пользоватлеля.
```
SELECT id, name, created_on FROM public.students
ORDER BY created_on ASC;
```

### 32. Вывести id пользователя, имя, дату создания пользователя. Отсортировать по порядку убывания даты добавления пользоватлеля.
```
SELECT id, name, created_on FROM public.students
ORDER BY created_on DESC;
```
