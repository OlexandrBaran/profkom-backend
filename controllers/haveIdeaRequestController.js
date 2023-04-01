const HaveIdeaRequest = require('../models/haveIdeaRequest')
//const ApiError = require('../error/ApiError');

const create = async (req, res) => {
    try {
      const {name, email, department, theme, description } = req.body;
      const haveIdeaRequest = await HaveIdeaRequest.create({
        name, email, department, theme, description
      });
      return res.status(201).json(haveIdeaRequest);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
};

const getOne = async (req, res) => {
    try {
      const haveIdeaRequest = await HaveIdeaRequest.findById(req.params.id);
  
      if (!haveIdeaRequest) {
        return res.status(404).json({ message: "HaveIdea Request not found" });
      }
  
      return res.status(200).json(haveIdeaRequest);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
      const haveIdeaRequests = await HaveIdeaRequest.find();
      return res.status(200).json(haveIdeaRequests);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const deleteOne = async (req, res) => {
  try {
    const {id} = req.params
    const haveIdeaRequest = await HaveIdeaRequest.findById(id);

    if (!haveIdeaRequest) {
      return res.status(404).json({ message: "haveIdea Request not found" });
    }

    await HaveIdeaRequest.findByIdAndDelete(id);
    return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteAll = async (req, res) => {
  try {
    await HaveIdeaRequest.deleteMany({});
    return res.status(200).json({ message: `All HaveIdea Requests was deleted successfully!` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {create, getOne, getAll, deleteOne, deleteAll}