import { FaSignInAlt, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className="w-full flex justify-between">
      <div className="font-bold text-gray-primary text-2xl">Wish<span>List</span></div>
      <div className="font-bold flex justify-center items-center">
        <div className="flex justify-center items-center text-gray-secondary pr-3">
          <FaSearch className="text-green-primary text-lg" />
          <span className="text-green-primary text-xs pl-1">Search</span>
        </div>
        <div className="flex justify-center items-center text-gray-secondary">
          <FaSignInAlt className="text-green-primary text-lg" />
          <span className="text-green-primary text-xs pl-1">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default Header;