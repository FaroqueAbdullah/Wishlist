function HeaderOption({ icon, name, showIcon=true, optionClick, wishlistCount= 0 }) {

  return (
    <>
      { 
        showIcon && 
        <div className="flex relative justify-center items-center text-gray-secondary hover:text-gray-primary text-2xl pr-3 cursor-pointer" onClick={optionClick}>
          {icon}
          <span className="text-xs pl-1 hidden tablet:block whitespace-nowrap">{ name }</span>
          {
            wishlistCount > 0 && <span className="text-xs text-red-primary absolute top-3 left-5"> { wishlistCount } </span>
          }
          
        </div>
      }
    </>
  );
}

export default HeaderOption;