const prompt = require("prompt-sync")()

let number = prompt("Enter a three-digits number: ")
while(number < 100 || number > 999)
number = prompt("Enter a valid three-digits number: ")

let thirdDigit = number % 10
let twoNumbers = number / 10

let secondDigit = twoNumbers % 10
let firstDigit = twoNumbers / 10

let sum = parseInt(thirdDigit + secondDigit + firstDigit)
console.log("The sum of all the digits in user's input: " + sum)