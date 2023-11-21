"use strict";

const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  id: {
    type: Number,
    index: { unique: true }, // id is unique index
    required: true
  },
  code: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  inventoryStatus: { type: String, required: true },
  category: { type: String, required: true },
  image: String,
  rating: Number
});

module.exports = mongoose.model('Products', productSchema);