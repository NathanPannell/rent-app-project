const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const testSchema = new Schema({
  text: String,
});

const testModel = model("TestModel", testSchema);
module.exports = testModel;
