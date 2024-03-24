import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='note-app__body not-found'>
      <h1>404</h1>
      <h2>Halaman Tidak Ditemukan</h2>
      <Link to='/' className='add-btn' role='button'>
        Kembali Ke Home
      </Link>
    </div>
  )
}

export default NotFoundPage
