// const express = require('express');
// const mongoose = require('mongoose');
const User = require('../Models/User.model');
// cors = require('cors');
// const app = express();
// const PORT = 3001;
// app.use(cors());
// app.use(express.json());



// exports.getUser = (req, res) => {
//     User.find({})
//         .then(users => {
//             res.status(200).json(users);
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Something went wrong' });
//         });
// };

exports.createUser = async (req, res) => {
    const user = new User(req.body);   
    // const user = new User (req.body) 
    user.save()
    .then(() => {
        res.status(201).send(user);
    })
    .catch(err => {
        res.status(500).send(err);
    });
};


// const updateUser = (req, res) => {
//     const id = req.params.id;
//     const { name, email, password } = req.body
// };

// const deleteUser = (req, res) => {
//     const id = req.params.id;
//     User.findByIdAndRemove(id, (err, user) => {
//         if (err) {
//             res.status(500).json({ message: 'Something went wrong' });
//         } else if (!user) {
//             res.status(404).json({ message: 'User not found' });
//         } else {
//             res.status(200).json(user);
//         }
//     });
// };

// const loginUser = (req, res) => {
//     const {userName} = req.params
//     console.log(userName)
//     res.status(200).json({message:"ok"});
// }

// module.exports = {getUser, createUser};

// const express = require('express');
// const connectDB = require('./DB/connect');
// const userRoutes = require('./Routes/userRoutes');


// const startServer = async () => {
//     try{
//         await connectDB();        
//         app.listen(PORT, ()=>{
//             console.log(`Server is running on the port ${PORT}`)
//         })  

//         app.use(express.json());
//         app.use('/user', userRoutes)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// startServer();