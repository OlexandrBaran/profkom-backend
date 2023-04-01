const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  firstName_en: { type: String, required: true },
  firstName_ua: { type: String, required: true },
  lastName_en: { type: String, required: true },
  lastName_ua: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  bio_en: { type: String, required: true },
  bio_ua: { type: String, required: true },
  department: { type: String, required: true },
  avatar: { type: String, required: true },
  position_en: { type: String, required: true },
  position_ua: { type: String, required: true },
  instagram: { type: String, required: true },
  facebook: { type: String, required: true },
  telegram: { type: String, required: true }
}, { timestamps: true });

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;