function fourtTask(number){
let x = number + 10;
let y = number - 10;
let z = number % 10;

let theProduct = x * y * z;

let result = number / theProduct;
return result;
}

let a = 25;
console.log(fourtTask(a));

