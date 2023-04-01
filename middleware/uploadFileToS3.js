const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid');
const AWS = require('aws-sdk');

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

module.exports = upload.single('file')