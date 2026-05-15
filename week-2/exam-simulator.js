// Immediately show: “Exam submitted successfully”
console.log("Exam submitted successfully")
// After 2 seconds → show: “Evaluating answers…”
setTimeout(()=>{
    console.log("Evaluationg answers")
},2000)
// After 4 seconds → show: “Result: Pass”
setTimeout(()=>{
    console.log("Pass")
},4000)


