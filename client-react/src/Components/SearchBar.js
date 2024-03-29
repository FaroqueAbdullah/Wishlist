import  { useState } from 'react';

function SearchBar({ showSearch, icon, searchInputSet }) {
  const [searchInput, setSearchInput] = useState('');
  return (
    <>
      { 
        showSearch && 
        <div className="w-full flex justify-center">
          <div className="flex justify-center items-center w-full text-gray-secondary">
            <input onChange={(event) => setSearchInput(event.target.value)} type='text' className="w-5/6 border-2 border-gray-secondary rounded-md mr-2 p-1" />
            <div className="cursor-pointer" onClick={() => searchInputSet(searchInput)}>{ icon }</div>
          </div>
        </div>
      }
    </>
  );
}

export default SearchBar;