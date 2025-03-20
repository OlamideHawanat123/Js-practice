function calculateArea(height, width){
return height * width;
}

function convertToFarenheit(temperature){
let temperatureToFarenheit = temperature * 9/5 + 32;
return temperatureToFarenheit;
}

function isEven(number){
return number % 2 === 0;

}


function isLeapYear(year){
return year % 4 === 0;

}

function countVowels(letter){
let vowel = "aeiouAEIOU"
let total = 0;

for(let value of letter){
if(vowel.includes(value)){
total ++;
}
}
return total;

}


module.exports = {calculateArea, convertToFarenheit, isEven, isLeapYear, countVowels}

