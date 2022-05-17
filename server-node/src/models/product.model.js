const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, default: null },
  image: { type: String, default: null },
  productId: { type: String, default: null },
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product;