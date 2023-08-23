--SQL_DDL
--Первая часть.
--
--Таблица employees
--
--1) Создать таблицу employees
--- id. serial,  primary key,
--- employee_name. Varchar(50), not null

CREATE TABLE employees (
	id serial PRIMARY KEY,
	employee_name VARCHAR(50) NOT NULL
);

--2) Наполнить таблицу employee 70 строками.

INSERT INTO employees(employee_name)
VALUES
	('Tanyana Vasilchuk'),
	('Ivana Lapnitskaya'),
	('Dmitry Patruk'),
	('Artur Bulavskiy'),
	('Anastasiya Shmel'),
	('Aspen Chen'),
	('Serena Robertson'),
	('Daniel Everett'),
	('Uriel Brady'),
	('Kamal Donovan'),
	('Fletcher Stanley'),
	('Aidan Delacruz'),
	('Jasper Britt'),
	('Abigail Fulton'),
	('Chase Hayden'),
	('Azalia Avila'),
	('Driscoll Ball'),
	('Noah Holland'),
	('Yeo Rosales'),
	('Theodore Franks'),
	('Vance Harrison'),
	('Forrest Barlow'),
	('Dalton Wilson'),
	('Abra Hull'),
	('Elizabeth Lester'),
	('Stewart Foreman'),
	('Fletcher Green'),
	('Chaim Cole'),
	('Melvin Alston'),
	('Jonas Carr'),
	('Nasim Rosa'),
	('Chanda Haynes'),
	('Acton Sargent'),
	('Ignacia Dixon'),
	('Jessica Briggs'),
	('Dacey Acosta'),
	('Calvin Lynn'),
	('Madison Barrett'),
	('Gabriel Vance'),
	('Preston Owens'),
	('Blake Pennington'),
	('Alden Winters'),
	('Xena Sims'),
	('Hedwig Love'),
	('Donovan Randolph'),
	('Seth Donaldson'),
	('Sopoline Peterson'),
	('Hedwig Mosley'),
	('Nicole Colon'),
	('Gray Moreno'),
	('Mollie Bush'),
	('Jasmine Bullock'),
	('Rebecca Lopez'),
	('Heidi Cortez'),
	('Elvis Barnett'),
	('Nola Erickson'),
	('Quemby Acosta'),
	('Kylie Bauer'),
	('Walter Anderson'),
	('Teagan Leonard'),
	('Carol Terrell'),
	('Vance Powers'),
	('Fuller Baxter'),
	('Ignatius Watkins'),
	('Wanda Carver'),
	('Britanney English'),
	('Matthew George'),
	('Cecilia Merritt'),
	('Breanna Whitaker'),
	('Josh Smith');

--Таблица salary

--3) Создать таблицу salary
--- id. Serial  primary key,
--- monthly_salary. Int, not null

CREATE TABLE salary (
	id serial PRIMARY KEY,
	monthly_salary INT NOT NULL
);

--4) Наполнить таблицу salary 15 строками:

INSERT INTO salary(monthly_salary)
VALUES
	(1000),
	(1100),
	(1200),
	(1300),
	(1400),
	(1500),
	(1600),
	(1700),
	(1800),
	(1900),
	(2000),
	(2100),
	(2200),
	(2300),
	(2400),
	(2500);


--Таблица employee_salary
--
--5) Создать таблицу employee_salary
--- id. Serial  primary key,
--- employee_id. Int, not null, unique
--- salary_id. Int, not null


CREATE TABLE employee_salary (
	id SERIAL PRIMARY KEY,
	employee_id INT NOT NULL UNIQUE,
	salary_id INT NOT NULL
	
	
--обозначить внешние ключи, через который будет связь с другими таблицами
--		FOREIGN KEY (employee_id)
--			REFERENCES employees(id),
--		FOREIGN KEY (salary_id)
--			REFERENCES salary(id)
);

