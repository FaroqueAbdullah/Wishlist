function SearchBar({ showSearch, icon }) {
  return (
    <>
      { 
        showSearch && 
        <div className="w-full flex justify-center">
          <div className="flex justify-center items-center w-full tablet:w-4/6 mt-3 text-gray-secondary">
            <input type='text' className="w-5/6 border-2 border-gray-secondary rounded-md mr-2 p-1" />
            <div className="">{ icon }</div>
          </div>
        </div>
      }
    </>
  );
}

export default SearchBar;