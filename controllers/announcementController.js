const Announcement = require('../models/announcement')
const deleteFileFromS3 = require("../features/deleteFileFromS3")
const getFileKey = require("../features/getFileKey")
//const ApiError = require('../error/ApiError');

const create = async (req, res) => {
    try {
      const {title_ua, title_en, content_ua, content_en, department, date, author } = req.body;
      const fileUrl = req.file.location;
      const announcement = await Announcement.create({
        title_ua,
        title_en, 
        content_ua, 
        content_en,        
        department,  
        date, 
        author,
        image: fileUrl,
      });
      return res.status(201).json(announcement);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
};

const getOne = async (req, res) => {
    try {
      const announcement = await Announcement.findById(req.params.id);
  
      if (!announcement) {
        return res.status(404).json({ message: "Announcement not found" });
      }
  
      return res.status(200).json(announcement);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
      const announcements = await Announcement.find();
      return res.status(200).json(announcements);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params
        const announcement = await Announcement.findById(id);
    
        if (!announcement) {
          return res.status(404).json({ message: "Announcement not found" });
        }
        deleteFileFromS3(getFileKey(announcement.image))

        const {title_ua, title_en, content_ua, content_en, department, date, author, likes, views } = req.body;
        const fileUrl = req.file.location;

        await Announcement.findOneAndUpdate({_id:id}, 
            {
              title_ua,
              title_en, 
              content_ua, 
              content_en,   
              department,  
              date, 
              author,
              image: fileUrl,
              likes,
              views,
                
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
    const announcement = await Announcement.findById(id);

    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }
    const fileKey = getFileKey(announcement.image)
    deleteFileFromS3(fileKey)

    await Announcement.findByIdAndDelete(id);
    return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {create, getOne, getAll, update, deleteOne}