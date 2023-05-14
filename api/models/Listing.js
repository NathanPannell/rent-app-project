const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const listingSchema = new Schema({
  name: String,
  price: Number,
  location: String,
  bedrooms: Number,
  bathrooms: Number,
  description: String,
  propertyType: String,
  squareFootage: Number,
});

const listingModel = model("ListingModel", listingSchema);
module.exports = listingModel;
