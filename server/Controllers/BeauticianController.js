const Beautician = require('../Models/Beautician.model');


exports.createBeautician = async (req, res) => {
    const beautician = new Beautician(req.body);   
    beautician.save()
    .then(() => {
        res.status(201).send(beautician);
    })
    .catch(err => {
        res.status(500).send(err);
    });
};
