//const ApiError = require('../error/apiError').default;

module.exports = function(err, req, res, next) {
    if(err instanceof Error){
        return res.status(err.status).json({ message:err.message });
    }
    return res.status(500).json({ message:err.message});
}