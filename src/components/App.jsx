import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import List from './List'
import { getInitialData } from '../utils'

const App = () => {
  const [notes, setNotes] = useState(getInitialData())
  const [search, setSearch] = useState('')

  const computedNotes = search
    ? notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()))
    : notes

  const onSearch = text => setSearch(text)

  const onAddNotes = note => setNotes(prev => [...prev, note])

  const onDelete = note => setNotes(prev => prev.filter(item => item.id !== note.id))

  const onMove = note =>
    setNotes(prev =>
      prev.map(item => (item.id === note.id ? { ...item, archived: !item.archived } : item))
    )

  return (
    <>
      <Header handleSearch={onSearch} />
      <div className='note-app__body'>
        <Form handleSubmit={onAddNotes} />
        <List
          title='Catatan Aktif'
          list={computedNotes.filter(note => !note.archived)}
          onDelete={onDelete}
          onMove={onMove}
        />
        <List
          title='Arsip'
          list={computedNotes.filter(note => note.archived)}
          onDelete={onDelete}
          onMove={onMove}
        />
      </div>
    </>
  )
}

export default App
