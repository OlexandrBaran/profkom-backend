require('dotenv').config()
const fs = require('fs');
const AWS = require('aws-sdk');

const bucketName = process.env.AWS_BUCKET_NAME="profkom-bucket"
const region = process.env.AWS_BUCKET_REGION="us-east-1"
const accessKeyId = process.env.AWS_ACCESS_KEY="AKIAUFRMHXL6SS3DC4UB"
const secretAccessKey = process.env.AWS_SECRET_KEY="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"
const s3 = new AWS.S3({
    region,
    accessKeyId,
    secretAccessKey 
})

//upload file to s3
function uploadFile(file, fileName) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: fileName
    }

    return s3.upload(uploadParams).promise()
}

exports.uploadFile = uploadFile
// download file from s3

function getFileStream(fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket:bucketName
    }

    return s3.getObject(downloadParams).createReadStream()
    
}

exports.getFileStream = getFileStream