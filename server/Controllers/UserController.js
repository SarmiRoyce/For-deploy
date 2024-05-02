const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/User.model');
const getUser = (req, res) => {
    User.find({})
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Something went wrong' });
        });
};

const createUser = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });    
    user.save()
    .then(() => {
        res.status(201).json({ message: 'User created successfully' });
    })
    .catch(err => {
        res.status(500).json({ message: 'Something went wrong' });
    });
};

const updateUser = (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id, (err, user) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong' });
        } else if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    });
};

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
};



const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.get('/', userController.getUser);
router.post('/create', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;

const express = require('express');
const connectDB = require('./DB/connect');
const userRoutes = require('./Routes/userRoutes');
cors = require('cors');
const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());


const startServer = async () => {
    try{
        await connectDB();        
        app.listen(PORT, ()=>{
            console.log(`Server is running on the port ${PORT}`)
        })  

        app.use(express.json());
        app.use('/user', userRoutes)
    }
    catch(err){
        console.log(err)
    }
}
startServer();