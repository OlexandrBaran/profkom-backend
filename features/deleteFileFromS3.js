const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_BUCKET_REGION,
});

const deleteFileFromS3 = (fileKey) => {
    s3.deleteObject({ Bucket: process.env.AWS_BUCKET_NAME, Key: fileKey }, (err, data) => {
        console.error(err);
        console.log(data);
    });
}

module.exports = deleteFileFromS3