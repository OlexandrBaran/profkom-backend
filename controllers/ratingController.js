const {Rating} = require('../models/models')
//const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path')

class RatingController {
    async create(req, res, next) {
        try {
            const {department, title} = req.body;
            const {file} = req.files;
            let fileName = uuid.v4() + ".pdf";
            file.mv(path.resolve(__dirname, '..', 'static', fileName))

            const rating = Rating.create({department, title, file:fileName});

            res.json(rating);
        } catch (error) {
           // next(ApiError.badRequest(error.message))
        }
    }

    async getOne(req, res) {
        const {id} = req.params;
        const rating = await Rating.findOne(
            {
                where: {id}
            },
        )
        return res.json(rating); 
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit|| 9;
        let offset = page * limit - limit;
        let ratings = await Rating.findAndCountAll({limit, offset});
        return res.json(ratings);;
    }

    async update(req, res) {
        const {id} = req.params
        await Rating.update(
            req.body,
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was updated successfully!` });
    }

    async deleteOne(req, res) {
        const {id} = req.params;
        await Rating.destroy(
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was deleted successfully!` });

    }
}

module.exports = new RatingController()