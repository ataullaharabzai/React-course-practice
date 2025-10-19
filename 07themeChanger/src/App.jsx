import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/themeContext'
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';

function App() {

  const [defaultTheme, setDefaultTheme] = useState('light');

  const lightMode = () => {
    setDefaultTheme("light")
  }

  const darkMode = () => {
    setDefaultTheme("dark")
  }

  return (
    <ThemeProvider value={{ defaultTheme, lightMode, darkMode }}>
      <div className={defaultTheme === 'light' ? 'light' : 'dark'}>
        <Card />
        <ThemeBtn />
      </div>
    </ThemeProvider>
  )
}

export default App
