import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaSignInAlt, FaSearch, FaHeart, FaSignOutAlt } from "react-icons/fa";

import HeaderOption  from "./HeaderOption";
import BrandIcon from "./BrandIcon";
import SearchBar from "./SearchBar";

import { logOutUserRequest } from '../Redux/actions/user';
import { getProductDataRequest } from '../Redux/actions/product';


function Header({ showAuthModel }) {
  const dispatch = useDispatch();
  const navigation = useNavigate ();

  const user = useSelector(state => state.user);
  const wishlistCount = useSelector(state => state.wishlist.wishlistCount);
  

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isWishlistChanged, setIsWishlistChanged] = useState(0);

  const showSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  }

  const logOutUser = () => {
    dispatch(logOutUserRequest());
  }

  const searchInputSet = (searchInput) => {
    dispatch(getProductDataRequest(searchInput));
  }

  useEffect(() => {
    if ( wishlistCount > isWishlistChanged ) {
      setIsWishlistChanged(wishlistCount);
      toast("Product added to wishlist!");
    } else if ( wishlistCount < isWishlistChanged ) {
      setIsWishlistChanged(wishlistCount);
      toast("Product removed to wishlist!");
    }
  } , [wishlistCount, isWishlistChanged]);

  useEffect(() => {
    user.authenticated ? setIsAuth(true) : setIsAuth(false);
  }, [user]);

  return (
    <div className="w-full shadow-xl p-2 sticky top-0 z-30 bg-white-primary">
      <div className="w-full flex justify-between">
        <div onClick={() => navigation("/")}>
          <BrandIcon  />
        </div>
        <div className="font-bold flex justify-center items-center">
          <HeaderOption icon={ <FaSearch /> } name="Search" optionClick={showSearch}/>
          <HeaderOption showIcon={isAuth} icon={ <FaHeart /> } name="Wish List" wishlistCount={wishlistCount} optionClick={() => navigation("/wishlist")}/>
          <HeaderOption showIcon={isAuth} icon={ <FaSignOutAlt /> } name="Sign Out" optionClick={logOutUser}/>
          <HeaderOption showIcon={!isAuth} icon={ <FaSignInAlt /> } name="Sign In" optionClick={ showAuthModel }/>
        </div>
      </div>
      <SearchBar icon={ <FaSearch /> } showSearch={isSearchOpen} searchInputSet={searchInputSet}/>
    </div>
  );
}

export default Header;