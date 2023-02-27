import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'USER' },
  department: { type: String, required: true },
  isActivated: { type: Boolean, required: true, default: false },
  activationLink: { type: String }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;