const express = require('express');
const router = express.Router();
const beauticianController = require('../Controllers/BeauticianController');
// router.get('/', beauticianController.getBeautician);
router.post('/', beauticianController.createBeautician);
// router.put('/update/:id', beauticianController.updateBeautician);
// router.delete('/delete/:id', beauticianController.deleteBeautician);

module.exports = router;
