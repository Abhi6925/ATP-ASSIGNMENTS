//create mini-express application(separate route)
//it doesnot contain any http server
import exp from 'express'
import {hash,compare} from 'bcryptjs'
import {userModel} from '../models/UserModel.js'
import jwt from 'jsonwebtoken'
const {sign}=jwt
import { verifyToken } from '../middlewares/verifyToken.js'
import {config} from 'dotenv'

config()

export const userApp = exp.Router()

//define user REST API routes
    //User Login
    userApp.post('/auth',async(req,res)=>{
        //get user cred from req body
        const {email,password}=req.body
        //verify email
        const user=await userModel.findOne({email:email})
        //if email doesnot exists
        if(!user){
            return res.status(400).json({message:'invalid email'})
        }
        //valid password
        let result=await compare(password,user.password)
        //if password doesnot match
        if(result==false){
            return res.status(400).json({message:"invalid password"})
        }
        //if passwords matched
            //create token(jsonwebtoken-jwt)
            const signedToken=sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"1h"})//if time is give in "",then it is ms
            //store token as http only cookie 
            res.cookie("token",signedToken,{
                httpOnly:true,  //will store cookie in httpOnly
                sameSite:"lax",
                secure:false 
            })
            //send res
            res.status(200).json({message:'login Success'})
    })


    //Create New User
    userApp.post('/users',async(req,res)=>{
        //get new user obj from req
        const newUser=req.body
        //hash the password
        const hashedPassword=await hash(newUser.password,10)
        //replace original password with hashed password
        newUser.password=hashedPassword
        //create new user document
        const NewUserDocument=new userModel(newUser)
        //save
        let result=await NewUserDocument.save()
        //send response
        res.status(201).json({message:'User Created'})//it is mandatory to send status code
    })

    //Read all users(protected)
    userApp.get('/users',verifyToken,async(req,res)=>{
        //read all users from DB
        let usersList=await userModel.find()
        //send res
        res.status(200).json({message:"users",payload:usersList})
    })

    //read user by userID
    userApp.get('/user',verifyToken,async(req,res)=>{
        //read user email from req
        let emailOfUser=req.user?.email//advantage of this is,the loggged in user can only get his details only
        //find user by user ID
        let userObj = await userModel.findOne({email:emailOfUser}).populate("cart.product")
        //if user not found
        if(!userObj){
            return res.status(404).json({message:'user not found'})
        }
        //send res
        res.status(200).json({message:'user',payload:userObj})
    })

    //update user by ID
    //during updation it wont check any validation unless we write runValidators
    userApp.put('/users/:id',verifyToken,async(req,res)=>{
        //get modified user from req body
        const modifiedUser=req.body
        const uid=req.params.id
        //finduser id and update
        const updatedUser=await userModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})
        //send res
        res.status(200).json({message:"user modified",payload:updatedUser})
        
    })

    //delete user by ID
    userApp.delete('/users/:id',verifyToken,async(req,res)=>{
        //get user id by req params
        const uid=req.params.id
        //find user id and delete
        const deletedUser=await userModel.findByIdAndDelete(uid)
        //if user not found
        if(!deletedUser){
            return res.status(404).json({message:'user not found'}  )
        }
        //send response
        res.status(200).json({message:"user deleted",payload:deletedUser})
    })

//add product to cart
// userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
//     //get product id from url params
//     let productId=req.params.pid
//     //get current user details
//     const emailOfUser=req.user?.email
//     //find user by email and add product to cart
//     let result=await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
//     //if user invalid
//     if(!result){
//         res.status(404).json({message:'user not found'})
//     }
//     //send res
//     res.status(200).json({message:'product added successfully'})
// })

userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //get product id from url params
    let productId=req.params.pid
    //get current user details
    const emailOfUser=req.user?.email
    //add product to cart
    //before add,first it should check that product is already in the cart
    const user=await userModel.findOne({email:emailOfUser})
    const index=await user.cart.findIndex(obj=>obj.product.toString()===productId)
    console.log(index)
    //if the product is there , then increment count by one
    // if(index){
    //     user.cart[index].count+=1
    // }
    //otherwise add product to cart
    //find user by email and add product to cart
    const result=await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
    //if user invalid
    if(!result){
        res.status(404).json({message:'user not found'})
    }
    //send res
    res.status(200).json({message:'product added successfully'})
})