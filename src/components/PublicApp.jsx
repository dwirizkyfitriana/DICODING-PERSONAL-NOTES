import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ThemeToggle from './ThemeToggle'

const PublicApp = () => {
  return (
    <>
      <div className='public-header'>
        <ThemeToggle />
      </div>
      <Routes>
        <Route path='/*' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default PublicApp
