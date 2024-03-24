import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './styles/style.css'
import TanstackProvider from './components/TanstackProvider'
import ThemeProvider from './context/useThemeContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <TanstackProvider>
        <App />
      </TanstackProvider>
    </BrowserRouter>
  </ThemeProvider>
)
