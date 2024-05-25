const express = require('express');
const router = express.Router();
const { createProfile, getProfiles, viewProfiles, updateService,getServices} = require('../Controllers/BeauticianprofileController');
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
router.post('/update', updateService);
router.get('/services', getServices);


module.exports = router;

