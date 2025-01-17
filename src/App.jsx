import { useState,useEffect } from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import { use } from 'react';

function App() {
  const localDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false
  const [darkMode, setDarkMode] = useState(localDarkMode);
  useEffect(() => {
    if(localDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },[])

  return (
    <div className="wrapper h-screen container mx-auto px-4 dark:text-slate-100">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <MainContent/>
      <Footer />
    </div>
  )
}

export default App
