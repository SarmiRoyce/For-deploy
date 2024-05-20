// const express = require('express');
// const router = express.Router();
// const beauticianProfileController = require('../Controllers/BeauticianprofileController');
// router.get('/view', beauticianProfileController.getBeautician);
// router.post('/create', beauticianProfileController.createBeautician);
// router.get('/view/:id', beauticianProfileController.getBeauticianid);
// router.put('/update/:id', beauticianProfileController.updateBeauticianid);
// router.delete('/delete/:id', beauticianProfileController.deleteBeautician);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { createProfile, getProfiles, viewProfiles } = require('../Controllers/BeauticianprofileController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post('/create', upload.array('works[imageFile]', 10), createProfile);
router.get('/view', getProfiles);
router.get('/show', viewProfiles);


module.exports = router;
