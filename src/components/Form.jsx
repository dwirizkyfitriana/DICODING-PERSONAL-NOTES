import parser from 'html-react-parser'
import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'

const Form = ({ handleSubmit }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const bodyRef = useRef(null)

  const TITLE_LENGTH_LIMIT = 50
  const remainingTitle = TITLE_LENGTH_LIMIT - title.length

  const onChangeTitle = (event) => {
    const value = event.target.value
    if (value.length > TITLE_LENGTH_LIMIT) return

    setTitle(value)
  }

  const onChangeBody = (event) => {
    setBody(parser(event.target.innerHTML))
  }

  const onSubmit = (event) => {
    event.preventDefault()

    handleSubmit({ title, body })

    setTitle('')
    setBody('')
  }

  return (
    <div className='note-input'>
      <h2>Buat catatan</h2>
      <form onSubmit={onSubmit}>
        <p className='note-input__title__char-limit'>Sisa karakter: {remainingTitle}</p>
        <input
          className='note-input__title'
          type='text'
          placeholder='Ini adalah judul ...'
          required
          value={title}
          onChange={onChangeTitle}
        />
        <div
          ref={bodyRef}
          className='note-input__body'
          data-placeholder='Tuliskan catatanmu di sini ...'
          contentEditable
          onInput={onChangeBody}
        ></div>
        <button type='submit'>Buat</button>
      </form>
    </div>
  )
}

Form.propType = {
  handleSubmit: PropTypes.func.isRequired
}

export default Form
