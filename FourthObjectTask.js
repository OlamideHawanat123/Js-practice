const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12

};

function getFruitNameAndQuantity(){
for(let key in inventory){
    process.stdout.write(key + ':' + ' ')   
     console.log(inventory[key])
}
}

function totalNumberOfFruits(){
    let total = 0;
    for(let values in inventory)
        total += inventory[values];
        
    console.log("Total is:", total);
}

getFruitNameAndQuantity()
totalNumberOfFruits()



 