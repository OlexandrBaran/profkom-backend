const mongoose = require('mongoose');

const additionalPointsResultSchema = new mongoose.Schema({
  department: { type: String, required: true },
  title: { type: String, required: true },
  file: { type: String, required: true },
}, { timestamps: true });

const AdditionalPointsResult = mongoose.model('AdditionalPointsResult', additionalPointsResultSchema);

module.exports = AdditionalPointsResult;