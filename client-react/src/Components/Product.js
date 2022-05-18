import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaHeart } from "react-icons/fa";

import { postWishListDataRequest, deleteWishListDataRequest, wishListAuthModalShow } from '../Redux/actions/wishlist';

function Product({ item }) {
  const dispatch = useDispatch();

  const wishlist = useSelector(state => state.wishlist.wishList);
  const user = useSelector(state => state.user.authenticated );

  const [isWishProduct, setIsWishProduct] = useState(false);

  const addOrRemoveFromWishList = () => {
    if (isWishProduct) {
      dispatch(deleteWishListDataRequest({ productId: item.productId }));
    } else {
      dispatch(postWishListDataRequest({
        name: item.name,
        image: item.image,
        productId: item.productId
      }))
    }
  }

  const productToWishlist = () => {
    if (user) {
      addOrRemoveFromWishList()
    } else {
      dispatch(wishListAuthModalShow())
    }
  }

  useEffect(() => {
    const isProductWishList = wishlist.find(data => data.productId === item.productId);
    if ( isProductWishList ) {
      setIsWishProduct(true);
    } else {
      setIsWishProduct(false);
    }
  }, [wishlist, item.productId]);

  return (
    <div className="w-full h-fit relative rounded-md border-2 border-gray-tertiary opacity-75 text-gray-secondary hover:text-gray-primary hover:shadow-2xl hover:border-gray-primary hover:opacity-100 p-2">
      <img className="w-full" src={ item.image } alt={ item.name }/>
      <div className="w-full font-bold h-12">{ item.name }</div>
      <div className="w-full text-sm h-16">{ item.description }</div>
      <FaHeart className={`absolute top-2 right-2 text-2xl ${isWishProduct ? 'text-red-primary' : 'text-gray-tertiary'} cursor-pointer`} onClick={ productToWishlist }/>
    </div>
  );
}

export default Product;