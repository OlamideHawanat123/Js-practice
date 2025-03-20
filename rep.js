const prompt = require ("prompt-sync")()

	let y = parseInt(prompt("What is your number: "))
	let z = parseInt(prompt ("What is your second number: "))

	let overall = addTwoNumbers(y,z)
	let subtraction = subtractTwoNumbers(y, z)

	let just = []
	just[0] = 1
	just[1] = 2

	console.log(just)

	console.log(overall)
	console.log(subtraction)

	function addTwoNumbers(para1, para2){
    	return para1 + para2
	}

	function subtractTwoNumbers(para1, para2){
	return para1 - para2
	}