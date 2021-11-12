const express = require("express");
 const mongoclient = require("mongodb").MongoClient 

 var cors = require("cors")



const app = express();

app.use(cors())
const url = "mongodb://127.0.0.1:27017"

 const port = 7000

 app.get("/time",(req,res)=>{
    mongoclient.connect(url,(err,clientobj)=>{
        if(!err){
          var dbo = clientobj.db("Time")
          dbo.collection("Stories").find({}).toArray((err,documents)=>{
              if(!err){
                  res.send(documents)
              }else{
                  console.log(err)
              }
          })
        }else{
            console.log(err)
        }
    })
 });

 app.listen(port,()=>{
     console.log("connection sucessfull")
 })