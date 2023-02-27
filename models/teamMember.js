import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema({
  firstName: {
    en: { type: String, required: true },
    ua: { type: String, required: true }
  },
  lastName: {
    en: { type: String, required: true },
    ua: { type: String, required: true }
  },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  bio: {
    en: { type: String, required: true },
    ua: { type: String, required: true }
  },
  department: { type: String, required: true },
  avatar: { type: String, required: true },
  position: {
    en: { type: String, required: true },
    ua: { type: String, required: true }
  },
  social: {
    instagram: { type: String, required: true },
    facebook: { type: String, required: true },
    telegram: { type: String, required: true }
  }
}, { timestamps: true });

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

export default TeamMember;