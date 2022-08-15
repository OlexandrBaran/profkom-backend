const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware')
const { check } = require('express-validator');

router.post('/registration', [
    check('firstName', "First name can`t be empry").notEmpty(),
    check('lastName', "Last name can`t be empry").notEmpty(),
    check('password', "Password must be more than 6 characters and less than 12").isLength({min:6, max:12}),
    check('email', "Your input is not an email").isEmail()
], userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);
router.get('/activate/:link', userController.activate)


module.exports = router; 