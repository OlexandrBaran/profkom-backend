import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  title: {
    type: {
      en: { type: String, required: true },
      ua: { type: String, required: true },
    },
    required: true,
  },
  content: {
    type: {
      en: { type: String, required: true },
      ua: { type: String, required: true },
    },
    required: true,
  },
  department: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, required: true },
  views: { type: Number, required: true },
  likes: { type: Number, required: true },
  author: { type: String, required: true },
}, { timestamps: true });

const Announcement = mongoose.model('Announcement', announcementSchema);

export default Announcement