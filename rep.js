const prompt = require ("prompt-sync")()

	let y = parseInt(prompt("What is your number: "))
	let z = parseInt(prompt ("What is your second number: "))

	let overall = addTwoNumbers(y,z)
	let subtraction = subtractTwoNumbers(y, z)

	let just = {1, 3}

	console.log(just)

	console.log(overall)
	console.log(subtraction)

	function addTwoNumbers(para1, para2){
    	return para1 + para2
	}

	function subtractTwoNumbers(para1, para2){
	return para1 - para2
	}