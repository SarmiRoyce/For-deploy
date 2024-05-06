const express = require('express');
const router = express.Router();
// const cors = require ('cors');
const userController = require('../Controllers/UserController');
// router.get('/', userController.getUser);
router.post('/', userController.createUser);
// router.put('/update/:id', userController.updateUser);
// router.delete('/delete/:id', userController.deleteUser);

module.exports = router;