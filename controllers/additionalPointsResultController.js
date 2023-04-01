const AdditionalPointsResult = require('../models/additionalPointResult')
const deleteFileFromS3 = require("../features/deleteFileFromS3")
const getFileKey = require("../features/getFileKey")
//const ApiError = require('../error/ApiError');


const create =  async (req, res) => {
    try {
      const { department, title } = req.body;
      const fileUrl = req.file.location;
      const additionalPointsResult = await AdditionalPointsResult.create({
        department,
        title,
        file: fileUrl,
      });
      return res.status(201).json(additionalPointsResult);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
};

const getOne = async (req, res) => {
    try {
      const additionalPointsResult = await AdditionalPointsResult.findById(req.params.id);
  
      if (!additionalPointsResult) {
        return res.status(404).json({ message: "Additional points result not found" });
      }
  
      return res.status(200).json(additionalPointsResult);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
      const additionalPointsResults = await AdditionalPointsResult.find();
      return res.status(200).json(additionalPointsResults);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params
        const oldAdditionalPointsResult = await AdditionalPointsResult.findById(id);
    
        if (!oldAdditionalPointsResult) {
          return res.status(404).json({ message: "Additional point result not found" });
        }
        deleteFileFromS3(getFileKey(oldAdditionalPointsResult.file))

        const { department, title } = req.body;
        const fileUrl = req.file.location;

        await AdditionalPointsResult.findOneAndUpdate({_id:id}, 
            {
            department,
            title,
            file: fileUrl,
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
    const additionalPointsResult = await AdditionalPointsResult.findById(id);

    if (!additionalPointsResult) {
      return res.status(404).json({ message: "Additional points request not found" });
    }
    const fileKey = getFileKey(additionalPointsResult.file)
    deleteFileFromS3(fileKey)

    await AdditionalPointsResult.findByIdAndDelete(id);
    return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {create, getOne, getAll, update, deleteOne}