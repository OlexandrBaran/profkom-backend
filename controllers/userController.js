const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')
const ApiError = require('../error/ApiError');
const {validationResult} = require('express-validator')
const uuid = require('uuid')
const mailService = require('../service/mailService')

const generateJwt = (id, firstName, lastName, email, role, department) => {
    return jwt.sign(
        {id, firstName, lastName, email, role, department}, 
        process.env.SECRET_KEY,
        {expiresIn:'24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest('Regestration error'))
        }
        const {firstName, lastName, email, password, role, department} = req.body;

        if (!email || !password) {
            return next(ApiError.badRequest('Invalid email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User with this email already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const actvationLink = uuid.v4();
        const user = await User.create({firstName, lastName, email, password: hashPassword, role, department, actvationLink}) 
        await mailService.sendActivationMail(email, actvationLink)
        const token = generateJwt(user.id, user.firstName, user.lastName, user.email, user.role, user.department)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Incorrect password'))
        }
        const token = generateJwt(user.id, user.firstName, user.lastName, user.email, user.role, user.department)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.firstName, req.user.lastName, req.user.email, req.user.role, req.user.department)
        return res.json({token})
    }

    async activate(req, res, next) {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = new UserController()