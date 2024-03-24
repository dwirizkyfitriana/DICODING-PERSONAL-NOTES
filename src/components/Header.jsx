import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { MdOutlineLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/useUserContext'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const user = useUserContext()

  const logout = () => {
    localStorage.clear()
    location.reload()
  }

  return (
    <div className='note-app__header'>
      <Link to='/'>
        <h1>{user.name}'s Personal Notes</h1>
      </Link>
      <div className='header-right'>
        <Link className='add-btn' to='/new'>
          <FaPlusCircle />
          Tambah Note
        </Link>
        <Link to='/archived'>
          <h1>Arsip</h1>
        </Link>
        <ThemeToggle />
        <MdOutlineLogout role='button' size={30} onClick={logout} />
      </div>
    </div>
  )
}

export default Header
