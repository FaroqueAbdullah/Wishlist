import { useState } from "react";

import { FaSignInAlt, FaSearch, FaHeart, FaSignOutAlt } from "react-icons/fa";

import HeaderOption  from "./HeaderOption";
import BrandIcon from "./BrandIcon";
import SearchBar from "./SearchBar";

function Header({ isAuth, showAuthModel }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const showSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  }

  return (
    <div className="w-full shadow-xl p-2 sticky top-0 z-30 bg-white-primary">
      <div className="w-full flex justify-between">
        <BrandIcon />
        <div className="font-bold flex justify-center items-center">
          <HeaderOption icon={ <FaSearch /> } name="Search" optionClick={showSearch}/>
          <HeaderOption showIcon={isAuth} icon={ <FaHeart /> } name="Wish List" optionClick={() => {console.log('sadfsadf')}}/>
          <HeaderOption showIcon={isAuth} icon={ <FaSignOutAlt /> } name="Sign Out" optionClick={() => {console.log('sadfsadf')}}/>
          <HeaderOption showIcon={!isAuth} icon={ <FaSignInAlt /> } name="Sign In" optionClick={ showAuthModel }/>
        </div>
      </div>
      <SearchBar icon={ <FaSearch /> } showSearch={isSearchOpen}/>
    </div>
  );
}

export default Header;