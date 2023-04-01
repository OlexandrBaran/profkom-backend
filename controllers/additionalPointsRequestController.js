const AdditionalPointsRequest = require('../models/additionalPointReq.js')
const deleteFileFromS3 = require("../features/deleteFileFromS3")
const getFileKey = require("../features/getFileKey")
//const ApiError = require('../error/ApiError');

const create =  async (req, res) => {
    try {
      const { name, email, department, course, category, description } = req.body;
      const fileUrl = req.file.location;
      const additionalPointsRequest = await AdditionalPointsRequest.create({
        name,
        email,
        department,
        course,
        category,
        description,
        file: fileUrl,
      });
      return res.status(201).json(additionalPointsRequest);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
};
  
const getOne = async (req, res) => {
    try {
      const additionalPointsRequest = await AdditionalPointsRequest.findById(
        req.params.id
      );
  
      if (!additionalPointsRequest) {
        return res.status(404).json({ message: "Additional points request not found" });
      }
  
      return res.status(200).json(additionalPointsRequest);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
      const additionalPointsRequests = await AdditionalPointsRequest.find();
      return res.status(200).json(additionalPointsRequests);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const deleteOne = async (req, res) => {
    try {
      const {id} = req.params
      const additionalPointsRequest = await AdditionalPointsRequest.findById(id);
  
      if (!additionalPointsRequest) {
        return res.status(404).json({ message: "Additional points request not found" });
      }
      const fileKey = getFileKey(additionalPointsRequest.file)
      deleteFileFromS3(fileKey)

      await AdditionalPointsRequest.findByIdAndDelete(id);
      return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const deleteAll = async (req, res) => {
  try {
    const additionalPointsRequests = await AdditionalPointsRequest.find();
    const fileKeys = additionalPointsRequests.map(el => getFileKey(el.file))
    fileKeys.map(el => deleteFileFromS3(el))

    await AdditionalPointsRequest.deleteMany({});
    return res.status(200).json({ message: `All additional points requests was deleted successfully!` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {create, getAll, getOne, deleteOne, deleteAll} 