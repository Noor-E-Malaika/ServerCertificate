const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  rollno: { type: String },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);