//import Schema and model from mongoose
import {Schema,model} from 'mongoose'

//create product Schema (productId,ProductName,price,brand)
const ProductSchema=new Schema({
    //structure of schema
    productId:{
        type:Number,
        required:[true,"productId required"],
        unique:[true,'product ID exists']
    },
    productName:{
        type:String,
        required:[true,"Product Name required"]
    },
    price:{
        type:Number,
        required:[true,"Price is Required"],
        min:[10000,"minimum price of product must be 10000"],
        max:[50000,"maximum price of product must be 50000"]
    },
    brand:{
        type:String,
        required:[true,"brand required"]
    }
},
{
        versionKey:false,
        timestamps:true
})

//Generate productModel
export const productModel=model('product',ProductSchema)