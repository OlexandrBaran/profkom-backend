import mongoose from "mongoose";

const questionAnswerSchema = new mongoose.Schema({
    title: {
        en: { type: String, required: true },
        ua: { type: String, required: true }
      },
    department: { type: String, required: true },
    description: {
        en: { type: String, required: true },
        ua: { type: String, required: true }
      },
    category: { type: String, required: true }
}, { timestamps: true });

const QuestionAnswer = mongoose.model('QuestionAnswer', questionAnswerSchema);

export default QuestionAnswer