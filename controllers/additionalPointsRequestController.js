import AdditionalPointsRequest from '../models/additionalPointReq.js'
import mongoose from 'mongoose';
import multer from "multer";
import AWS from "aws-sdk";
import fs from "fs";
import path from "path";
import uuid from 'uuid';
//const ApiError = require('../error/ApiError');


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
      callback(null, "");
    },
  });

const create = async (req, res) => {
    try {
      const additionalPointsRequest = new AdditionalPointsRequest(req.body);
      await additionalPointsRequest.save();
      res.status(201).json(additionalPointsRequest);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};


const createAdditionalPointsRequest = async (req, res) => {
    try {
      upload(req, res, async function (err) {
        if (err) {
          return res.status(400).json({ message: err.message });
        }
  
        const { name, email, department, course, category, description } = req.body;
        const file = req.file;
  
        const params = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: file.originalname,
          Body: file.buffer,
        };
  
        // Upload file to S3 bucket
        s3.upload(params, async (err, data) => {
          if (err) {
            return res.status(400).json({ message: err.message });
          }
  
          const additionalPointsRequest = new AdditionalPointsRequest({
            name,
            email,
            department,
            course,
            category,
            description,
            file: data.Location,
          });
  
          await additionalPointsRequest.save();
  
          return res.status(201).json({
            message: "Additional points request created successfully",
            additionalPointsRequest,
          });
        });
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  





























class AdditionalPointsRequestController {
    async create(req, res, next) {
        try {
            const {name, email, department, course, category, description} = req.body;
            const {file} = req.files;
            let fileName = uuid.v4() + ".pdf";
            file.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const addPointReq = AdditionalPointsRequest.create({name, email, department, course, category, description,
                 file:fileName 
            });
            res.json(addPointReq);
        } catch (error) {
          //  next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
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

module.exports = new AdditionalPointsRequestController()