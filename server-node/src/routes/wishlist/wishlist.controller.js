const Wishlist = require('../../models/wishlist.model');

const checkUserWishlist = async ( userID ) => {
  try {
    return await Wishlist.findOne({ 
      userId: userID
    });
  } catch (err) {
    return res.status(500).send({ 'message' : "Server error" });
  }
}

const checkProductOnUserWishlist = async ( userId, productId ) => {
  try {
    return await Wishlist.findOne({
      userId: userId,
      products: { $elemMatch: { productId } }
    });
  } catch (err) {
    return res.status(500).send({ 'message' : "Server error" });
  }
}

const createWishlist = async ( userId, product ) => {
  try {
    console.log('createOrUpdateWishlist call')
    return await Wishlist.create(
      { userId: userId,
        products: [product] 
      });
  } catch (err) {
    console.log('createOrUpdateWishlist error')
    return res.status(500).send({ 'message' : "Server error" });
  }
}

const updateWishList = async ( req, res, next ) => {
  try {
    return await Wishlist.updateOne(
      { userId: userId }, 
      { $push: { products: product } 
    },{upsert: true})
  } catch (err) {
    return res.status(500).send({ 'message' : "Server error" });
  }
}

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

    const checkWishlistByUserId = await checkUserWishlist( res.user_id )

    if ( !checkWishlistByUserId ) {
      const wishlist = await createWishlist( res.user_id, req.body );
    
      return res.status(200).send({ 
        'status': 'success',
        'message' : "Product added to the wishlist",
        'data': wishlist 
      });
    }

    const checkWishlistByProductId = await checkProductOnUserWishlist( res.user_id, productId );

    if (checkWishlistByProductId) {
      return res.status(409 ).send({ 
        'status': 'error',
        'message' : "Product already exists in wishlist"
      });
    }

    const wishlist = await updateWishList( res.user_id, req.body );
    
    return res.status(200).send({ 
      'status': 'success',
      'message' : "Product added to the wishlist",
      'data': wishlist 
    });
  } catch (err) {
    return res.status(500).send({ 'message' : err });
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
    
    return res.status(200).send({ 
      'status': 'success',
      "message": "Product deleted from the wishlist",
      'data': wishlist
    });
  } catch (err) {
    return res.status(500).send({ 'message' : "Server error" });
  }
}

module.exports = { getWishlist, addWishlist, deleteWishlist }