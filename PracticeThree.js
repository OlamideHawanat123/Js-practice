const prompt = require("prompt-sync")();

for(let number = 1; number < 11; number++){
    console.log(number)
   }

   for(let even = 0; even <= 10; even+=2){
    console.log("The even numbers are: " + even)
   } 

   for(let odd = 1; odd < 11; odd++){
    if(odd % 2 != 0){
        console.log("The odd numbers are:" )
        console.log(odd)
    }
   }

   for(let multiples = 1; multiples < 11; multiples++){
    if(multiples % 4 == 0){
        console.log("The multiples of four are: " + multiples, multiples, multiples, multiples, multiples)
    }
   }

