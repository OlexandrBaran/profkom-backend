const jwt = require('jsonwebtoken');
const checkRoleMiddleware = require('./checkRoleMiddleware');

module.exports = function(...roleArray) {
    return function (req, res, next) {
        try {
            roleArray.map( item => {
                return checkRoleMiddleware(item)
            })
            next()
        } catch (e) {
            res.status(401).json({message: "Not authorized"})
        }
    };
}