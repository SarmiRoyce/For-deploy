const Booking = require('../Models/Booking.model');


exports.createBooking = async (req, res) => {
    const booking = new Booking(req.body);   
    booking.save()
    .then(() => {
        res.status(201).send(booking);
    })
    .catch(err => {
        res.status(500).send(err);
    });
};