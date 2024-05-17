const express = require('express');
const router = express.Router();
const beauticianProfileController = require('../Controllers/BeauticianprofileController');
router.get('/view', beauticianProfileController.getBeautician);
router.post('/create', beauticianProfileController.createBeautician);
router.get('/view/:id', beauticianProfileController.getBeauticianid);
router.put('/update/:id', beauticianProfileController.updateBeauticianid);
router.delete('/delete/:id', beauticianProfileController.deleteBeautician);

module.exports = router;

