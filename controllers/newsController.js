const News = require('../models/news')
const deleteFileFromS3 = require("../features/deleteFileFromS3")
const getFileKey = require("../features/getFileKey")
//const ApiError = require('../error/ApiError');

const create = async (req, res) => {
    try {
      const {title_ua, title_en, content_ua, content_en, department, author } = req.body;
      const fileUrl = req.file.location;
      const news = await News.create({
        title_ua,
        title_en, 
        content_ua, 
        content_en,        
        department,  
        author,
        image: fileUrl,
      });
      return res.status(201).json(news);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
};

const getOne = async (req, res) => {
    try {
      const news = await News.findById(req.params.id);
  
      if (!news) {
        return res.status(404).json({ message: "News not found" });
      }
  
      return res.status(200).json(news);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
      const news = await News.find();
      return res.status(200).json(news);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params
        const news = await News.findById(id);
    
        if (!news) {
          return res.status(404).json({ message: "News not found" });
        }
        deleteFileFromS3(getFileKey(news.image))

        const {title_ua, title_en, content_ua, content_en, department, author, likes, views } = req.body;
        const fileUrl = req.file.location;

        await News.findOneAndUpdate({_id:id}, 
            {
              title_ua,
              title_en, 
              content_ua, 
              content_en,   
              department,  
              author,
              image: fileUrl,
              likes,
              views 
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
    const news = await News.findById(id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }
    const fileKey = getFileKey(news.image)
    deleteFileFromS3(fileKey)

    await News.findByIdAndDelete(id);
    return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {create, getOne, getAll, update, deleteOne}