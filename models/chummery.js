const mongoose = require('mongoose');

const chummerySchema = new mongoose.Schema({
  
  name_ua: { type: String, required: true },
  name_en: { type: String, required: true },
  address_en: { type: String, required: true },
  address_ua: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  comendantPhone: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  additionalInfo_en: { type: String, required: true },
  additionalInfo_ua: { type: String, required: true }
}, { timestamps: true });

const Chummery = mongoose.model('Chummery', chummerySchema);

module.exports = Chummery;