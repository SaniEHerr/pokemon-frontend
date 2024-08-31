import React from 'react'

const Searchbar = ({ handleSearch, searchTerm }) => {
  return (
    <div className='text-black font-bold'>
      <input
        type='text'
        placeholder='SEARCH POKEMON'
        className='bg-white border-[3px] border-black rounded text-black truncate px-3 py-2 w-[170px] xs:w-[200px] 1xs:w-[258px] 1xs:text-clip sm:w-[265px] sm:p-3 sm:px-4'
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default Searchbar