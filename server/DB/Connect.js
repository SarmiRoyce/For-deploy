const Mongoose = require('mongoose');
require ('dotenv').config();
const mongodburl = process.env.mongodburl



function connectDb(){
   Mongoose.connect(mongodburl).then(()=>{
      console.log("Connected")
   })
   .catch((err)=>{
      console.log(err)
   })
}

module.exports =connectDb
   


 






