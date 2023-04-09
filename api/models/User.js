const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  phone: Number,
  date: Date,
  password: String, // Will be hashed
});

const userModel = model("UserModel", userSchema);
module.exports = userModel;
