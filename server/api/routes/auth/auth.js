const express = require('express')
const path = require('path')
const router = express.Router();
const authController = require('../../controllers/auth')
const authValidator = require('../../middlewares/auth')




router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
});

router.get('/login', authController.login);

router.post('/login', authValidator.loginV1, authController.loginV1);

router.post('/logout', authController.logout);


module.exports = router;