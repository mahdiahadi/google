import { IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { Clear, ClearAll, Padding, Search as SearchIcon } from '@mui/icons-material'
const SearchBar = ({searchTerm,setSearchTerm,onSearch,setSearchHover,searchHover}) => {

    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            e.preventDefault();
            handleSearch()
        }
    }
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
    const handleSearch = () => {
      // Perform search action using the searchQuery value
      console.log('Search query:', searchTerm);
    };
  return (
    <TextField
    onFocus={()=>setSearchHover(true)}
    onBlur={()=>setSearchHover(false)}
      style={{ 
        minWidth:"200px",
        width:`${!searchHover ? '25%' : '80%'}`,
        transition: 'width 0.3s ease-in-out'
      }}
    size="small"
    placeholder="search..."
    variant="outlined"
    value={searchTerm}
    onChange={handleChange}
    onKeyPress={handleKeyPress}
    InputProps={{
      style: {
        padding: 0,
      },
      startAdornment: (
        <InputAdornment position="start">
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
          {searchTerm && (
            <IconButton onClick={() => setSearchTerm('')}>
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