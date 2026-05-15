import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductApi.js'
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'

config()//process.env.PORT,//process.env.DB_URL

const app=exp()
const port=process.env.PORT || 3000
//add body parser
app.use(exp.json())//convert the give json data into JS object

//add cookie parser
app.use(cookieParser())

//forward to UserAPi if the path starts with /user-api
app.use('/user-api',userApp)

//forward to ProductApi if the path starts with /product-api
app.use('/product-api',productApp)

//connect to DB server
async function connectDB(){
    try{
                                //we can also use 127.0.0.1
        await connect(process.env.DB_URL)//if the given DB is not exist then it will create a new database and connect 
        console.log('DB connection is success')

        //start server
        app.listen(port,()=>console.log(`server listening port ${port}...`))
    }catch(err){
        console.log("error in DB connection:",err)
    }
}

connectDB()

//error handling middleware
//this middleware executes only when error occurs
app.use((err,req,res,next)=>{
    console.log(err)
    //ValidationError
    if(err.name=="ValidationError"){
        return res.status(400).json({message:"Error occured",error:err})
    }

    //CastError
    if(err.name=="CastError"){
        return res.status(400).json({message:"Error occured",error:err})
    }

    //server side error
    res.status(500).json({message:"error occured",error:err.message})
})