const {Chummery} = require('../models/models')
//const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path')


class ChummeryController {
    async create(req, res) {
        try {
            const { 
                nameUA, 
                nameEN, 
                addressUA, 
                addressEN, 
                phone, 
                comendantPhone, 
                additionalInfoUA, 
                additionalInfoEN
            } = req.body;

            const {image} = req.files;

            let fileName = uuid.v4() + ".jpg";
            image.mv(path.resolve(__dirname, '..', 'static', fileName))


            const chummery = Chummery.create({
                nameUA, 
                nameEN, 
                addressUA, 
                addressEN, 
                phone, 
                comendantPhone, 
                image:fileName,
                additionalInfoUA, 
                additionalInfoEN
            });

            res.json(chummery);

        } catch (error) {
            //next(ApiError.badRequest(error.message))  
        }
    }

    async getOne(req, res) {
        const {id} = req.params;
        const chummery = await Chummery.findOne(
            {
                where: {id}
            },
        )
        return  res.json(chummery); 
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let chummeries = await Chummery.findAndCountAll({limit, offset});
        return res.json(chummeries);
    }

    async update(req, res) {
        const {id} = req.params
        await Chummery.update(
            req.body,
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was updated successfully!` });
    }

    async deleteOne(req, res) {
        const {id} = req.params;
        await Chummery.destroy(
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was deleted successfully!` });
    }
}

module.exports = new ChummeryController()