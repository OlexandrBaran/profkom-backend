const PhotoGalleryItem = require('../models/photoGalleryItem')
const deleteFileFromS3 = require("../features/deleteFileFromS3")
const getFileKey = require("../features/getFileKey")
//const ApiError = require('../error/ApiError');

const create = async (req, res) => {
    try {
      const {title_ua, title_en, category} = req.body;
      const fileUrl = req.file.location;
      const photoGalleryItem = await PhotoGalleryItem.create({
        title_ua, 
        title_en, 
        category,
        image: fileUrl
      });
      return res.status(201).json(photoGalleryItem);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
};

const getOne = async (req, res) => {
    try {
      const photoGalleryItem = await PhotoGalleryItem.findById(req.params.id);
  
      if (!photoGalleryItem) {
        return res.status(404).json({ message: "Photo Gallery Item not found" });
      }
  
      return res.status(200).json(photoGalleryItem);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
      const photoGalleryItems = await PhotoGalleryItem.find();
      return res.status(200).json(photoGalleryItems);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params
        const photoGalleryItem = await PhotoGalleryItem.findById(id);
    
        if (!photoGalleryItem) {
          return res.status(404).json({ message: "Photo Gallery Item not found" });
        }
        deleteFileFromS3(getFileKey(photoGalleryItem.image))

        const {title_ua, title_en, category} = req.body;
        const fileUrl = req.file.location;

        await PhotoGalleryItem.findOneAndUpdate({_id:id}, 
            {
                title_ua, 
                title_en, 
                category,
                image: fileUrl
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
      const photoGalleryItem = await PhotoGalleryItem.findById(id);

      if (!photoGalleryItem) {
        return res.status(404).json({ message: "Photo Gallery Item not found" });
      }
      const fileKey = getFileKey(photoGalleryItem.image)
      deleteFileFromS3(fileKey)
  
      await PhotoGalleryItem.findByIdAndDelete(id);
      return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

module.exports = {create, getOne, getAll, update, deleteOne}