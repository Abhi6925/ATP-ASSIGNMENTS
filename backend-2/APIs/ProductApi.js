//create a mini-express application

import exp from 'express'
export const productApp=exp.Router()
import { productModel } from '../models/ProductModel.js'
import { verifyToken } from '../middlewares/verifyToken.js'

//define product REST API routes
    //create product
    productApp.post('/products',verifyToken,async(req,res)=>{
        //get new product from req body
        const newProduct=req.body
        //create new product 
        const NewProductDocument=new productModel(newProduct)
        //save product
        let result=await NewProductDocument.save()
        //send response
        res.status(201).json({messgae:'Product created'})
    })

    //Read all Products
    productApp.get('/products',verifyToken,async(req,res)=>{
        //read all products from DB
        let productsList=await productModel.find()
        // send respponse
        res.status(200).json({message:'Products',payload:productsList})
    })

    //read a product by product id
    productApp.get('/products/:id',verifyToken,async(req,res)=>{
        //get productId from url paramaters
        const pid = Number(req.params.id)
        //find product by productID
        const productObj=await productModel.findOne({productId:pid})
        //if product not found 
        if(!productObj){
            return res.status(404).json({message:'product not found'})
        }
        //send response
        res.status(200).json({message:'product',payload:productObj})
    })

    //update a product by product id
    productApp.put('/products/:productId',async(req,res)=>{
        //get modified product fromm req body
        const modifiedProduct=req.body
        //get product id from params
        const pid=req.params.productId
        //update product by modified product
        const updatedProduct=await productModel.findOneAndUpdate({productId:pid},{...modifiedProduct},{new:true,runValidators:true})
        //if product not found
        if(!updatedProduct){
            return res.status(404).json({message:'product not found'})
        }
        //send response
        res.status(200).json({message:'product updated',payload:updatedProduct})
    })

    //delete prduct by productId
    productApp.delete('/products/:productid',async(req,res)=>{
        //get product id from params
        let pid = Number(req.params.productid)
        //find product by id and delete
        let deletedProduct=await productModel.findOneAndDelete({productId:pid})
        //if product not found
        if(!deletedProduct){
            return res.status(404).json({message:'unable to find product'})
        }
        // send res
        res.status(200).json({message:'product deleted',payload:deletedProduct})
    })