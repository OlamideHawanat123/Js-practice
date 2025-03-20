const prompt = require("prompt-sync")()

function additionOfTwoNumbersInAnArrayThatEqualsTarget(number, target){
	let newArray = []
	for(let count = 0; count < number.length; count++){
	for(let counter = 0; counter < number.length; counter++){

	if(number[count] + number[counter] == target){
	newArray[0] = counter
	newArray[1] = count
		}
	}
}
return newArray
}

function removeDuplicateFromSortedArray(number){
	let newArray = []
	for(let count = 0; count < number.length; count++){
	for(let counter = 0; counter < number.length; counter++){
	
	if(number[counter] == number[count]){
	newArray = number[counter][count]
	}
	}
	}
	return newArray
	}


















let number = [2, 7, 11, 15]
let target = 9

let result = additionOfTwoNumbersInAnArrayThatEqualsTarget(number, target)
console.log(result)


let anotherNumber = [0, 0, 1, 1, 1, 2, 2, 3, 4]
let anotherResult = removeDuplicateFromSortedArray(number)
console.log(anotherResult)
