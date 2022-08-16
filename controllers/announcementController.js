const {Announcement} = require('../models/models')
//const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path')

class AnnouncementController {
    async create(req, res, next) {
        try {
            const { 
                titleEN, 
                titleUA, 
                descriptionEN, 
                descriptionUA, 
                department, 
                date, 
                views, 
                likes, 
                author
            } = req.body;

            const {image} = req.files;
            
            let fileName = uuid.v4() + ".jpg";
            image.mv(path.resolve(__dirname, '..', 'static', fileName))

            const announcement = Announcement.create({
                titleEN,
                titleUA, 
                descriptionEN, 
                descriptionUA, 
                department, 
                image:fileName, 
                date, 
                views, 
                likes, 
                author,
            });

            res.json(announcement); 
            
            } catch (error) {
                    //next(ApiError.badRequest(error.message))
            }
    }

    async getOne(req, res) {
        const {id} = req.params;
        const announcement = await Announcement.findOne(
            {
                where: {id}
            },
        )
        return  res.json(announcement); 
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit|| 9;
        let offset = page * limit - limit;
        let announcements = await Announcement.findAndCountAll({limit, offset});
        return res.json(announcements);
    }

    async update(req, res) {
        const {id} = req.params
        await Announcement.update(
            req.body,
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was updated successfully!` });
    }

    async deleteOne(req, res) {
        const {id} = req.params;
        await Announcement.destroy(
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was deleted successfully!` });
    }
}

module.exports = new AnnouncementController()