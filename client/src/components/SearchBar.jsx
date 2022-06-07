import React from 'react'

function SearchBar({ placeholder, setSearchPhrase, performSearch }) {
  function setPhrase(event) {
    console.log('value', event.target.value) 
    console.log('event', event) 
    setSearchPhrase(event.target.value)
  }

  function onEnter (event) {
    if (event.key === 'Enter') {
      performSearch()
    }
  }

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' onChange={setPhrase} onKeyPress={onEnter} placeholder={placeholder}/>
        <div className='searchIcon'></div>
      </div>
      <div className='dataResult'></div>
    </div>
  )
}

export default SearchBar