const User = require('../Models/Beauticianprofile.model');



// Create
exports.getBeautician = (req, res) => {
   const beautician = User.find()
        .then(users => {
            res.status(200).json(beautician);
        })
        .catch(err => {
            res.status(500).json({ message: 'Something went wrong' });
        });
};

// Post
exports.createBeautician = async (req, res) => { 
    const beautician = new User (req.body) 
    beautician.save()
    .then(() => {
        res.status(201).send(beautician);
    })
    .catch(err => {
        res.status(500).send(err);
    });
};


exports.getBeauticianid = async (req, res) => {
    try {
        const beautician = await User.findById(req.params.id);
        res.status(200).json(beautician);
    }
    catch (error) {
        res.status(400).send(error);
    }
};


// Update
exports.updateBeauticianid = async (req, res) => {
    const id = req.params.id;
    try {
        const beautician = await User.findByIdAndUpdate({ _id: id });
        if (!beautician) {
            return res.status(404).json({ message: 'Beautician not found' });
        }
        res.status(200).json({ message: 'Beautician updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};


// Delete
exports.deleteBeautician = async (req, res) => {
    const id = req.params.id;
    try {
        const beautician = await Beautician.findOneAndDelete({ _id: id });
        if (!beautician) {
            return res.status(404).json({ message: 'Beautician  not found' });
        }
        res.status(200).json({ message: 'Beautician  deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

