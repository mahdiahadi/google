import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Menu, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import { Settings } from '@mui/icons-material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';
import DesktopMenu from './DesktopMenu';
import QuickSetting from './QuickSetting';
import { newsFilteringData } from '../assets/data/newsFilteringData';
import { Link } from 'react-router-dom';
const Navbar = ({setSearchTerm,searchTerm}) => {
      //desktoop quick setting
  const [quickSetting,setQuickSetting] = useState(false)
  // desktop menu
  const [desktopMenu,setDesktopMenu]=useState(false)
  const [searchHover,setSearchHover] = useState(false);
    const theme = useTheme()
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'))
      //menue active
  const [activeMenu,setActiveMenu]=useState(1);
  const activeMenuHandle = (id) => {
      setActiveMenu(id)
  }
  return (
    <>
     <Grid container spacing={2} alignContent="center" display="flex" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid display="flex" alignItems="center" justifyContent="space-between" height="100%" item xs={12} md={2}>
          {
            isMobileOrTablet ?
            <>
              <Button size='small'  ><FormatListBulletedIcon/></Button>
              <Typography fontWeight="bold" fontSize={24} color="goldenrod">Goooogle</Typography>
              <Button size='small' variant='contained'>Signin</Button>  
            </>
            :
            <Typography fontWeight="bold" fontSize={24} color="goldenrod">Goooogle</Typography> 
          }
        </Grid>
        <Grid item xs={12} md={10} alignItems="center" justifyContent="space-between" display="flex"> 
          {
            !isMobileOrTablet ? 
            <>
            <SearchBar searchHover={searchHover} setSearchHover={setSearchHover} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <Grid position="realtive">
            <Button sx={{padding:'0'}} onClick={()=>setQuickSetting(!quickSetting)} size='small'><Settings/></Button>
            <Button sx={{padding:'0'}} onClick={()=>setDesktopMenu(!desktopMenu)} size='small'><AppsIcon/></Button>
            <Button size='small' variant='contained'>Signin</Button>
            { quickSetting && <QuickSetting quickSetting={quickSetting} setQuickSetting={setQuickSetting} />}
            { desktopMenu && <DesktopMenu desktopMenu={desktopMenu} setDesktopMenu={setDesktopMenu}/>}
            </Grid>
            </>
            :
            <SearchBar searchHover={searchHover} setSearchHover={setSearchHover} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            
          }
        </Grid>
      </Grid>
      <Grid sx={{borderBottom:'1px solid rgba(0, 0, 0, 0.2)'}}>
        <Grid container spacing={2} alignContent="center" display="flex" >
            <Grid  item xs={12}>
                {newsFilteringData?.map((item,index)=> ( 
                <Link key={item.id} to={`/search/${item.title}?q=${encodeURIComponent(searchTerm)}`}> <Button onClick={()=>activeMenuHandle(item.id)}  sx={{color: activeMenu === item.id &&'black',marginTop:'1rem',marginRight:'1rem',fontSize:'.7rem'}} >{item.icon}{item.title}</Button></Link>  
                ))}
            </Grid>
        </Grid>
      </Grid>
    </>
  
  )
}

export default Navbar