--Удаление ограничения UNIQUE, В случае если добавили UNIQUE ограничение (constraint) к столбцу 
--Посмотреть название столбца в самой базе данных, чтобы потом его использовать для удаления ограничения UNIQUE

--SELECT *
--FROM information_schema.constraint_table_usage
--WHERE table_name = 'employee_salary';

--ALTER TABLE employee_salary
--DROP CONSTRAINT employee_salary_salary_id_key;


--6) Наполнить таблицу employee_salary 40 строками:
--- в 10 строк из 40 вставить несуществующие employee_id

INSERT INTO employee_salary(employee_id, salary_id)
VALUES
	(3, 7),
	(1, 4),
	(5, 9),
	(40, 13),
	(23, 4),
	(11, 2),
	(52, 10),
	(15, 13),
	(26, 4),
	(16, 1),
	(71, 7),
	(64, 8),
	(70, 2),
	(2, 5),
	(4, 15),
	(17, 14),
	(6, 13),
	(7, 12),
	(8, 11),	
	(91, 10),
	(77, 1),
	(98, 3),
	(9, 5),
	(10, 7),
	(12, 11),
	(13, 12),
	(14, 2),
	(18, 4),
	(100, 5),	
	(80, 9),
	(97, 11),
	(89, 10),
	(21, 1),
	(31, 3),
	(41, 6),
	(51, 7),
	(61, 8),
	(67, 9),
	(79, 12),	
	(81, 13);

--Таблица roles

--Создать таблицу roles
--- id. Serial  primary key,
--- role_name. int, not null, unique

CREATE TABLE roles (
	id SERIAL PRIMARY KEY,
	role_name INT NOT NULL UNIQUE
);


--Поменять тип столба role_name с int на varchar(30)

ALTER TABLE roles
ALTER COLUMN role_name TYPE VARCHAR(30);

--Наполнить таблицу roles 20 строками:

INSERT INTO roles(role_name)
VALUES
	('Junior Python developer'),
	('Middle Python developer'),
	('Senior Python developer'),
	('Junior Java developer'),
	('Middle Java developer'),
	('Senior Java developer'),
	('Junior JavaScript developer'),
	('Middle JavaScript developer'),
	('Senior JavaScript developer'),
	('Junior Manual QA engineer'),
	('Middle Manual QA engineer'),
	('Senior Manual QA engineer'),
	('Project Manager'),
	('Designer'),
	('HR'),
	('CEO'),
	('Sales manager'),
	('Junior Automation QA engineer'),
	('Middle Automation QA engineer'),
	('Senior Automation QA engineer');

--Таблица roles_employee
--
--10) Создать таблицу roles_employee
--- id. Serial  primary key,
--- employee_id. Int, not null, unique (внешний ключ для таблицы employees, поле id)
--- role_id. Int, not null (внешний ключ для таблицы roles, поле id)


CREATE TABLE roles_employee (
	id SERIAL PRIMARY KEY,
	employee_id INT NOT NULL UNIQUE,
	role_id INT NOT NULL,
		FOREIGN KEY (employee_id)
			REFERENCES employees(id),
		FOREIGN KEY (role_id)
			REFERENCES roles(id)
);


-- 11) Наполнить таблицу roles_employee 40 строками:
INSERT INTO roles_employee(employee_id, role_id)
VALUES
	(7,2),
	(20,4),
	(3,9),
	(5,13),
	(23,4),
	(11,2),
	(10,9),
	(22,13),
	(21,3),
	(34,4),
	(6,7),
	(66,18),
	(12,7),
	(61,9),
	(49,10),
	(52,8),
	(36,4),
	(45,7),
	(27,15),
	(25,4),
	(67,6),
	(69,8),
	(30,1),
	(26,12),
	(68,2),
	(65,3),
	(13,1),
	(33,20),
	(46,12),
	(62,4),
	(48,8),
	(50,11),
	(63,17),
	(19,7),
	(60,12),
	(28,10),
	(43,3),
	(38,5),
	(64,10),
	(39,3);

SELECT * FROM roles_employee;
