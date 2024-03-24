import PropTypes from 'prop-types'
import React from 'react'

const NotFoundNote = ({ text }) => {
  return (
    <div className='note-app__body'>
      <h1 style={{ textAlign: 'center' }}>{text}</h1>
    </div>
  )
}

NotFoundNote.propType = {
  text: PropTypes.string.isRequired
}

export default NotFoundNote
