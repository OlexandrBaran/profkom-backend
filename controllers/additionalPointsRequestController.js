const AdditionalPointsRequest = require('../models/additionalPointReq.js')
const mongoose = require('mongoose');
const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid');
const AWS = require('aws-sdk');
//import fs from "fs";
//import path from "path";
//const ApiError = require('../error/ApiError');


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_BUCKET_REGION,
});

const upload = multer({
    storage: multerS3({
      s3,
      bucket: process.env.AWS_BUCKET_NAME,
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: function (req, file, cb) {
        const extension = file.originalname.split('.').pop();
        const filename = `${uuid.v4()}.${extension}`;
        cb(null, filename);
      },
    }),
  });
  
const create = async (req, res) => {
    try {
      upload.single('file')
      const { name, email, department, course, category, description } = req.body;
      console.log({ name, email, department, course, category, description });
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

























/*

class AdditionalPointsRequestController {

    /*async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let addPiontRequests = await AdditionalPointsRequest.findAndCountAll({limit, offset});
        return res.json(addPiontRequests);
    }

    async getOne(req, res) { 
        const {id} = req.params;
        const addPiontRequest = await AdditionalPointsRequest.findOne(
            {
                where: {id}
            },
        )
        return res.json(addPiontRequest); 
    }

    async deleteAll(req, res) {
        AdditionalPointsRequest.destroy({     
            where: {},
            truncate: false
        });
        res.send({ message: `All elements were deleted successfully!` });
        
    }

    async deleteOne(req, res) {
        const {id} = req.params;
        await AdditionalPointsRequest.destroy(
            {
                where: {id}
            },
        )
        res.send({ message: `Element with id ${id} was deleted successfully!` });
    }
} 
*/

module.exports = {create, getAll, getOne} 