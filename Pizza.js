const prompt = require("Prompt-sync")()
const pizzaTypes = [
{type: "Sapa size", slices: 4, price: 2500},
{type: "Small money", slices: 6, price: 2900},
{type: "Big boys", slices: 8, price: 4000},
{type: "Odogwu", slices: 12, price: 5200}
]

console.log(pizzaTypes)
let choice = parseInt(prompt("Enter your preferred pizza types from the above:"))

for (let count = 0; count < pizzaTypes; count++)
    if(choice == 1){
         guest = parseInt(prompt("How many guests do you want to feed:"))

    }

  
