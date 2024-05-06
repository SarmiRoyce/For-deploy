const Mongoose = require('mongoose');
require('dotenv').config();
const mongodburl = process.env.mongodburl
const userRoutes = require('../Routes/UserRoutes')
const beauticianRoutes = require('../Routes/BeauticianRoutes')
const express = require('express')
const app = express()
app.use(express())
app.use('/user', userRoutes)
app.use('/beautician', beauticianRoutes)

const PORT = 3001



function connectDb() {
   Mongoose.connect(mongodburl).then(() => {
      console.log("Connected")
   })
      .catch((err) => {
         console.log("Connection failed", err)
      })




   app.listen(PORT, () => {
      console.log(`Server is running on the port ${PORT}`)
   })


}

module.exports = connectDb










