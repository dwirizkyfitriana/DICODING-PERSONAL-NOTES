import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import List from '../components/List'
import Search from '../components/Search'
import useArchiveNote from '../queries/useArchiveNote'
import useDeleteNote from '../queries/useDeleteNote'
import useNotes from '../queries/useNotes'

const HomePage = () => {
  const { data: notes } = useNotes()
  const { mutate: archiveNote } = useArchiveNote()
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
    archiveNote(note.id)
  }

  return (
    <>
      <div className='note-app__body'>
        <Search keyword={search} onChange={onSearch} />

        <List title='Catatan Aktif' list={computedNotes} onDelete={onDelete} onMove={onMove} />
      </div>
    </>
  )
}

export default HomePage
