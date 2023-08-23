## SQL HomeWork 2. Joins

- Подключиться к 
- Host: 159.69.151.133
- Port: 5056
- DB: подключение к той таблице где делали DDL операции
- User: подключение к тем пользователем каким делали DDL операции
- Pass: 123


###  1. Вывести всех работников чьи зарплаты есть в базе, вместе с зарплатами.
```
SELECT employees.employee_name, salary.monthly_salary 
FROM employees 
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id;
```

###  2. Вывести всех работников у которых ЗП меньше 2000.
```
SELECT employees.employee_name, salary.monthly_salary 
FROM employees 
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE monthly_salary < 2000;
```

###  3. Вывести все зарплатные позиции, но работник по ним не назначен. (ЗП есть, но не понятно кто её получает.)
```
SELECT employees.employee_name, salary.monthly_salary 
FROM employees 
FULL OUTER JOIN employee_salary ON employees.id = employee_salary.employee_id
FULL OUTER JOIN salary ON salary.id = employee_salary.salary_id
WHERE employee_name IS NULL;
```

###  4. Вывести все зарплатные позиции  меньше 2000 но работник по ним не назначен. (ЗП есть, но не понятно кто её получает.)
```
SELECT employees.employee_name, salary.monthly_salary 
FROM employees 
FULL OUTER JOIN employee_salary ON employees.id = employee_salary.employee_id
FULL OUTER JOIN salary ON salary.id = employee_salary.salary_id
WHERE employee_name IS NULL AND monthly_salary < 2000;
```

###  5. Найти всех работников кому не начислена ЗП.
```
SELECT employees.employee_name, salary.monthly_salary 
FROM employees 
FULL OUTER JOIN employee_salary ON employees.id = employee_salary.employee_id
FULL OUTER JOIN salary ON salary.id = employee_salary.salary_id
WHERE monthly_salary IS NULL;
```

### 6. Вывести всех работников с названиями их должности.
```
SELECT employees.employee_name, roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id;
```

###  7. Вывести имена и должность только Java разработчиков.
```
SELECT employees.employee_name, roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
WHERE role_name LIKE '%Java %';
```

###  8. Вывести имена и должность только Python разработчиков.
```
SELECT employees.employee_name, roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
WHERE role_name LIKE '%Python %';
``` 

###  9. Вывести имена и должность всех QA инженеров.
```
SELECT employees.employee_name, roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
WHERE role_name LIKE '%QA %';
```

###  10. Вывести имена и должность ручных QA инженеров.
```
SELECT employees.employee_name, roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
WHERE role_name LIKE '%Manual QA %';
```

###  11. Вывести имена и должность автоматизаторов QA
```
SELECT employees.employee_name, roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
WHERE role_name LIKE '%Automation %';
```

###  12. Вывести имена и зарплаты Junior специалистов
```
SELECT employees.employee_name, salary.monthly_salary, roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE 'Junior %';
```

###   13. Вывести имена и зарплаты Middle специалистов
```
SELECT employees.employee_name, salary.monthly_salary, roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE 'Middle %';
```
  
###   14. Вывести имена и зарплаты Senior специалистов
```
SELECT employees.employee_name, salary.monthly_salary, roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE 'Senior %';
```

### 15. Вывести зарплаты Java разработчиков
```
SELECT salary.monthly_salary ### employees.employee_name, ### , roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE '%Java %';
```

### 16. Вывести зарплаты Python разработчиков
```
SELECT salary.monthly_salary ### employees.employee_name, ### , roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE '%Python %';
```

### 17. Вывести имена и зарплаты Junior Python разработчиков
```
SELECT employees.employee_name, salary.monthly_salary ### , roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE '%Junior Python %';
```

###  18. Вывести имена и зарплаты Middle JS разработчиков
```
SELECT employees.employee_name, salary.monthly_salary ### , roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE '%Middle JavaScript %';
```

### 19. Вывести имена и зарплаты Senior Java разработчиков
```
SELECT employees.employee_name, salary.monthly_salary ### , roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE '%Senior Java %';
```

###  20. Вывести зарплаты Junior QA инженеров
```
SELECT employees.employee_name, salary.monthly_salary ### , roles.role_name 
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE 'Junior % QA %';
```

### 21. Вывести среднюю зарплату всех Junior специалистов
```
SELECT AVG(salary.monthly_salary) AS Средняя_зп
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE 'Junior %';
```

### 22. Вывести сумму зарплат JS разработчиков
```
SELECT SUM(salary.monthly_salary) AS Сумма_зарплат
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE '%JavaScript%';
```

### 23. Вывести минимальную ЗП QA инженеров
```
SELECT MIN(salary.monthly_salary) AS Минимальная_ЗП
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE '%QA%';
```

### 24. Вывести максимальную ЗП QA инженеров
```
SELECT MAX(salary.monthly_salary) AS Максимальная_ЗП
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE '%QA %';
```

### 25. Вывести количество QA инженеров
```
SELECT COUNT(roles.role_name) AS Количество_QA
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
### INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
### INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE '%QA %';
```

###  26. Вывести количество Middle специалистов.
```
SELECT COUNT(roles.role_name) AS Количество_Middle
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
### INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
### INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE '%Middle %';
```

### 27. Вывести количество разработчиков
```
SELECT COUNT(roles.role_name) AS Количество_devs
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
### INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
### INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE '%developer%';
```

###  28. Вывести фонд (сумму) зарплаты разработчиков.
```
SELECT SUM(salary.monthly_salary) AS Сумма_ЗП_devs
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE role_name LIKE '%developer%';
```
 
###  29. Вывести имена, должности и ЗП всех специалистов по возрастанию
```
SELECT employees.employee_name AS Имя, roles.role_name AS Должность, salary.monthly_salary AS Зарплата
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
ORDER BY (salary.monthly_salary) ASC;
``` 

### 30. Вывести имена, должности и ЗП всех специалистов по возрастанию у специалистов у которых ЗП от 1700 до 2300
```
SELECT employees.employee_name AS Имя, roles.role_name AS Должность, salary.monthly_salary AS Зарплата
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE salary.monthly_salary BETWEEN 1700 AND 2300
ORDER BY (salary.monthly_salary) ASC;
```

### 31. Вывести имена, должности и ЗП всех специалистов по возрастанию у специалистов у которых ЗП меньше 2300
```
SELECT employees.employee_name AS Имя, roles.role_name AS Должность, salary.monthly_salary AS Зарплата
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE salary.monthly_salary < 2300
ORDER BY (salary.monthly_salary) ASC;
```

### 32. Вывести имена, должности и ЗП всех специалистов по возрастанию у специалистов у которых ЗП равна 1100, 1500, 2000
```
SELECT employees.employee_name AS Имя, roles.role_name AS Должность, salary.monthly_salary AS Зарплата
FROM employees 
INNER JOIN roles_employee ON employees.id = roles_employee.employee_id
INNER JOIN roles ON roles.id = roles_employee.role_id
INNER JOIN employee_salary ON employees.id = employee_salary.employee_id
INNER JOIN salary ON salary.id = employee_salary.salary_id
WHERE salary.monthly_salary IN (1100, 1500, 2000)
ORDER BY (salary.monthly_salary) ASC;
```
