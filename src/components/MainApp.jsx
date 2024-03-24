import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../context/useUserContext'
import ArchivedPage from '../pages/ArchivedPage'
import DetailPage from '../pages/DetailPage'
import FormPage from '../pages/FormPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import useUser from '../queries/useUser'
import Header from './Header'

const MainApp = () => {
  const { data: user, isPending, isError } = useUser()

  if (isPending) return null

  if (isError) {
    localStorage.clear()
    location.reload()
    return null
  }

  return (
    <UserContext.Provider value={user}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/archived' element={<ArchivedPage />} />
        <Route path='/new' element={<FormPage />} />
        <Route path='/notes/:noteId' element={<DetailPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default MainApp
