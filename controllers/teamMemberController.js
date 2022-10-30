const {TeamMember} = require('../models/models')
//const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');



class TeamMemberController {
    async create(req, res) {
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
                image,
                positionUA,
                positionEN,
                instagram,
                facebook,
                telegram
            } = req.body;
            

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
                image,
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
        const {id} = req.params
        await TeamMember.update(
            req.body,
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was updated successfully!` });
    }

    async deleteOne(req, res) {
        const {id} = req.params;
        await TeamMember.destroy(
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was deleted successfully!` });
    }
}

module.exports = new TeamMemberController()