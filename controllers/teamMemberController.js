const TeamMember = require('../models/teamMember')
const deleteFileFromS3 = require("../features/deleteFileFromS3")
const getFileKey = require("../features/getFileKey")
//const ApiError = require('../error/ApiError');

const create = async (req, res) => {
    try {
      const {
        firstName_en, 
        firstName_ua, 
        lastName_en, 
        lastName_ua, 
        email, 
        phoneNumber, 
        bio_en,
        bio_ua,
        department,
        position_ua,
        position_en,
        instagram,
        facebook,
        telegram 
    } = req.body;
      const fileUrl = req.file.location;
      const teamMember = await TeamMember.create({
        firstName_en, 
        firstName_ua, 
        lastName_en, 
        lastName_ua, 
        email, 
        phoneNumber, 
        bio_en,
        bio_ua,
        department,
        position_ua,
        position_en,
        instagram,
        facebook,
        telegram,
        avatar: fileUrl,
      });
      return res.status(201).json(teamMember);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
};

const getOne = async (req, res) => {
    try {
      const teamMember = await TeamMember.findById(req.params.id);
  
      if (!teamMember) {
        return res.status(404).json({ message: "Team member not found" });
      }
  
      return res.status(200).json(teamMember);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
      const teamMembers = await TeamMember.find();
      return res.status(200).json(teamMembers);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params
        const teamMember = await TeamMember.findById(id);
    
        if (!teamMember) {
          return res.status(404).json({ message: "Team member not found" });
        }
        deleteFileFromS3(getFileKey(teamMember.avatar))

        const {
            firstName_en, 
            firstName_ua, 
            lastName_en, 
            lastName_ua, 
            email, 
            phoneNumber, 
            bio_en,
            bio_ua,
            department,
            position_ua,
            position_en,
            instagram,
            facebook,
            telegram 
        } = req.body;
        const fileUrl = req.file.location;

        await TeamMember.findOneAndUpdate({_id:id}, 
            {
                firstName_en, 
                firstName_ua, 
                lastName_en, 
                lastName_ua, 
                email, 
                phoneNumber, 
                bio_en,
                bio_ua,
                department,
                position_ua,
                position_en,
                instagram,
                facebook,
                telegram,
                avatar:fileUrl
                
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
      const teamMember = await TeamMember.findById(id);
  
      if (!teamMember) {
        return res.status(404).json({ message: "Team member not found" });
      }
      const fileKey = getFileKey(teamMember.avatar)
      deleteFileFromS3(fileKey)
  
      await TeamMember.findByIdAndDelete(id);
      return res.status(200).json({ message: `Element with id ${id} was deleted successfully!` });
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

module.exports = {create, getOne, getAll, update, deleteOne}