import {addTask,getAllTasks,completeTask} from "./task.js"

//add a task
console.log(addTask("breakfast","medium",'2026-2-26'))
addTask("sleep","low",'2026-2-26')

getAllTasks()