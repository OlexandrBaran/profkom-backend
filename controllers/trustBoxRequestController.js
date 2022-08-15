const {TrustBoxRequest} = require('../models/models')
const ApiError = require('../error/ApiError');

class TrustBoxRequestController {
    async create(req, res, next) {
        try {
            const {department, title, description} = req.body;
            const trustBoxReq = TrustBoxRequest.create({ department, title, description});
            res.json(trustBoxReq);  
        } catch (error) {
            next(ApiError.badRequest(error.message))
        };
    }

    async getOne(req, res) {
        const {id} = req.params;
        const trustBoxReq = await TrustBoxRequest.findOne(
            {
                where: {id}
            },
        )
        return  res.json(trustBoxReq); 
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit|| 9;
        let offset = page * limit - limit;
        let trustBoxReqs = await TrustBoxRequest.findAndCountAll({limit, offset});
        return res.json(trustBoxReqs);
    }

    async deleteOne(req, res) {
        const {id} = req.params;
        await TrustBoxRequest.destroy(
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was deleted successfully!` });
    }

    async deleteAll(req, res) {
        TrustBoxRequest.destroy({     
            where: {},
            truncate: false
        });
        res.send({ message: `All elements were deleted successfully!` });
    }
}

module.exports = new TrustBoxRequestController()