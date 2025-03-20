const {calculateArea, convertToFarenheit, isEven, isLeapYear, countVowels} = require("./Tasks.js");

test("to convert celsius to farenheit", ()=>{
let temperature = 50
const result = convertToFarenheit(temperature)
expect(result).toBe(122)
});

test("to calculate area of rectangle", ()=>{
let width = 5;
let height = 10;
const result = calculateArea(width,height)
expect(result).toBe(50)
});



test("to determine if a number is even", ()=>{
let number = 12;
const result = isEven(number);
expect(result).toBe(true);
});

test("To determine a leap year", ()=>{
let year = 2000;
expect(isLeapYear(year)).toBe(true);
})

test("to count vowels", ()=>{
let letter = "olamide"
expect(countVowels(letter)).toBe(4);
})