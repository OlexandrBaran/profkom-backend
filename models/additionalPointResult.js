import mongoose from "mongoose";

const additionalPointsResultSchema = new mongoose.Schema({
  department: { type: String, required: true },
  title: { type: String, required: true },
  file: { type: String, required: true },
}, { timestamps: true });

const AdditionalPointsResult = mongoose.model('AdditionalPointsResult', additionalPointsResultSchema);

export default AdditionalPointsResult;
