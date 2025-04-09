const person = {"name": "emma","gender" : "male"}
    person.age = 12;
    person.age = 102;
    delete person.age
    

    console.log(Object.keys(person));
    console.log(Object.values(person));

    console.log(Object.entries(person))
    console.log(person)

    // To access a specific value
    const{gender} = person;

    console.log(gender)

let array = [2, 3, 4, 5];
for(let count of array){
    console.log(count)
};


for(index in array){
    console.log(array[index])
}

let obj = {
    name: 'chi',
    age: 12
}
for(let key in obj){
   process.stdout.write(key + ':' + ' ')   
    console.log(obj[key])

};
// function declaration
/*let array = [2, 3, 4, 5, 6]
function getEvenNumbers(numbers){
    for(let number of numbers){
        if(number % 2 === 0){
            console.log(number)
        }
    }
}

// function expression
const getTheEvenNumbers = function (numbers){
    for(let number of numbers){
        if(number % 2 === 0){
            console.log(number)
        }
    }
}


getEvenNumbers(array)
getTheEvenNumbers(array)*/


   // NESTED FUNCTIONS//
   let numberOne = 2;
   function outerFunction(numberOne){
    let numberTwo = 6;
    function innerFunction(numberTwo){
        let result = numberOne + numberTwo
        return result

    }
    return innerFunction(numberTwo)
   }

  console.log(outerFunction(numberOne))

  // ARROW FUNCTION//

  let number = 2;
  let numberTwo = 3;
 
  const getSum = (firstNumber, secondNumber)=>{
    let result = firstNumber + secondNumber;
    return result;
  }

  console.log(getSum(number, numberTwo))

  //FUNCTIONS AS RETURNED OBJECTS //
  let firstNumber = 10;
  let secondNumber = 2;

  function createCalculator(numOne, numTwo){
    return {
        add: function(){
            return numOne + numTwo
        },

        subtract: function(){
           return numOne - numTwo
    },
        multiply: function (){
            return numOne * numTwo
        }

    }
  }
  let result = createCalculator(firstNumber, secondNumber);
console.log(result.add())
console.log(result.subtract())
console.log(result.multiply())
console.log(result.add())
console.log(result)

let theFirstNumber = 5;
let theSecondNumber = 72;

function calculate(firstValue, secondValue, callBackFunction){

}

function addTwoNumbers(numberOne, numberTwo){
    let result = numberOne + numberTwo;
    return result;
};

function subtractTwoNumbers(numberOne, numberTwo){
    let result = numberOne - numberTwo;
    return result;
};

console.log(calculate(firstNumber, secondNumber, addTwoNumbers));
console.log(calculate(firstNumber, secondNumber, subtractTwoNumbers));



