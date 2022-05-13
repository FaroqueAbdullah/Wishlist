const express = require('express');

const product = require('./product.controller');

const productRouter = express.Router();

productRouter.get('/' , product.getProducts);

module.exports =  productRouter;