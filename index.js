const express = require('express');
require('dotenv').config();
const models = require("./models/models")
const cors = require('cors');
const sequelize = require('./db');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path')

 
 
const PORT = process.env.PORT || 5000;

 
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/', router);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'front/build/static')))
    
    app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, 'front/build/index.html'));
   
  });
}


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