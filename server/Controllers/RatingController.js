const Rating = require('../Models/Rating.model');


exports.createRating = async (req, res) => {
    const rating = new Rating(req.body);   
    rating.save()
    .then(() => {
        res.status(201).send(rating);
    })
    .catch(err => {
        res.status(500).send(err);
    });
};