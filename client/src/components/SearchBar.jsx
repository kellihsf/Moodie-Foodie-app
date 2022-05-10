import React from 'react'

function SearchBar({ placeholder, setSearchPhrase }) {
  function setPhrase(event) {
    console.log('value', event.target.value)
    setSearchPhrase(event.target.value)
  }

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' onChange={setPhrase} placeholder={placeholder}/>
        <div className='searchIcon'></div>
      </div>
      <div className='dataResult'></div>
    </div>
  )
}

export default SearchBar