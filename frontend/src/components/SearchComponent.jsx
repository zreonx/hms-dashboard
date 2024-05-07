import { useState } from "react";
import { MdClear } from "react-icons/md";
const SearchComponent = ({ searchText, setSearchText }) => {
  const clearText = () => {
    setSearchText("");
  };
  return (
    <div className='relative'>
      <input
        className='focus:outline-none pl-3 pr-8 py-2 border-1 rounded-lg text-sm'
        id='search'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type='text'
        placeholder='Search'
        aria-label='Search Input'
      />
      {searchText && (
        <button
          onClick={clearText}
          className='absolute right-3 top-3 text-lg text-slate-400 hover:text-slate-500'
          type='button'
        >
          <MdClear />
        </button>
      )}
    </div>
  );
};

export default SearchComponent;
