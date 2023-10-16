import React from 'react'

const Card = ({ note, onDelete, onMove }) => {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h3 className='note-item__title'>{note.title}</h3>
        <p className='note-item__date'>
          {Intl.DateTimeFormat('id', { dateStyle: 'full' }).format(new Date(note.createdAt))}
        </p>
        <p className='note-item__body'>{note.body}</p>
      </div>
      <div className='note-item__action'>
        <button className='note-item__delete-button' onClick={() => onDelete(note)}>
          Delete
        </button>
        <button className='note-item__archive-button' onClick={() => onMove(note)}>
          {note.archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
      </div>
    </div>
  )
}

export default Card
