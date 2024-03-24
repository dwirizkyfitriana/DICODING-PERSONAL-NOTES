import React, { createContext, useContext, useEffect, useState } from 'react'
import { creds } from '../utils/constants'

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {}
})

export const useTheme = () => {
  return useContext(ThemeContext)
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem(creds.THEME)
    console.log({ storedTheme })
    if (storedTheme) setTheme(storedTheme)
    document.body.classList.add(storedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme !== 'dark' ? 'dark' : 'light'

    setTheme(newTheme)

    document.body.classList.remove(theme)
    document.body.classList.add(newTheme)

    localStorage.setItem(creds.THEME, newTheme)
  }

  const contextValue = { theme, setTheme: toggleTheme }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
