const TrustBoxRequest = require('../models/trustBoxRequest')
//const ApiError = require('../error/ApiError');

const create = async (req, res) => {
    try {
      const {department, theme, description} = req.body;
      const trustBoxRequest = await TrustBoxRequest.create({
        department, theme, description
      });
      return res.status(201).json(trustBoxRequest);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
};

const getOne = async (req, res) => {
    try {
      const trustBoxRequest = await TrustBoxRequest.findById(req.params.id);
  
      if (!trustBoxRequest) {
        return res.status(404).json({ message: "TrustBox Request not found" });
      }
  
      return res.status(200).json(trustBoxRequest);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
      const trustBoxRequests = await TrustBoxRequest.find();
      return res.status(200).json(trustBoxRequests);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const deleteOne = async (req, res) => {
  try {
    const {id} = req.params
    const trustBoxRequest = await TrustBoxRequest.findById(id);

    if (!trustBoxRequest) {
      return res.status(404).json({ message: "TrustBox Request not found" });
    }

    await TrustBoxRequest.findByIdAndDelete(id);
    return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteAll = async (req, res) => {
  try {
    await TrustBoxRequest.deleteMany({});
    return res.status(200).json({ message: `All TrustBox Requests was deleted successfully!` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {create, getOne, getAll, deleteOne, deleteAll}