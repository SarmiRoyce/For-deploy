const express = require('express');
const router = express.Router();
const beauticianprofileController = require('../Controllers/BeauticianprofileController');
// router.get('/', beauticianprofileController.getBeauticianprofile);
router.post('/', beauticianprofileController.createBeauticianprofile);
// router.put('/update/:id', beauticianprofileController.updateBeauticianprofile);
// router.delete('/delete/:id', beauticianprofileController.deleteBeauticianprofile);

module.exports = router;