const prompt = require("Prompt-sync")()

let number = parseFloat(prompt("enter a number: "))
const number_two = parseFloat(prompt("enter another number:"))

const number_three = parseFloat(prompt("enter another number:"))

let sum = number+number_two+number_three;
let multiply = number *number_two*number_three;

console.log(sum)
console.log(multiply)



