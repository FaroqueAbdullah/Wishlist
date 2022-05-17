const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  owner: { type: String, default: null },
  products: []
})

const Wishlist = mongoose.model("Wishlist", wishlistSchema)

module.exports = Wishlist