//what to happen if api called is written in here
//import db
const mongoose = require('mongoose')
const db = require('./db')

//get all products from the database
const getAllProducts = () =>{
    //to fetch all products from mongodb
    return db.Product.find().then(
        (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                Products:result
            }
        }
        else{
            return{
                status:false,
                statusCode:404,
                message:'Product not found'
            }
        }
    }
    )
}


//add wishlist
const addtowishlist = (id,title,price,description,image) => {
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:'product already in wishlist'
                }
            }
            else{
                const newProduct = new db.Wishlist({
                    id,
                    title,
                    price,
                    description,
                    image
                })
                newProduct.save()
                return{
                    statuscode:true,
                    statusCode:200,
                    message:'added to wishlist'
                }
            }
        }
    )
}

// get wishlist products
const getwishlist = () => {
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    statuscode:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Your wishlist is empty'
                }
            }
        }
    )
}


//delete wishlist
const deleteitem = (id) =>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statuscode:true,
                    statusCode:200,
                    message:"removed from wishlist"
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'nothing happened'
                }
            }
        }
    )
}



module.exports = {
    getAllProducts,
    addtowishlist,
    getwishlist,
    deleteitem
}