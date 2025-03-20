const {calculate, addTwoNumbers, subtractTwoNumbers} = require("./Function.js");

test("add two numbers", ()=>{
let firstNumber = 5;
let secondNumber = 72;
const result = addTwoNumbers(firstNumber, secondNumber);//Act
expect(result).toBe(77); //Assert
})