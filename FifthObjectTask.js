const company = {
    name: "TechCorp",
    location:"San Francisco",
    employees:[
        {id:2003,
        employeeName: "EricAlliBalogun",
        department:"Engineering"
        },

        {id: 286777,
        employeeName: "Suliyah",
        department: "HR"
        },

        {id: 1234,
        employeeName: "Majek",
        department: "Sales"
        },

        {id:12356,
        employeeName:"Bode",
        department:"Operations"
        }

    ]

}

let{employees} = company;
    theEmployees = employees[1];
    const{employeeName} = theEmployees;

    const{name} = company;
    const{location} = company;

    
    console.log("The name of the second employee is: ", employeeName);
    console.log("The name of the company is : ", name);
    console.log("The location of the company: ", location);

    for(let employees in company){
        console.log(`${company[employees].employeeName`});
        }
  

