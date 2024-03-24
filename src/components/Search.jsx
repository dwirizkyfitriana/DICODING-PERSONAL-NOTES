import PropTypes from 'prop-types'
import React from 'react'

const Search = ({ keyword, onChange }) => {
  return (
    <div className='note-search'>
      <input
        type='text'
        placeholder='Cari catatan ...'
        value={keyword}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

Search.propType = {
  keyword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Search
