import mongoose from "mongoose";

const pollSchema = new mongoose.Schema({
    question: {
        en: { type: String, required: true },
        ua: { type: String, required: true }
      },
    department: { type: String, required: true },
    description: {
        en: { type: String, required: true },
        ua: { type: String, required: true }
      },
    status: { type: String, default: "ACTIVE" },
    options: { type: [String], required: true },
    votes: { type: [Number], required: true },
    votedUsersId: { type: [Number], required: true }
  }, { timestamps: true });
  
const Poll = mongoose.model('Poll', pollSchema);
  
export default Poll;