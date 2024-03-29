const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

require('dotenv').config();
const connect = require('./config/db');

const authRouter = require('./routes/auth/auth.router');
const productRouter = require('./routes/product/product.router');
const wishlistRouter = require('./routes/wishlist/wishlist.router');

const verifyToken = require('./middleware/auth')

const PORT = process.env.PORT || 4000;
const app = express();
connect();

app.use(cors({
  origin: '*',
}));
app.use(bodyParser.json());
app.use('/auth' , authRouter);
app.use('/product' , productRouter);
app.use('/wishlist', verifyToken , wishlistRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});