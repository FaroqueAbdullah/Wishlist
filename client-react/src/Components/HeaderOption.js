function HeaderOption({ icon, name, showIcon=true, optionClick }) {
  return (
    <>
      { 
        showIcon && 
        <div className="flex justify-center items-center text-gray-secondary text-lg pr-3 cursor-pointer" onClick={optionClick}>
          {icon}
          <span className="text-xs pl-1 hidden tablet:block">{ name }</span>
        </div>
      }
    </>
  );
}

export default HeaderOption;