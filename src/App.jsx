
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Section/Hero'
import Skills from './Section/Skills'

const themeOptions = ['light', 'dark', 'blue']

const getSavedTheme = () => {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return themeOptions.includes(savedTheme) ? savedTheme : 'dark'
  } catch {
    return 'dark'
  }
}

function App() {
  const [theme, setTheme] = useState(getSavedTheme)

  useEffect(() => {
    try {
      window.localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The selected theme still works for this visit if storage is unavailable.
    }
  }, [theme])

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-(--page-bg) text-(--text-color) transition-colors duration-300"
    >
      <Navbar theme={theme} onThemeChange={setTheme} />
      <main>
        <Hero />
        <Skills />
      </main>
    </div>
  )
}

export default App
