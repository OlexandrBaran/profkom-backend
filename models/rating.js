import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  department: { type: String, required: true },
  title: { type: String, required: true },
  file: { type: String, required: true },
}, { timestamps: true });

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating