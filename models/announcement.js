const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  title_ua: { type: String, required: true},
  title_en: { type: String, required: true},
  content_ua: { type: String, required: true},
  content_en: { type: String, required: true},
  department: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: String, required: true },
  views: { type: Number, required: true, default: 0},
  likes: { type: Number, required: true, default: 0 },
  author: { type: String, required: true},
}, { timestamps: true });

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement