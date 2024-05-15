const User = require('../Models/User.model');



// Create
exports.getUser = (req, res) => {
   const user = User.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Something went wrong' });
        });
};

// Post
exports.createUser = async (req, res) => { 
    // const user = new User (req.body) 
    // user.save()
    // .then(() => {
    //     res.status(201).send(user);
    // })
    // .catch(err => {
    //     res.status(500).send(err);
    // });
    try{
    const { firstname, email, password , lastname} = req.body;        
        bcrypt
        .hash(password, 10)
        .then((hash) => {
          User.create({ firstname, email, lastname, password: hash })
            .then((user) => res.json(user))
            .catch((err) => res.json(err));
        })
    } catch (error) {
        res.status(400).send(error);
    };
}

exports.getUserid = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
};


// Update
exports.updateUserid = async (req, res) => {
    try {
      const {id} = req.params
      await User.findByIdAndUpdate(id, req.body);
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).send(error);
    }
};


// Delete
exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findOneAndDelete({ _id: id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};


