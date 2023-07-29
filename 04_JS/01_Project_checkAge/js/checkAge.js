console.log("----****---")

const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {
    // if (!isNaN(age)) {
    if (+age) {
        // age = +age;
        if (age < age_2){
            return alert("You don't have access cause your age is " + age + " It's less than " + age_2);
            return console.log("You don't have access cause your age is " + age + " It's less than " + age_2);
        }
        
        if (age >= age_2 && age < age_3) {
            return alert("Welcome!");
            // return console.log("Welcome!");
        }
        
        if (age > age_3) {
            return alert("Keep calm and look Culture channel!");
            // return console.log("Keep calm and look Culture channel!");
        }
        
        return alert("Technical work");
        // return console.log("Technical work");
    }
    return alert("Not a number");
    // return console.log("Not a number");
};


let n = "y";
while (n == "y") {
    checkAge(prompt("Enter your age: "));
    n = prompt(`Press 'y' to reenter your age, or any other key to stop script`);
}