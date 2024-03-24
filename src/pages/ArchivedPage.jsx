import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import List from '../components/List'
import Search from '../components/Search'
import useArchivedNotes from '../queries/useArchivedNotes'
import useUnarchiveNote from '../queries/useUnarchiveNote'
import useDeleteNote from '../queries/useDeleteNote'

const ArchivedPage = () => {
  const { data: notes } = useArchivedNotes()
  const { mutate: unarchiveNote } = useUnarchiveNote()
  const { mutate: deleteNote } = useDeleteNote()

  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')

  const [search, setSearch] = useState(keyword || '')

  const computedNotes = search
    ? notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
    : notes

  const onSearch = (text) => {
    setSearch(text)
    setSearchParams({ keyword: text })
  }

  const onDelete = (note) => {
    deleteNote(note.id)
  }

  const onMove = (note) => {
    unarchiveNote(note.id)
  }

  return (
    <div className='note-app__body'>
      <Search keyword={search} onChange={onSearch} />

      <List title='Arsip' list={computedNotes} onDelete={onDelete} onMove={onMove} />
    </div>
  )
}

export default ArchivedPage
