const router = require('express').Router();


const { userSignUp } = require('../controllers/authController');


router.post('/register', userSignUp);


module.exports = router;