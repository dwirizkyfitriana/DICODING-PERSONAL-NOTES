import parser from 'html-react-parser'
import React from 'react'
import { MdArchive, MdDelete, MdUnarchive } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import NotFoundNote from '../components/NotFoundNote'
import useArchiveNote from '../queries/useArchiveNote'
import useDeleteNote from '../queries/useDeleteNote'
import useNote from '../queries/useNote'
import useUnarchiveNote from '../queries/useUnarchiveNote'

const DetailPage = () => {
  const { noteId } = useParams()
  const navigate = useNavigate()

  const { mutate: archiveNote } = useArchiveNote()
  const { mutate: unarchiveNote } = useUnarchiveNote()
  const { mutate: deleteNote } = useDeleteNote()

  if (!noteId) return <h1>Catatan tidak ditemukan</h1>

  const { data: note } = useNote(noteId)
  if (!note) return <NotFoundNote text='Catatan tidak ditemukan' />

  const handleArchive = () => {
    if (note.archived) unarchiveNote(noteId)
    else archiveNote(noteId)

    navigate(note.archived ? '/' : '/archived')
  }

  const handleDelete = () => {
    deleteNote(noteId)

    navigate(note.archived ? '/archived' : '/')
  }

  return (
    <div className='note-app__body'>
      <div className='detail-wrapper'>
        <div>
          <h1 className='detail-title'>{note.title}</h1>
          <p className='detail-date'>
            {Intl.DateTimeFormat('id', { dateStyle: 'full' }).format(new Date(note.createdAt))}
          </p>
        </div>
        <p className='detail-body'>{parser(note.body)}</p>
      </div>

      <div className='detail-actions'>
        <div onClick={handleArchive}>{note.archived ? <MdUnarchive /> : <MdArchive />}</div>
        <div onClick={handleDelete}>
          <MdDelete />
        </div>
      </div>
    </div>
  )
}

export default DetailPage
