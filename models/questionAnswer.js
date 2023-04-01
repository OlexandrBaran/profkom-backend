const mongoose = require('mongoose');

const questionAnswerSchema = new mongoose.Schema({
    title_en: { type: String, required: true },
    title_ua: { type: String, required: true },
    department: { type: String, required: true },
    description_en: { type: String, required: true }, 
    description_ua: { type: String, required: true }, 
    category: { type: String, required: true }
}, { timestamps: true });

const QuestionAnswer = mongoose.model('QuestionAnswer', questionAnswerSchema);

module.exports = QuestionAnswer