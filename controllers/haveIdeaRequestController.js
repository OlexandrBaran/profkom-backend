const {HaveIdeaRequest} = require('../models/models')
//const ApiError = require('../error/ApiError');

class HaveIdeaController {
    async create(req, res, next) {
        try {
            const { name, email, department, theme, description} = req.body;
            const haveIdeaReq = HaveIdeaRequest.create({ name, email, department, theme, description});
            res.json(haveIdeaReq);
        } catch (error) {
           // next(ApiError.badRequest(error.message))
        }

    }

    async getOne(req, res) {
        const {id} = req.params;
        const haveIdeaReq = await HaveIdeaRequest.findOne(
            {
                where: {id}
            },
        )
        return  res.json(haveIdeaReq); 
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let haveIdeaReqs = await HaveIdeaRequest.findAndCountAll({limit, offset});
        return res.json(haveIdeaReqs);
    }

    async deleteAll(req, res) {
        HaveIdeaRequest.destroy({     
            where: {},
            truncate: false
        });
        res.send({ message: `All elements were deleted successfully!` });
    }

    async deleteOne(req, res) {
        const {id} = req.params;
        await HaveIdeaRequest.destroy(
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was deleted successfully!` });
    }
}

module.exports = new HaveIdeaController()