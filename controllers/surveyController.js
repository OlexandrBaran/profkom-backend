const Survey = require('../models/survey')
//const ApiError = require('../error/ApiError');


/*
class PollController {
    async create(req, res, next) {
        try {
            const {
                questionUA,
                questionEN,
                department,
                descriptionEN,
                descriptionUA,
                status,
                options,
                votes,
                votedUsersId
            } = req.body;
            let optionsArray = Object.keys(options).map((key) => [options[key]]);
            let votesArray = Object.keys(votes).map((key) => [votes[key]]);
            let votedUsersIdArray = Object.keys(votedUsersId).map((key) => [votedUsersId[key]]);

            const poll = Poll.create(
                {
                    questionUA,
                    questionEN,
                    department,
                    descriptionEN,
                    descriptionUA,
                    status,
                    options:optionsArray,
                    votes:votesArray,
                    votedUsersId:votedUsersIdArray
                }
            )
            res.json(poll)
        } catch (error) {
            //next(ApiError.badRequest(error.message))
        }
    }

    async getOne(req, res) {
        const {id} = req.params;
        const poll = await Poll.findOne(
            {
                where: {id}
            },
        )
        return res.json(poll); 
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit|| 9;
        let offset = page * limit - limit;
        let poll = await Poll.findAndCountAll({limit, offset});
        return res.json(poll);
    }

    async update(req, res) {
        const {id} = req.params
        await Poll.update(
            req.body,
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was updated successfully!` });
    }

    async deleteOne(req, res) {
        const {id} = req.params;
        await Poll.destroy(
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was deleted successfully!` });
    }
}
*/
module.exports = {}