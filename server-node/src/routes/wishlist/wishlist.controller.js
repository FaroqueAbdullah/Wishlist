const Wishlist = require('../../models/wishlist.model');

const getWishlist = async ( req, res, next ) => {
  try {
    const WishlistById = await Wishlist.findOne({ 
      userId: res.user_id
    });

    return res.status(200).send({ 
      'status': 'success',
      'message' : "Wishlists fetched successfully",
      'data' : WishlistById,
    });
  } catch (err) {
    return res.status(500).send({ 'message' : "Server error" });
  }
}

const addWishlist = async ( req, res, next ) => {
  try {
    const { productId } = req.body;

    const checkWishlistById = await Wishlist.findOne({
      userId: res.user_id,
      products: { $elemMatch: { productId } }
    });

    if (checkWishlistById) {
      return res.status(409 ).send({ 
        'status': 'error',
        'message' : "Product already exists in wishlist"
      });
    }

    const wishlist = await Wishlist.updateOne(
      { userId: res.user_id }, 
      { $push: { products: req.body  } 
    },{upsert: true})
    
    return res.status(200).send({ "data": req.body });
  } catch (err) {
    return res.status(500).send({ 'message' : "Server error" });
  }
}


const deleteWishlist = async ( req, res, next ) => {
  try {
    const { productId } = req.body;

    const checkWishlistById = await Wishlist.findOne({
      userId: res.user_id,
      products: { $elemMatch: { productId } }
    });

    if (!checkWishlistById) {
      return res.status(404).send({ 
        'status': 'error',
        'message' : "Product doesn't exists in wishlist"
      });
    }

    const wishlist = await Wishlist.updateOne(
      { userId: res.user_id }, 
      { $pull: { products: { productId }} 
    },{safe: true, multi:true})
    
    return res.status(200).send({ "message": "Product deleted from the wishlist" });
  } catch (err) {
    return res.status(500).send({ 'message' : "Server error" });
  }
}

module.exports = { getWishlist, addWishlist, deleteWishlist }