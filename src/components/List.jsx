import React from 'react'
import Card from './Card'

const List = ({ title, list, onDelete, onMove }) => {
  return (
    <>
      <h2>{title}</h2>
      {list.length > 0 ? (
        <div className='notes-list'>
          {list.map(item => (
            <Card key={item.id} note={item} onDelete={onDelete} onMove={onMove} />
          ))}
        </div>
      ) : (
        <p className='notes-list__empty-message'>Tidak ada catatan</p>
      )}
    </>
  )
}

export default List
