const Rating = require('../models/rating')
const deleteFileFromS3 = require("../features/deleteFileFromS3")
const getFileKey = require("../features/getFileKey")
//const ApiError = require('../error/ApiError');

const create = async (req, res) => {
    try {
      const {department, title} = req.body;
      const fileUrl = req.file.location;
      const rating = await Rating.create({
        department, 
        title,
        file: fileUrl
      });
      return res.status(201).json(rating);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
};

const getOne = async (req, res) => {
    try {
      const rating = await Rating.findById(req.params.id);
  
      if (!rating) {
        return res.status(404).json({ message: "Rating not found" });
      }
  
      return res.status(200).json(rating);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
      const rating = await Rating.find();
      return res.status(200).json(rating);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params
        const rating = await Rating.findById(id);
    
        if (!rating) {
          return res.status(404).json({ message: "Rating not found" });
        }
        deleteFileFromS3(getFileKey(rating.file))

        const {department, title} = req.body;
        const fileUrl = req.file.location;

        await Rating.findOneAndUpdate({_id:id}, 
            {
                department, 
                title,
                file: fileUrl  
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
      const rating = await Rating.findById(id);
  
      if (!rating) {
        return res.status(404).json({ message: "Rating not found" });
      }
      const fileKey = getFileKey(rating.file)
      deleteFileFromS3(fileKey)
  
      await Rating.findByIdAndDelete(id);
      return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

module.exports = {create, getOne, getAll, update, deleteOne}