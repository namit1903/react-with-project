import React from 'react'

function Search() {
  return (
    <div className="search">
        <form onSubmit={submitSearch}>
      <input  type="text" placeholder="hunt your stuff...." className='border-2 '></input>
      <button className={`btn btn-xs btn-secondary`}>hunt items</button>
      </form>
    </div>
  )
}

export default Search
