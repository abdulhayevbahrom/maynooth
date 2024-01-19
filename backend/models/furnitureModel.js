const { Schema, model } = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  decription: {
    type: String,
  },
  brand: {
    type: String,
  },
  cloth: {
    type: String,
  },
  color: {
    type: String,
  },
  images: {
    type: Array,
  },
  size: {
    type: String,
  },
  category: {
    type: String,
  },
});

const FurnitureDB = model("Furnitures", schema);
module.exports = FurnitureDB;
