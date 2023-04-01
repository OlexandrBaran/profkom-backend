const QuestionAnswer = require('../models/questionAnswer')
//const ApiError = require('../error/ApiError');

const create = async (req, res) => {
    try {
        const {title_en, title_ua, department, description_en, description_ua, category} = req.body;
        
        const questionAnswer = await QuestionAnswer.create({
            title_en, 
            title_ua, 
            department, 
            description_en, 
            description_ua, 
            category
      });
      return res.status(201).json(questionAnswer);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
};

const getAll = async (req, res) => {
    try {
      const questionAnswer = await QuestionAnswer.find();
      return res.status(200).json(questionAnswer);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params
        const questionAnswer = await QuestionAnswer.findById(id);
    
        if (!questionAnswer) {
          return res.status(404).json({ message: "QuestionAnswer not found" });
        }

        const {title_en, title_ua, department, description_en, description_ua, category} = req.body;

        await QuestionAnswer.findOneAndUpdate({_id:id}, 
            {
                title_en, 
                title_ua, 
                department, 
                description_en, 
                description_ua, 
                category
          },
          {new: true},
          (error, data) => {
            if (error) {
              console.log(error);
            } else {
              console.log(data);
            }
          }
        ).clone()

      return res.status(200).json(`Element with ${id} was successfuly updated`);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const deleteOne = async (req, res) => {
    try {
      const {id} = req.params
      const questionAnswer = await QuestionAnswer.findById(id);
  
      if (!questionAnswer) {
        return res.status(404).json({ message: "QuestionAnswer not found" });
      }
  
      await QuestionAnswer.findByIdAndDelete(id);
      return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

module.exports = {create, getAll, update, deleteOne}