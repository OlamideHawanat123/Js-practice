const student = {

    name: "John Doe",
    Age: 22,
    courses : ["Math", "Physics", "Computer Science"],
    address:{
        city: "New York",
        zip: 10001,

    }

}

//To print the students name://
const{name} = student;
const{address} = student;
const{zip} = address;

let {courses} = student
let secondCourse = ""
for(let count = 0; count < courses.length; count++){
secondCourse = courses[1];
}
console.log("The student name is: ", name); 
console.log("The second course is: ", secondCourse);
console.log("The zip code from the address is:" , zip);

