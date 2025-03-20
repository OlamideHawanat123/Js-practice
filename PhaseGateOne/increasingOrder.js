const prompt = require ("prompt-sync")()

let firstNumber = prompt("Enter first number: ")
let secondNumber = prompt("Enter second number: ")
let thirdNumber = prompt("Enter third number: ")

let maximum = firstNumber
if(secondNumber > maximum && secondNumber > thirdNumber)
	maximum = secondNumber
else if(thirdNumber > maximum && thirdNumber > secondNumber)
	maximum = thirdNumber


let minimum = firstNumber
if(secondNumber < minimum && secondNumber < thirdNumber)
	minimum = secondNumber
else if(thirdNumber < minimum && thirdNumber < secondNumber)
	minimum = thirdNumber


console.log(maximum)
console.log(minimum)



