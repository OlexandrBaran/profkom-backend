const {QuestionAnswer} = require('../models/models')
const ApiError = require('../error/ApiError');

class QuestionAnswerController {
    async create(req, res) {
        try {
            const {titleEN, titleUA, department, descriptionEN, descriptionUA, category} = req.body;
            const questionAnswer = QuestionAnswer.create({titleEN, titleUA, department, descriptionEN, descriptionUA, category});
            res.json(questionAnswer); 

            } catch (error) {
                next(ApiError.badRequest(error.message))
            }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit|| 9;
        let offset = page * limit - limit;
        let questionAnswers = await QuestionAnswer.findAndCountAll({limit, offset});
        return res.json(questionAnswers);;
    }

    async update(req, res) {
        const {id} = req.params
        await QuestionAnswer.update(
            req.body,
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was updated successfully!` });
    }

    async deleteOne(req, res) {
        const {id} = req.params;
        await QuestionAnswer.destroy(
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was deleted successfully!` });
    }
}

module.exports = new QuestionAnswerController()