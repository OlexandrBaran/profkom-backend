const {AdditionalPointsResult} = require('../models/models')
//const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path')

class AdditionalPointsResultController {
    async create(req, res, next) {
        try {
            const {department, title} = req.body;
            const {file} = req.files;
            let fileName = uuid.v4() + ".pdf";
            file.mv(path.resolve(__dirname, '..', 'static', fileName))

            const addPointRes = AdditionalPointsResult.create({department, title, file:fileName});
            res.json(addPointRes);
        } catch (error) {
          //  next(ApiError.badRequest(error.message))
        }  
    }

    async getOne(req, res) {
        const {id} = req.params;
        const addPiontResult = await AdditionalPointsResult.findOne(
            {
                where: {id}
            },
        )
        return res.json(addPiontResult); 
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let addPiontResults = await AdditionalPointsResult.findAndCountAll({limit, offset});
        return res.json(addPiontResults);
    }

    async update(req, res) {
        const {id} = req.params
        await AdditionalPointsResult.update(
            req.body,
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was updated successfully!` });
    }

    async deleteOne(req, res) {
        const {id} = req.params;
        await AdditionalPointsResult.destroy(
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was deleted successfully!` });
    }
}

module.exports = new AdditionalPointsResultController()