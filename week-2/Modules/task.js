import { validateDueDate,validatePriority,validateTitle } from "./validator.js"

let tasks=[]

function addTask(title,priority,dueDate){
    if(!validateTitle(title) && !validatePriority(priority) && !validateDueDate(dueDate)){
        return "Invalid Task"
    }

    tasks.push({
        title:title,
        priority:priority,
        dueDate:dueDate
    })
    console.log("added")
}

// 2. Get all tasks
function getAllTasks() {
    console.log(tasks)
}
// 3. Mark task as complete
function completeTask(taskId) {
    tasks.splice(taskId,1)
}

export {addTask,getAllTasks,completeTask}