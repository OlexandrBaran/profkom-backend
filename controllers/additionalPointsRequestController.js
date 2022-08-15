const {AdditionalPointsRequest} = require('../models/models')
const uuid = require('uuid');
const path = require('path')
const ApiError = require('../error/ApiError');

class AdditionalPointsRequestController {
    async create(req, res, next) {
        try {
            const {name, email, department, course, category, description} = req.body;
            const {file} = req.files;
            let fileName = uuid.v4() + ".pdf";
            file.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const addPointReq = AdditionalPointsRequest.create({name, email, department, course, category, description,
                 file:fileName 
            });
            res.json(addPointReq);
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let addPiontRequests = await AdditionalPointsRequest.findAndCountAll({limit, offset});
        return res.json(addPiontRequests);
    }

    async getOne(req, res) { 
        const {id} = req.params;
        const addPiontRequest = await AdditionalPointsRequest.findOne(
            {
                where: {id}
            },
        )
        return res.json(addPiontRequest); 
    }

    async deleteAll(req, res) {
        AdditionalPointsRequest.destroy({     
            where: {},
            truncate: false
        });
        res.send({ message: `All elements were deleted successfully!` });
        
    }

    async deleteOne(req, res) {
        const {id} = req.params;
        await AdditionalPointsRequest.destroy(
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was deleted successfully!` });
    }
}

module.exports = new AdditionalPointsRequestController()