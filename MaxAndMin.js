function returnArrayOfMaximumAndMinimumNumbersInAnArray(number){
	let newArray = {}
	let maximum = number[0]
	let minimum = number[0]

	for(let count = 0; count < number.length; count++){
	if(number[count] > maximum){
	maximum = number[count]
	}

	if(number[count] < minimum){
	minimum = number[count]
	}
	}

	newArray[0] = maximum
	newArray[1] = minimum

	return newArray
	}




let numbers = [1, 2, 3,-1000, 56];

console.log(returnArrayOfMaximumAndMinimumNumbersInAnArray(numbers))









