import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import store from '../Redux/store';

import SubmitButton from '../Components/SubmitButton';
import { deleteWishListDataRequest } from '../Redux/actions/wishlist';

function WishlistPage() {
  const dispatch = useDispatch();

  const [wishlist, setWishlist] = useState([]);

  const wishlistData = useSelector(state => state.wishlist.wishList);

  useEffect(() => {
     setWishlist(store.getState().wishlist.wishList)
  },[])

  useEffect(() => {
    setWishlist(wishlistData)
  },[wishlistData])

  const removeProduct = (productId) => {
    dispatch(deleteWishListDataRequest({ productId: productId  }));
  }

  return (
    <div className="w-full flex flex-col justify-center items-center pt-10">
        {
        wishlist.map((item, index) => ( 
          <div className="w-full tablet:w-2/3 flex items-center justify-between rounded-md border-2 border-gray-tertiary text-gray-secondary p-3 m-3">
            <img className="w-20" src={ item.image }/>
            <div className=" font-bold">{ item.name }</div>
            <SubmitButton lebel='Remove' onButtonSubmit={() => {removeProduct( item.productId )}} />
          </div> 
        ))}
    </div>
  );
}

export default WishlistPage;