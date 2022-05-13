const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, default: null },
  description: { type: String, unique: true },
  password: { type: String },
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product;