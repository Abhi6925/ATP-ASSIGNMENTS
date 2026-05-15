function validateTitle(title){
    if(!title){
        return "invalid Title"
    }
    if(title.length<=3){
        return "minimum 3 characters required"
    }
    return true
}

function validatePriority(priority){
    if(priority=="low" || priority=="medium" || priority=="high"){
        return true
    }
    else{
        return "Invalid Priority"
    }
}

function validateDueDate(date){
    return true
}

export {validateDueDate,validatePriority,validateTitle}