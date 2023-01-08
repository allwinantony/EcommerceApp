// connecting server and mongodb database
//all models/schemas are created in here

//import mongoose
const mongoose = require('mongoose');
//define connection string
mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log("connected to mongoDb");
})
// create model to store all products
const Product = mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

//create a model addwishlist
const Wishlist = mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String
})


module.exports = {
    Product,
    Wishlist
}