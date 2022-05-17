import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaHeart } from "react-icons/fa";

import { postWishListDataRequest, deleteWishListDataRequest } from '../Redux/actions/wishlist';

function Product({ item }) {
  const dispatch = useDispatch();

  const wishlist = useSelector(state => state.wishlist.wishList);

  const [isWishProduct, setIsWishProduct] = useState(false);

  const addOrRemoveFromWishList = () => {
    if (isWishProduct) {
      dispatch(deleteWishListDataRequest({ productId: item._id }));
    } else {
      dispatch(postWishListDataRequest({
        name: item.name,
        image: item.image,
        productId: item._id,
        description: item.description,
      }))
    }
  }

  const productToWishlist = () => {
    addOrRemoveFromWishList()
  }

  useEffect(() => {
    const isProductWishList = wishlist.find(data => data.productId === item._id);
    if ( isProductWishList ) {
      setIsWishProduct(true);
    } else {
      setIsWishProduct(false);
    }
  }, [wishlist]);

  return (
    <div className="w-full relative rounded-md border-2 border-gray-tertiary opacity-75 text-gray-secondary hover:text-gray-primary hover:shadow-2xl hover:border-gray-primary hover:opacity-100 p-3">
      <img className="w-full" src={ item.image }/>
      <div className="w-full font-bold">{ item.name }</div>
      <div className="w-full text-sm">{ item.description }</div>
      <FaHeart className={`absolute top-2 right-2 text-2xl ${isWishProduct ? 'text-red-primary' : 'text-gray-tertiary'} cursor-pointer`} onClick={ productToWishlist }/>
    </div>
  );
}

export default Product;