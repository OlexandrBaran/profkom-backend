const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    title_en: { type: String, required: true },
    title_ua: { type: String, required: true },
    department: { type: String, required: true },
    description_en: { type: String, required: true },
    description_ua: { type: String, required: true },
    status: { type: String, default: "ACTIVE" },
    questionsId: { type: [ObjectId], ref: "Question", default: []},
    votedUsersId: { type: [ObjectId], ref: "User", default: [] }
  }, { timestamps: true });
  
const Survey = mongoose.model('Survey', surveySchema);
  
module.exports = Survey;