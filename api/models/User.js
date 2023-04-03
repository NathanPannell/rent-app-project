const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  phone_number: Number,
  birth_date: Date,
  password: String,
});

const userModel = model("UserModel", userSchema);
module.exports = userModel;
