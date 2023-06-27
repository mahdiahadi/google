import React, { useState } from 'react'
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
function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm,setSearchTerm] =useState('bitcoin')
  const [showTools,setShowTools]=useState(false)
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift()
}
const [theme,setTheme]=useState(
    getCookie('theme') || 'light'
)
  return (
    <Container data-theme={theme} >
      <Navbar setShowTools={setShowTools} showTools={showTools} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Routes>
        <Route path="/" element={<Navigate to={`/search/All?q=${encodeURIComponent(searchTerm)}`}/>} />
        <Route path="/search/All" element={<OverallEventView showTools={showTools} searchTerm={searchTerm}/> }  />
        <Route path="/search/Images" element={<Images searchTerm={searchTerm} />} />
        <Route path="/search/News" element={<News showTools={showTools} setCurrentPage={setCurrentPage} currentPage={currentPage} searchTerm={searchTerm} />} />
        <Route path="/search/Videos" element={<Videos showTools={showTools} searchTerm={searchTerm} setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
        <Route path="/search/More" element={<More showTools={showTools} />} />
      </Routes>
    </Container>
  )
}

export default App
