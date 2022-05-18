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
    <div className='w-full'>
      { product.length === 0 && <div className="font-extrabold text-gray-secondary flex justify-center pt-16"> No Product in Found </div> }
      <div className="w-full h-screen overflow-scroll no-scrollbar flex justify-center pt-16 pl-2 pr-2">
          <div className="max-w-screen-desktop w-full grid gap-4 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4">
            {product.map((item, index) => ( <Product key={index} item={ item }/> ))}
          </div>
      </div>
    </div>
    
  );
}

export default HomePage;