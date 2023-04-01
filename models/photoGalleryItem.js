const mongoose = require('mongoose');

const photoGalleryItemSchema = new mongoose.Schema({
  title_ua: { type: String, required: true},
  title_en: { type: String, required: true},
  image: { type: String, required: true },
  category: { type: String, required: true}
}, { timestamps: true });

const PhotoGalleryItem = mongoose.model('PhotoGalleryItem', photoGalleryItemSchema);

module.exports = PhotoGalleryItem;