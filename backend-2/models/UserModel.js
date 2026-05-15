//import Schema class
import {Schema,model,Types} from "mongoose"

//create cart schema {product,count}
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:'product' //name of the product model    
    },
    count:{
        type:Number,
        default:1
    }
})

//Create User Schema(username,password,email,age)
const userSchema=new Schema({
    //structure of Schema
    username:{
        type:String,
        required:[true,"Username cannot be empty"],
        minLength:[4,"Min length of Username is 4 characters"],
        maxLength:[10,"Max length of Username is 10 characters"]
    },
    password:{
        type:String,
        required:[true,"Password Required"]
    },
    email:{
        type:String,
        required:[true,"Email required"],
        unique:[true,'email already exists']//make email unique and finding user using email make simple and faster
    },
    age:{
        type:Number
    },
    cart:[cartSchema]//it wont accept other than cartSchema properties
},{
        versionKey:false,//to disable __v
        timestamps:true
    }
)

//Generate UserModel 
export const userModel=model('user',userSchema)//it will create a collection with name users