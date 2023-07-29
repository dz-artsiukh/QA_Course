// const prompt = require("prompt-sync")();

let item_1 = 5;
console.log("item_1 =", item_1);

let item_2 = 3;
console.log("item_2 =",item_2);

let item_3 = item_1 + item_2;
console.log("item_3 =", item_3);

let item_4 = "Yolochka";
console.log("item_4 =", item_4);

console.log("item_3 + item_4 =", item_3 + item_4);
console.log("item_3 * item_4 =", item_3 * item_4);

let item_5 = item_3;

let item_6;
let item_6_type;

item_6 = 15;
item_6_type = typeof(item_6);
console.log("item_6 ==", item_6, "item_6_type ==", item_6_type);

let item_7 = item_6.toString();
let item_7_type = typeof(item_7);
console.log("item_7 ==", item_7, "item_7_type ==", item_7_type);

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;


// 29. Создать if в котором будите проверять значение переменной age_1
//  30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//  31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
//  32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//  33. Иначе выводите “Technical work”.
// 
if (age_1 < age_2){
    console.log("You don't have access cause your age is " + age_1 + " It's less than " + age_2);
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome!");
} else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel!");
}
else {
    console.log("Technical work");
};


// *
// 1*:


console.log("---*---");

const checkAge = function(age) {
    if (age < age_2){
        return console.log("You don't have access cause your age is " + age + " It's less than " + age_2);
    } else if (age >= age_2 && age < age_3) {
        return console.log("Welcome!");
    } else if (age > age_3) {
        return console.log("Keep calm and look Culture channel!");
    }
    return console.log("Technical work");
};

checkAge(17);
checkAge(18);
checkAge(61);


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
console.log("---**---")

const checkAge_1 = function(age) {
    // console.log("console log 1 = ", isNaN(age));
    if (typeof age == 'number') {
        if (age < age_2){
            return console.log("You don't have access cause your age is " + age + " It's less than " + age_2);
        } else if (age >= age_2 && age < age_3) {
            return console.log("Welcome!");
        } else if (age > age_3) {
            return console.log("Keep calm and look Culture channel!");
        } else {
            return console.log("Technical work");
        }
    }
    return console.log("Not a number");
};

checkAge_1(17);
checkAge_1(18);
checkAge_1(61);
checkAge_1("aa");



// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
console.log("---***----")
const checkAge_2 = function(age) {
    // console.log("console log 2 = ", isNaN(age));
    if (!isNaN(age)) {
        age = +age;
        if (age < age_2){
            return console.log("You don't have access cause your age is " + age + " It's less than " + age_2);
        } 
        
        else if (age >= age_2 && age < age_3) {
            return console.log("Welcome!");
        } 
        
        else if (age > age_3) {
            return console.log("Keep calm and look Culture channel!");
        } 
        
        else {
            return console.log("Technical work");
        }
    }
    return console.log("Not a number");
};

checkAge_2(17);
checkAge_2("2");
checkAge_2("aa");

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

console.log("----****---")
const checkAge_3 = function() {
    let age = prompt("Please enter you age: ");
    if (!isNaN(age)) {
        age = +age;
        if (age < age_2){
            return console.log("You don't have access cause your age is " + age + " It's less than " + age_2);
        } 
        
        if (age >= age_2 && age < age_3) {
            return console.log("Welcome!");
        } 
        
        if (age > age_3) {
            return console.log("Keep calm and look Culture channel!");
        } 
        
        return console.log("Technical work");

    }
    return console.log("Not a number");
};

checkAge_3();
checkAge_3();
checkAge_3();

// 4***: V.2
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

console.log("----****---")
const checkAge_3a = function(age) {
    // if (!isNaN(age)) {
    if (+age) {
        age = +age;
        if (age < age_2){
            return console.log("You don't have access cause your age is " + age + " It's less than " + age_2);
        }
        
        if (age >= age_2 && age < age_3) {
            return console.log("Welcome!");
        }
        
        if (age > age_3) {
            return console.log("Keep calm and look Culture channel!");
        }
        
        return console.log("Technical work");
    }

    return console.log("Not a number");
};

checkAge_3a(prompt("Enter your age: "));
checkAge_3a(6);
checkAge_3a(19);
checkAge_3a(61);
checkAge_3a("61a");
