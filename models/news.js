import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: {
    type: {
      en: { type: String, required: true },
      ua: { type: String, required: true }
    },
    required: true
  },
  image: { type: String, required: true },
  content: {
    type: {
      en: { type: String, required: true },
      ua: { type: String, required: true }
    },
    required: true
  },
  department: { type: String, required: true },
  datePublished: { type: Date, required: true },
  views: { type: Number, required: true },
  likes: { type: Number, required: true },
  author: { type: String, required: true }
}, { timestamps: true });

const News = mongoose.model('News', newsSchema);

export default News;