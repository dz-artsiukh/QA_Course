//  3. Минимум 5 символов в строке 4. Максимум 64 символа в строке
const validLength = function(stroka) {
    
    if (stroka.replace(/\s/g, "").length < 5) {
        return console.log("Length is less than 5 characters");

    } else if (stroka.replace(/\s/g, "").length > 64) {
        return console.log("Length is more than 64 characters");
    }
};

//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
const includeLetters = function(stroka) {
    if (!/[a-zA-Z]/.test(stroka)) {
        return console.log(`Should contain letters`);
    }

    if (!/[A-Z]/.test(stroka)) {
        return console.log(`At least 1 CAPITAL letter is required`);
    }
};

//  7. Должна быть хотя бы одна цифра
const includeNum = function (stroka) {
    if (!/[0-9]/.test(stroka)) {
        return console.log(`At least 1 number is required`);
    }
};

//  8. Должна быть хотя бы одна @
const includeSymbol = function (stroka) {
    if (!/[@]/.test(stroka)) {
        return console.log(`At least 1 symbol '@' is required`);
    }    
};

//  9. Строка не должна быть пустой

const isNotEmpty = function (stroka) {
    if (stroka.replace(/\s/g, "").length === 0) {
    // if (typeof stroka === 'string' && stroka.trim(" ").length === 0) {
        return console.log('The string is empty');
      }
};


// Функция, объединяющая все функции
const validationScript = function(stroka) {
    console.log(`Your string: ${stroka}`);
    validLength(stroka);
    includeLetters(stroka);
    includeNum(stroka);
    includeSymbol(stroka);
    isNotEmpty(stroka); 
    // alert(validLength(stroka), includeLetters(stroka), includeNum(stroka), includeSymbol(stroka), isNotEmpty(stroka),);
};

let n = "y"
while (n == "y") {
    validationScript(prompt("Please enter valid string"));
    n = alert("Press 'y' to reentere or any other key to stop");
}

// console.log("------1------");
// validationScript("12345");
// console.log("------2------");
// validationScript("asdfg");
// console.log("------3------");
// validationScript("asd123");
// console.log("------4------");
// validationScript("aaaA@@@@");
// console.log("------5------");
// validationScript("aaa123@");
// console.log("------6------");
// validationScript("    ");
// console.log("------7------");
// validationScript("iiiiiiiiiiii11111111111111@@@@@@@@@@@   11111111111111qqqqqqqqqqqqQQQQQQQQQQQQQQ4444444444444443333333333");