import React, { useState } from 'react'

const Form = ({ handleSubmit }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const TITLE_LENGTH_LIMIT = 50
  const remainingTitle = TITLE_LENGTH_LIMIT - title.length

  const onChangeTitle = event => {
    const value = event.target.value
    if (value.length > TITLE_LENGTH_LIMIT) return

    setTitle(value)
  }

  const onChangeBody = event => {
    setBody(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()

    const notes = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString()
    }

    handleSubmit(notes)

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
        <textarea
          className='note-input__body'
          type='text'
          placeholder='Tuliskan catatanmu di sini ...'
          value={body}
          required
          onChange={onChangeBody}></textarea>
        <button type='submit'>Buat</button>
      </form>
    </div>
  )
}

export default Form
