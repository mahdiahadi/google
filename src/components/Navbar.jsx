import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Menu, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import { Settings } from '@mui/icons-material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';
import DesktopMenu from './DesktopMenu';
import QuickSetting from './QuickSetting';
import { newsFilteringData } from '../assets/data/newsFilteringData';
import { Link } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';
const Navbar = ({setSearchTerm,searchTerm}) => {
      //desktoop quick setting
  const [quickSetting,setQuickSetting] = useState(false)
  //mobileMenu
  const [mobileMenu,setMobileMenu]=useState(false);

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
  //scroll 
  const [scrollPosition,setScrollPosition]=useState(document.documentElement.scrollTop)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      setScrollPosition(document.documentElement.scrollTop)
    })
  },[])
  return (
    <>
   
    {
      scrollPosition <= 0 ?
          <Grid  sx={{py:1 ,width:'full' }} container item xs={12}  alignContent="center" display="flex">
            <Grid display="flex" alignItems="center" justifyContent="space-between" height="100%" item xs={12} md={2}>
              {
                isMobileOrTablet ?
                <>
                  { mobileMenu && <MobileMenu/>}
                  <Button size='small' onClick={()=>setMobileMenu(!mobileMenu)}  ><FormatListBulletedIcon/></Button>
                  <Typography fontWeight="bold" fontSize={24} color="goldenrod">Goooogle</Typography>
                  <Button size='small' variant='contained'>Signin</Button> 
                </>
                :
                <Typography fontWeight="bold" fontSize={24} color="goldenrod">Goooogle</Typography> 
              }
            </Grid>
            <Grid item xs={12} md={10} alignItems="center" mx={isMobileOrTablet && '20px'} justifyContent="space-between" display="flex"> 
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
   
      :

        <Grid  position='fixed' top={0} left={0} sx={{backgroundColor:'#fff', width:'full',zIndex:'999',py:1,boxShadow:'0 2px 4px 0 rgba(0,0,0,.2)',  transition: 'all 0.5s ease-out' }} container alignContent="center" display="flex">
      <Grid  display="flex" alignItems="center" justifyContent="space-around" height="100%" item xs={12} md={2}>
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
      <Grid item xs={12} md={10} alignItems="center" mx={isMobileOrTablet && '70px'} justifyContent={isMobileOrTablet ? 'flex-start' : 'space-around'} display="flex"> 
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

  
    }
  
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