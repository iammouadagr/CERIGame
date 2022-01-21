const express = require('express')
const router = express.Router();
const usersController = require('../../controllers/users');
const usersValidator = require('../../middlewares/users');

router.get('/profile/:username', usersValidator.getUserByUsername, usersController.getUserByUsername);
router.post('/profile/update', usersValidator.update, usersController.update);
router.post('/profile/checkPassword', usersValidator.checkUserPassword, usersController.checkUserPassword)


module.exports = router;