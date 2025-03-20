names = ['chantall', 'Maria', 'Went', 'sall', 'Eric']
for(let count = 0; count < names.length; count++){
    if(names[count].startsWith("M")){
        delete names[count];
    continue;
    }
    names[count] = 'hello ' + names[count];
    }
    console.log(names);
