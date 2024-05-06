const express = require('express');
const router = express.Router();
const booking = require('../Controllers/BookingController');
// router.get('/', bookingController.getBooking);
router.post('/', bookingController.createBooking);
// router.put('/update/:id', bookingController.updateBooking);
// router.delete('/delete/:id', bookingController.deleteBooking);

module.exports = router;