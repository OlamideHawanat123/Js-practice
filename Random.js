const prompt = require("prompt-sync")()

	let number;
	do{
	number = prompt("Enter a  three-digit number between 0 and 1000: ")
	}while(!(number >= 0 && number < 1000))

	let lastDigit = number % 10
	let dividedNumber = number / 10

	let secondDigit = dividedNumber % 10
	let firstDigit = dividedNumber % 10

	let sumOfDigits = lastDigit + secondDigit + firstDigit
	console.log(sumOfDigits)


	let arr = [];
	for(let count = 0; count < 100; count +1){
	arr.push(count);
	}
	


	

