import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'
import { addNote } from '../utils'
import useCreateNote from '../queries/useCreateNote'

const FormPage = () => {
  const navigate = useNavigate()

  const { mutateAsync: createNote } = useCreateNote()

  const onAddNotes = async (note) => {
    await createNote(note)
    navigate('/')
  }

  return (
    <div className='note-app__body'>
      <Form handleSubmit={onAddNotes} />
    </div>
  )
}

export default FormPage
