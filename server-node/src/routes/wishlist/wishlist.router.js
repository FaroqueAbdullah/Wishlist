const express = require('express');

const wishlist = require('./wishlist.controller');

const wishlistRouter = express.Router();

wishlistRouter.get('/' , wishlist.getWishlist);
wishlistRouter.post('/' , wishlist.addWishlist);
wishlistRouter.delete('/' , wishlist.deleteWishlist);

module.exports =  wishlistRouter;