// Function to check the number type
function checkNumberType(num) {

    if (num > 0) {
        return "Positive Number";
    }
    else if (num < 0) {
        return "Negative Number";
    }
    else {
        return "Neutral Number (Zero)";
    }
}

let number1 = 10;
let number2 = -5;
let number3 = 0;


console.log(number1 + " is a " + checkNumberType(number1));
console.log(number2 + " is a " + checkNumberType(number2));
console.log(number3 + " is a " + checkNumberType(number3));