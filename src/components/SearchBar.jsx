import { IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Clear, ClearAll, Padding, Search as SearchIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
const SearchBar = ({searchTerm,setSearchTerm,onSearch,setSearchHover,searchHover}) => {
const [defaultValue,setDefaultValue]=useState('bitcoin')
  const navigate = useNavigate()
    const handleSearch = (e) => {
      setSearchTerm(defaultValue)
    }
    useEffect(()=> {
      console.log('query:' , searchTerm)
      if( searchTerm.trim() !== '' ){
        const searchUrl = `/search/All?q=${encodeURIComponent(searchTerm)}`
        navigate(searchUrl,{ replace:true})
      } else if (searchTerm.trim() === '' ){
        navigate('/')
      }
    },[searchTerm])

  return (
    <TextField
    onFocus={()=>setSearchHover(true)}
    onBlur={()=>setSearchHover(false)}
      style={{ 
        minWidth:"200px",
        width:`${!searchHover ? '25%' : '70%'}`,
        transition: 'width 0.3s ease-in-out'
      }}
    value={defaultValue}
    onChange={(e)=>setDefaultValue(e.target.value)}
    size="small"
    placeholder="search..."
    variant="outlined"
    InputProps={{
      style: {
        padding: 0,
      },
      startAdornment: (
        <InputAdornment position="start">
          <IconButton onClick={()=>handleSearch()}>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
          {searchTerm && (
            <IconButton onClick={() => setDefaultValue('')}>
              <Clear />
            </IconButton>
          )}
        </InputAdornment>
      ),
    }}
  />
        
  )
}

export default SearchBar