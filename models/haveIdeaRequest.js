import mongoose from "mongoose";

const haveIdeaRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  theme: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

const HaveIdeaRequest = mongoose.model('HaveIdeaRequest', haveIdeaRequestSchema);

export default HaveIdeaRequest;