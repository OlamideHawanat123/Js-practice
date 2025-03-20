let theFirstNumber = 5;
let theSecondNumber = 72;

function calculate(firstValue, secondValue, callBackFunction){

}

function addTwoNumbers(numberOne, numberTwo){
    let result = numberOne + numberTwo;
    return result;
};

function subtractTwoNumbers(numberOne, numberTwo){
    let result = numberOne - numberTwo;
    return result;
};

console.log(calculate(theFirstNumber, theSecondNumber, addTwoNumbers));
console.log(calculate(theFirstNumber, theSecondNumber, subtractTwoNumbers));

module.exports = {calculate, addTwoNumbers, subtractTwoNumbers}