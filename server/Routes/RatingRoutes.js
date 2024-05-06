const express = require('express');
const router = express.Router();
const ratingController = require('../Controllers/RatingController');
// router.get('/', ratingController.getRating);
router.post('/', ratingController.createRating);
// router.put('/update/:id', ratingController.updateRating);
// router.delete('/delete/:id', ratingController.deleteRating);

module.exports = router;