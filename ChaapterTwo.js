const prompt = require("prompt-sync")();
// let integer = (prompt("Enter an integer:"))

let a;
let b = 6
let c = 5
a = b * c
console.log("The value of 'a' is: " + a)


/* This program performs a single payroll calculation*/

let number = parseInt(prompt("Enter an integer:"))
let number_two = parseInt(prompt("Enter another number:"))

let square_number, square_number_two;
square_number = number * number

square_number_two = number_two * number_two
let sum = square_number + square_number_two
let difference = square_number - square_number_two

console.log("The square of first number is: " + square_number)
console.log("The square of second number is: " + square_number_two)

console.log("The sum of the two squares is: " + sum)
console.log("The difference between the two squares is: " + difference)

let integer_one = parseInt(prompt("Enter an integer:"))
let square_integer_one = integer_one * integer_one
let sum_integer_one_and_squared_integer_one = integer_one + square_integer_one

if (sum_integer_one_and_squared_integer_one > 100){
    console.log("User input and it's square are greater than 100")
} 

else if(sum_integer_one_and_squared_integer_one == 100){
    console.log("user input is equal to 100")
}

else if(sum_integer_one_and_squared_integer_one != 100){
    console.log("user input is not equal to 100")
}

else if(sum_integer_one_and_squared_integer_one < 100){
    console.log("user input is lesser than 100")
}

let first_integer = parseFloat(prompt("Enter a number:"))
let second_integer = parseFloat(prompt("Enter second number:"))
let third_integer = parseFloat(prompt("Enter third number:"))

let sum_of_all = first_integer + second_integer + third_integer
let average = sum_of_all / 3

let product = first_integer * second_integer * third_integer
let smallest = first_integer
let largest = second_integer
if(second_integer < smallest){
    smallest = second_integer
}
else if(third_integer < smallest){
    smallest = third_integer
}

if (first_integer > largest){
    largest = first_integer
}
else if(third_integer > largest){
    largest = third_integer
}
console.log("The sum of the inputs is: " + sum_of_all)
console.log("The average of the inputs is: " + average)

console.log("The product of the input is: " + product)
console.log("The smallest of the input is: " + smallest)
console.log("The largest of the input is: " + largest)


let det_integer = (prompt("Enter a number:"))
if(det_integer % 3 == 0){
    console.log("The input is divisible by 3")
}
else{
    console.log("The input is not divisible by three")
}

let pi = 3.14159
let radius = (prompt("Enter a circle's radius:"))

console.log("The diameter of the circle is: " + radius * 2)
console.log("The circumference of the circle is: " + 2 * pi * radius)
console.log("The area of the circle is: " + pi * radius * radius)






let world_population = 8000000000
let annual_growth_rate = 0.0091
console.log("The world population is: " + world_population)
console.log("The annual growth rate is: " + annual_growth_rate)

console.log("The estimated world population after one year is: " + world_population * annual_growth_rate)
console.log("The estimated world population after two year is: " + world_population * annual_growth_rate * 2)
console.log("The estimat5ed world population after three year is: " + world_population * annual_growth_rate * 3)

console.log("The estimated world population after four year is: " + world_population * annual_growth_rate * 4)
console.log("The estimated world population after five year is: " + world_population * annual_growth_rate * 5)
