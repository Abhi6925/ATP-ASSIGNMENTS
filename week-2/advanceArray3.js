const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"


//     1. filter() employees from IT department
const ITemp=employees.filter((object)=>object.department=="IT")
console.log(ITemp)

//     2. map() to add:
//             netSalary = salary + 10% bonus
const result=employees.map((object)=>{
    object.netSalary=object.salary+(object.salary*0.10)
    return object
})
console.log(result)

//     3. reduce() to calculate total salary payout
const salaryPayout=employees.reduce((acc,object)=>acc+object.salary,0)
console.log(salaryPayout)

//     4. find() employee with salary 30000
const details=employees.find((object)=>object.salary==30000)
console.log(details)

//     5. findIndex() of employee "Neha"
const details1=employees.findIndex((object)=>object.name=="Neha")
console.log(details1)