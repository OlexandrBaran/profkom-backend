import mongoose from "mongoose";

const chummerySchema = new mongoose.Schema({
  name: {
    type: {
        en: { type: String, required: true },
        ua: { type: String, required: true }
      },
      required: true
  },
  address: {
    type: {
        en: { type: String, required: true },
        ua: { type: String, required: true }
      },
      required: true
  },
  phone: { type: String, required: true, unique: true },
  comendantPhone: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  additionalInfo: {
    type: {
        en: { type: String, required: true },
        ua: { type: String, required: true }
      },
      required: true
  },
}, { timestamps: true });

const Chummery = mongoose.model('Chummery', chummerySchema);

export default Chummery;