import  { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loadStateFromLocal } from './Redux/actions/user';
import { wishListAuthModalHide } from './Redux/actions/wishlist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthModel from "./Components/AuthModel";
import Header from './Components/Header';


const HomePage = lazy(() => import('./Pages/HomePage'));
const WishlistPage = lazy(() => import('./Pages/WishlistPage'));

function App() {
  const dispatch = useDispatch();
  const [isShowAuthModel, setIsShowAuthModel] = useState(false);

  const wishlist = useSelector(state => state.wishlist.showAuthenticateModal);

  const handleAuthModel = () => {
    setIsShowAuthModel(!isShowAuthModel)
  }

  useEffect(() => {
    dispatch(loadStateFromLocal());
  });

  useEffect(() => {
    if (wishlist) {
      setIsShowAuthModel(true);
      dispatch(wishListAuthModalHide());
    }
  }, [wishlist, dispatch]);

  return (
    <div className="w-full flex flex-col justify-center">
        <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header isAuth={ false } showAuthModel={ handleAuthModel }/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
      <AuthModel showModel={ isShowAuthModel } closeModel={handleAuthModel} />
      <ToastContainer 
        toastClassName="dark-toast"
      />
    </div>
  );
}

export default App;
