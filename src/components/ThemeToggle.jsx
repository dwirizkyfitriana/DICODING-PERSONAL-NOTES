import React from 'react'
import { useTheme } from '../context/useThemeContext'
import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div
      role='button'
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {theme === 'dark' ? <MdLightMode size={30} /> : <MdOutlineDarkMode size={30} />}
    </div>
  )
}

export default ThemeToggle
