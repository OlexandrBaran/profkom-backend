require('dotenv').config()
const fs = require('fs');
const AWS = require('aws-sdk');
const uuid = require('uuid');



const bucketName = process.env.AWS_BUCKET_NAME="profkom-bucket"
const region = process.env.AWS_BUCKET_REGION="us-east-1"
const accessKeyId = process.env.AWS_ACCESS_KEY="AKIAUFRMHXL6SS3DC4UB"
const secretAccessKey = process.env.AWS_SECRET_KEY="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"

const s3 = new AWS.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: "4"
})

//upload file to s3
function uploadFile(file, fileName) {
    const fileStream = fs.createReadStream(file.path)
    console.log('here we in uploads');
    console.log(file);
    console.log(fileName);
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: fileName
    }
    console.log('here we go');
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


async function generateUploadURL() {
    const fileName = uuid.v4();

    const params = ({
        Bucket: bucketName,
        Key: fileName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}

exports.generateUploadURL = generateUploadURL