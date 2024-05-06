const Beauticianprofile = require('../Models/Beauticianprofile.model');


exports.createBeauticianprofile = async (req, res) => {
    const beauticianprofile = new Beauticianprofile(req.body);   
    beauticianprofile.save()
    .then(() => {
        res.status(201).send(beauticianprofile);
    })
    .catch(err => {
        res.status(500).send(err);
    });
};