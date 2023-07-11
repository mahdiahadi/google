import React, { useEffect, useState } from 'react'
import './App.css'
import OverallEventView from './components/overallEventView'
import { Outlet } from '@mui/icons-material'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import News from './components/News'
import Videos from './components/Videos'
import More from './components/More'
import Images from "./components/Images";
import { Container } from '@mui/material'
import './css/style.css'
function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm,setSearchTerm] =useState('bitcoin')
  const [showTools,setShowTools]=useState(false)
//   const getCookie = (name) => {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift()
// }
// const [theme,setTheme]=useState(
//     getCookie('theme') || 'light'
// )
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
 
  setDarkMode(prefersDarkMode);

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleChange = (e) => {
    setDarkMode(e.matches);
  };

  mediaQuery.addListener(handleChange);

  return () => {
    mediaQuery.removeListener(handleChange);
  };
}, []);

const handleDefaultTheme = () => {
  setDarkMode(prevTheme => !prevTheme);
};
  return (
    <div data-theme={darkMode ? 'dark' : 'light'}>
    <Container  id='main' maxWidth='2xl' sx={{minHeight:'100vh'}} >
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} handleDefaultTheme={handleDefaultTheme} setShowTools={setShowTools} showTools={showTools} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Routes>
        <Route path="/" element={<Navigate to={`/search/All?q=${encodeURIComponent(searchTerm)}`}/>} />
        <Route path="/search/All" element={<OverallEventView setCurrentPage={setCurrentPage} currentPage={currentPage} showTools={showTools} searchTerm={searchTerm}/> }  />
        <Route path="/search/Images" element={<Images searchTerm={searchTerm} />} />
        <Route path="/search/News" element={<News showTools={showTools} setCurrentPage={setCurrentPage} currentPage={currentPage} searchTerm={searchTerm} />} />
        <Route path="/search/Videos" element={<Videos showTools={showTools} searchTerm={searchTerm} setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
        <Route path="/search/More" element={<More showTools={showTools} />} />
      </Routes>
    </Container>
    </div>
  )
}

export default App
