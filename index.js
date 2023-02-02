const express = require('express');
require('dotenv').config();
const models = require("./models/models")
const cors = require('cors');
const sequelize = require('./db');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path')
const {generateUploadURL} = require('./s3')


const PORT = process.env.PORT || 5000; 

 
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(fileUpload({}));
app.use('/', router);

app.get('/s3Url', async (req, res) => {
    const url = await generateUploadURL()
    res.send({url})
})

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send('App is running');
   
  });



app.use(errorHandler);




const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`app listen on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();