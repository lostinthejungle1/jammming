import React from 'react';

import './SearchBar.css'
function SearchBar({searchValue,handleChange,handleSearch}){

    return (
        <form>
            <input value={searchValue} onChange={handleChange} placeholder='Input song name here' type='text' />
            <button type='submit' onClick={handleSearch}>Search</button>
        </form>
    )
}

export default SearchBar;