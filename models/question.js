const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    questionText_en: { type: String, required: true },
    questionText_ua: { type: String, required: true },
    questionType: {
        type: String,
        enum: ['single_choice', 'multiple_choice', 'short_answer', 'long_answer'],
        required: true
      },
    options_en: { type: [String], default: [] },
    options_ua: { type: [String], default: [] },
    votes: { type: [Number],  default: [] },
    extended_answers:{ type: [String], default: [] }
})

const Question = mongoose.model("Question", questionSchema)

module.exports = Question