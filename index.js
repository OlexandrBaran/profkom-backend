const express = require('express')
const mongoose = require("mongoose")
require('dotenv').config()
const cors = require('cors')
const bodyParser = require("body-parser");
var multer = require('multer');
var upload = multer();
const formidable = require('express-formidable');

const forms = multer();

//const models = require("./models/models")

//const sequelize = require('./db');
const router = require('./routes/index');
//const errorHandler = require('./middleware/errorHandlingMiddleware');
//const fileUpload = require('express-fileupload');
//const path = require('path')
//const {generateUploadURL} = require('./s3')


const PORT = process.env.PORT || 5000; 

 
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);


/*app.use(express.static(path.resolve(__dirname, 'public')))
app.use(fileUpload({}));



app.get('/s3Url', async (req, res) => {
    const url = await generateUploadURL()
    res.send({url})
})

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send('App is running');
   
  });



app.use(errorHandler);



*/
const start = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.DB_URL, () => {
        console.log("Connected to MongoDB");
});
        //await sequelize.authenticate()
        //await sequelize.sync()
        app.listen(PORT, () => console.log(`app listen on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();