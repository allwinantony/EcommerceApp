//all api calling and creation is written in here
//server creation

//1 import express 
const express = require('express')
 //5 import cors
 const cors = require('cors');
//2 using express create an application
const app = express();
//3 set up port number
app.listen(3000,()=>{
    console.log("Express server listening in port-3000")
})
// 4 use json parser for server application
app.use(express.json());

 //6 using cors specify origin to the server
 app.use(cors({
    origin:'http://localhost:4200'
 }))

 const dataService = require('./services/dataService')

 


 //Api to get all products
 app.get('/all-products',(req,res)=>{
    dataService.getAllProducts().then(
        result=>{
        res.status(result.statusCode).json(result)
    })
 })

  //Api to add wishlist
  app.post('/addtowishlist',(req,res)=>{
    console.log(req.body);
    dataService.addtowishlist(req.body.id, req.body.title, req.body.price, req.body.description, req.body.image).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
  })

  //API for getting wishlist products
  app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist().then(
        (result)=>{
        res.status(result.statusCode).json(result)
    })
 })

   //API for deleting wishlist products
   app.delete('/deletewish/:id',(req,res) =>{
    dataService.deleteitem(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
   })
