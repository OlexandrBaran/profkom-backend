const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  department: { type: String, required: true },
  title: { type: String, required: true },
  file: { type: String, required: true },
}, { timestamps: true });

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating