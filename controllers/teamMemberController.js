const {TeamMember} = require('../models/models')
//const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const {uploadFile, fdfdfd} = require('../s3')


class TeamMemberController {
    async create(req, res) {
        console.log('req');
        console.log(req);
        try {
            const {  
                firstNameUA,
                lastNameUA,
                firstNameEN,
                lastNameEN,
                email,
                phoneNumber,
                descriptionEN,
                descriptionUA,
                department,
                positionUA,
                positionEN,
                instagram,
                facebook,
                telegram
            } = req.body;
            const {image} = req.files;
            let fileName = uuid.v4() + ".jpg";

           

            const teamMember = TeamMember.create({
                firstNameUA,
                lastNameUA,
                firstNameEN,
                lastNameEN,
                email,
                phoneNumber,
                descriptionEN,
                descriptionUA,
                department,
                image:fileName,
                positionUA,
                positionEN,
                instagram,
                facebook,
                telegram
            });

            res.json(teamMember); 
            
            } catch (error) {
               //next(ApiError.badRequest(error.message))
            }
        
    }

    async getOne(req, res) {
        const {id} = req.params;
        const teamMember = await TeamMember.findOne(
            {
                where: {id}
            },
        )
        return  res.json(teamMember); 
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit|| 9;
        let offset = page * limit - limit;
        let teamMembers = await TeamMember.findAndCountAll({limit, offset});
        return res.json(teamMembers);;
    }

    async update(req, res) {
        const {id} = req.params;
        await TeamMember.destroy(
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was deleted successfully!` });
    }

    async deleteOne(req, res) {

    }
}

module.exports = new TeamMemberController()