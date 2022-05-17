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

const checkProductOnUserWishlist = async ( email, productId ) => {
  try {
    return await Wishlist.findOne({
      owner: email,
      products: { $elemMatch: { productId } }
    });
  } catch (err) {
    return res.status(500).send({ 'message' : "Server error" });
  }
}


const updateOrCreateWishList = async ( email, product ) => {
  try {
    return await Wishlist.updateOne(
      { owner: email }, 
      { $push: { products: {...product, owner: email}  } 
    },{upsert: true})
  } catch (err) {
    return res.status(500).send({ 'message' : "Server error" });
  }
}




const getWishlist = async ( req, res, next ) => {
  try {
    const WishlistById = await Wishlist.findOne({ 
      owner: res.user_email
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

    const checkWishlistByOwner = await checkUserWishlist( res.user_email )

    if ( !checkWishlistByOwner ) {
      await updateOrCreateWishList( res.user_email, req.body );
    
      return res.status(200).send({ 
        'status': 'success',
        'message' : "Product added to the wishlist"
      });
    }

    const checkWishlistByProductId = await checkProductOnUserWishlist( res.user_email, productId );

    if (checkWishlistByProductId) {
      return res.status(409 ).send({ 
        'status': 'error',
        'message' : "Product already exists in wishlist"
      });
    }

    const wishlist = await updateOrCreateWishList( res.user_email, req.body );

    if ( wishlist ) {
      return res.status(200).send({ 
        'status': 'success',
        'message' : "Product added to the wishlist"
      });
    }
    
  } catch (err) {
    return res.status(500).send({ 'message' : err });
  }
}


const deleteWishlist = async ( req, res, next ) => {
  try {
    const { productId } = req.body;

    const checkWishlistById = await Wishlist.findOne({
      owner: res.user_email,
      products: { $elemMatch: { productId } }
    });

    if (!checkWishlistById) {
      return res.status(404).send({ 
        'status': 'error',
        'message' : "Product doesn't exists in wishlist"
      });
    }

    const wishlist = await Wishlist.updateOne(
      { owner: res.user_email }, 
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