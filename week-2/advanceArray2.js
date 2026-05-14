const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//  1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"


//  1. filter() students who passed (marks ≥ 40)
let passedStud=students.filter((object)=>object.marks>=40)
console.log(passedStud)



// 2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
const Grade=students.map((object)=>{
    if(object.marks>=90){
        object.grade="A"
    }
    else if(object.marks>=75){
        object.grade="B"
    }
    else if(object.marks>=60){
        object.grade="C"
    }
    else{
        object.grade="D"
    }
    return object
})
console.log(Grade)

//3. reduce() to calculate average marks
const averageMarks=students.reduce((acc,object)=>acc+object.marks,0)
console.log(averageMarks/students.length)

//    4. find() the student who scored 92
const details=students.find((object)=>object.marks==92)
console.log(details)

//    5. findIndex() of student "Kiran"

const details2=students.findIndex((object)=>object.name=="Kiran")
console.log(details2)