const Survey = require('../models/survey')
//const ApiError = require('../error/ApiError');

const create = async(req, res) => {
    try {
        const {title_en, title_ua, department, description_en, description_ua} = req.body;

        const survey = await Survey.create({
            title_en, title_ua, department, description_en, description_ua
        });
        return res.status(201).json(survey); 
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};

const getOne = async (req, res) => {
    try {
      const survey = await Survey.findById(req.params.id);
  
      if (!survey) {
        return res.status(404).json({ message: "Survey not found" });
      }
  
      return res.status(200).json(survey);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
      const survey = await Survey.find();
      return res.status(200).json(survey);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params
        const survey = await Survey.findById(id);
    
        if (!survey) {
          return res.status(404).json({ message: "Survey not found" });
        }
    
        const {title_en, title_ua, department, description_en, description_ua, status, questionsId, votedUsersId} = req.body;

        await Survey.findOneAndUpdate({_id:id}, 
            {
                title_en,
                title_ua, 
                department, 
                description_en, 
                description_ua, 
                status, 
                questionsId, 
                votedUsersId
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
      const survey = await Survey.findById(id);

      if (!survey) {
        return res.status(404).json({ message: "Survey not found" });
      }
  
      await Survey.findByIdAndDelete(id);
      return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};
/*

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
module.exports = {create, getOne, getAll, update, deleteOne}