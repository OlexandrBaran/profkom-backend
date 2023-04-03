const Question = require('../models/question')
//const ApiError = require('../error/ApiError');

const create = async (req, res) => {
    try {
      const {questionText_en, questionText_ua, questionType, options_en, options_ua} = req.body;
      let votes;
      if (options_en.length) {
        console.log(options_en.length);
        votes = new Array(options_en.length).fill(0)
      }
      
      const question = await Question.create({
        questionText_en,
        questionText_ua, 
        questionType, 
        options_en, 
        options_ua, 
        votes
      });
      return res.status(201).json(question);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
};

const getOne = async (req, res) => {
    try {
      const question = await Question.findById(req.params.id);
  
      if (!question) {
        return res.status(404).json({ message: "Question not found" });
      }
  
      return res.status(200).json(question);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params
        const question = await Question.findById(id);
    
        if (!question) {
          return res.status(404).json({ message: "Question not found" });
        }
    
        const {questionText_en, questionText_ua, questionType, options_en, options_ua, votes, extended_answers} = req.body;

        await Question.findOneAndUpdate({_id:id}, 
          {
            questionText_en,
            questionText_ua, 
            questionType, 
            options_en, 
            options_ua, 
            votes, 
            extended_answers
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
      const question = await Question.findById(id);

      if (!question) {
        return res.status(404).json({ message: "Question not found" });
      }
  
      await Question.findByIdAndDelete(id);
      return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

module.exports = {create, getOne, deleteOne, update}