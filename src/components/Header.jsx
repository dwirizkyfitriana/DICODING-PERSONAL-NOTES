import React, { useState } from 'react'

const Header = ({ handleSearch }) => {
  const [search, setSearch] = useState('')

  const onSearch = event => {
    setSearch(event.target.value)
    handleSearch(event.target.value)
  }

  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <div className='note-search'>
        <input type='text' placeholder='Cari catatan ...' value={search} onChange={onSearch} />
      </div>
    </div>
  )
}

export default Header
