const nodemailer = require('nodemailer');

class mailService {

    constructor() {
        this.transporter = nodemailer.createTransport({})
    }


    sendActivationMail = (to, link) => {
        
    }
}

module.exports = new mailService();