const mongoose = require('mongoose');

const trustBoxRequestSchema = new mongoose.Schema({
  department: { type: String, required: true },
  theme: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

const TrustBoxRequest = mongoose.model('TrustBoxRequest', trustBoxRequestSchema);

module.exports = TrustBoxRequest;