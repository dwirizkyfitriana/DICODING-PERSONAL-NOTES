import React from 'react'
import { creds } from '../utils/constants'
import MainApp from './MainApp'
import PublicApp from './PublicApp'

const App = () => {
  const token = localStorage.getItem(creds.ACCESS_TOKEN)

  if (!token) return <PublicApp />

  return <MainApp />
}

export default App
