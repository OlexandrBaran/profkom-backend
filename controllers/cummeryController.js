const Chummery = require('../models/chummery')
const deleteFileFromS3 = require("../features/deleteFileFromS3")
const getFileKey = require("../features/getFileKey")
//const ApiError = require('../error/ApiError');

const create = async (req, res) => {
    try {
      const {
        name_ua,
        name_en,
        address_en,
        address_ua,
        phone,
        comendantPhone,
        additionalInfo_en,
        additionalInfo_ua
      } = req.body;
    
      const fileUrl = req.file.location;
      const chummery = await Chummery.create({
        name_ua,
        name_en,
        address_en,
        address_ua,
        phone,
        comendantPhone,
        additionalInfo_en,
        additionalInfo_ua,
        image: fileUrl,
      });
      return res.status(201).json(chummery);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
};

const getOne = async (req, res) => {
    try {
      const chummery = await Chummery.findById(req.params.id);
  
      if (!chummery) {
        return res.status(404).json({ message: "Chummery not found" });
      }
  
      return res.status(200).json(chummery);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
      const chummeries = await Chummery.find();
      return res.status(200).json(chummeries);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params
        const chummery = await Chummery.findById(id);
    
        if (!chummery) {
          return res.status(404).json({ message: "Chummery not found" });
        }
        deleteFileFromS3(getFileKey(chummery.image))

        const {
            name_ua,
            name_en,
            address_en,
            address_ua,
            phone,
            comendantPhone,
            additionalInfo_en,
            additionalInfo_ua
          } = req.body;
        const fileUrl = req.file.location;

        await Chummery.findOneAndUpdate({_id:id}, 
            {
                name_ua,
                name_en,
                address_en,
                address_ua,
                phone,
                comendantPhone,
                additionalInfo_en,
                additionalInfo_ua,
                image: fileUrl,      
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
    const chummery = await Chummery.findById(id);

    if (!chummery) {
      return res.status(404).json({ message: "Chummery not found" });
    }
    const fileKey = getFileKey(chummery.image)
    deleteFileFromS3(fileKey)

    await Chummery.findByIdAndDelete(id);
    return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {create, getOne, getAll, update, deleteOne}