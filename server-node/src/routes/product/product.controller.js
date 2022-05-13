const Product = require('../../models/product.model');

const getProducts = async ( req, res, next ) => {
  try {
    const searchName = req.query.searchName;

    const Products = await Product.find({ 
      name: { 
        $regex: searchName ? searchName : '', 
        $options: "i" 
      }
    });

    return res.status(200).send({ 
      'status': 'success',
      'message' : "Prtoduct list fetched successfully",
      'data' : Products,
    });
  } catch (err) {
    return res.status(500).send({ 'message' : "Server error" });
  }
}

module.exports = { getProducts }