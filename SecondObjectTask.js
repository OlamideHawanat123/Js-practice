const student = {

    name: "John Doe",
    Age: 22,
    courses : ["Math", "Physics", "Computer Science"],
    address:{
        city: "New York",
        zip: 10001,

    }

}

student.age = 23
const{age} = student;
student.GPA = 3.8;
const{GPA} = student;

const getDetails = function(){

    return `${student.name} is ${student.age} years old and has a GPA of ${student.GPA}`;
}

console.log(getDetails());





