const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  userId: { type: String, default: null },
  products: [{
    productId: { type: String, default: null },
    name: { type: String, default: null },
    image: { type: String }
  }]
})

const Wishlist = mongoose.model("Wishlist", wishlistSchema)

module.exports = Wishlist