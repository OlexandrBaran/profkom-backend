import mongoose from "mongoose";

const additionalPointsRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  course: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: String, required: true },
}, { timestamps: true });

const AdditionalPointsRequest = mongoose.model('AdditionalPointsRequest', additionalPointsRequestSchema);

export default AdditionalPointsRequest;