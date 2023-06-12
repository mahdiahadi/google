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
function App() {
  const [searchTerm,setSearchTerm] =useState('bitcoin')
  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Routes>
        <Route path="/" element={<Navigate to={`/search/All?q=${encodeURIComponent(searchTerm)}`}/>} />
        <Route path="/search/All" element={<OverallEventView searchTerm={searchTerm}/> }  />
        <Route path="/search/Images" element={<Images />} />
        <Route path="/search/News" element={<News />} />
        <Route path="/search/Videos" element={<Videos />} />
        <Route path="/search/More" element={<More />} />
      </Routes>
    </>
  )
}

export default App
