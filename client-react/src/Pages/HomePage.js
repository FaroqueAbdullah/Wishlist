import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Product from "../Components/Product";
import { getProductDataRequest } from '../Redux/actions/product';

function HomePage() {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.products) || [];

  useEffect(() => {
    dispatch(getProductDataRequest(''));
  }, [dispatch]);

  return (
    <div className="w-full flex justify-center mt-4 p-2">
        <div className="max-w-screen-desktop w-full grid gap-4 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4">
          {product.map((item, index) => ( <Product key={index} item={ item }/> ))}
        </div>
    </div>
  );
}

export default HomePage;