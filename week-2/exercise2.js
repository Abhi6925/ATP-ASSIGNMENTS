let user = {
    name: "Ravi",
    city: "Hyderabad"
};
//copy of object
let updateUser={...user,age:19}//adding "age" property

//checking both objects
console.log(user)
console.log(updateUser)