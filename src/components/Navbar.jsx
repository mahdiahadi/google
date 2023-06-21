import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, FormControl, Grid, IconButton, InputLabel, Menu, MenuItem, Select, Stack, Tab, Tabs, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import { Label, Settings } from '@mui/icons-material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';
import DesktopMenu from './DesktopMenu';
import QuickSetting from './QuickSetting';
import { newsFilteringData } from '../assets/data/newsFilteringData';
import { Link } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';
import { Carousel } from 'react-responsive-carousel';
import { useGetEventsQuery } from '../redux/services/OverallEventViewApi';
const Navbar = ({setSearchTerm,searchTerm,showTools, setShowTools}) => {
  const {data:getEvents}=useGetEventsQuery()
      //desktoop quick setting
  const [quickSetting,setQuickSetting] = useState(false)
  //mobileMenu
  const [mobileMenu,setMobileMenu]=useState(false);
  // desktop menu
  const [desktopMenu,setDesktopMenu]=useState(false)
  const [searchHover,setSearchHover] = useState(false);
    const theme = useTheme()
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
      //menue active
  const [activeMenu,setActiveMenu]=useState(1);
  const [selectedText, setSelectedText] = useState('All')
  const activeMenuHandle = (item) => {
    setActiveMenu(item.id);
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
                  { mobileMenu && <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>}
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
      <Grid item xs={12} md={10} alignItems="center" mx={isMobileOrTablet && '80px'} justifyContent={isMobileOrTablet ? 'flex-start' : 'space-around'} display="flex"> 
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
        <Grid container  alignContent="center" display="flex" >
            <Grid  item xs={12}>
              {
                isMobile ? 
                  <Carousel
                     showThumbs={false}
                     showIndicators={false} // Hide the dots
                     infiniteLoop={false}
                     autoPlay={false}
                     interval={3000}
                     showArrows={false}
                     showStatus={false}
                     swipeable={true}
                     centerMode={true}
                     centerSlidePercentage={25}
                     emulateTouch={true}
                     transitionTime={500}
                     slidesToShow={3}
                     slidesToScroll={1}   
                  >
                       { 
                        getEvents?.search_information?.search_tabs ?
                        getEvents?.search_information?.search_tabs?.map((item,index) => (
                          <Link key={item.id} to={`/search/${item.title}?q=${encodeURIComponent(searchTerm)}`}> <Button onClick={()=>activeMenuHandle(item)}  sx={{color: activeMenu === item.id &&'black',marginTop:'1rem',marginRight:'1rem',fontSize:'.7rem'}} >{item.icon}{item.text}</Button></Link>                      
                      ))
                      :
                      newsFilteringData?.map((item,index)=> ( 
                        <Link key={item.id} to={`/search/${item.title}?q=${encodeURIComponent(searchTerm)}`}> <Button onClick={()=>activeMenuHandle(item)}  sx={{color: activeMenu === item.id &&'black',marginTop:'1rem',marginRight:'1rem',fontSize:'.7rem'}} >{item.icon}{item.title}</Button></Link>  
                        ))
                     }
                  </Carousel>
                :
                
                <Grid display="flex" justifyContent="space-between" alignContent="center" >
                    <Box>
                    { 
                        getEvents?.search_information?.search_tabs ?
                        getEvents?.search_information?.search_tabs?.map((item,index) => (
                          <Link key={item.id} to={`/search/${item.title}?q=${encodeURIComponent(searchTerm)}`}> <Button onClick={()=>activeMenuHandle(item)}  sx={{color: activeMenu === item.id &&'black',marginTop:'1rem',marginRight:'1rem',fontSize:'.7rem'}} >{item.icon}{item.text}</Button></Link>                      
                      ))
                      :
                             newsFilteringData?.map((item,index)=> ( 
                                <Link key={item.id} to={`/search/${item.title}?q=${encodeURIComponent(searchTerm)}`}> <Button onClick={()=>activeMenuHandle(item)}  sx={{color: activeMenu === item.id &&'black', borderBottom: activeMenu === item.id &&'2px solid #1976d2 ',marginTop:'1.2rem',marginRight:'1rem',fontSize:'.7rem',borderRadius:'0'}}>{item.icon}{item.title}</Button></Link>  
                                ))
                     }
                    </Box>
                    {
                      !isMobileOrTablet && 
                      <Box display="flex" alignItems="center" >
                      <FormControl  variant='standard'   sx={{ width:'90px',mt:'10px',mr:'10px'}}>
                      <InputLabel id="simple-select-label">All filters</InputLabel>
                        <Select
                             labelId="simple-select-label"
                             id="simple-select"      
                             sx={{fontSize:'.8rem'}} value={selectedText}
                             onChange={(ev)=>setSelectedText(ev.target.value)}
                            
                        >
                          {
                            newsFilteringData?.map((item,index)=> ( 
                              <MenuItem
                              key={item.id}
                              sx={{fontSize:'.8rem'}} value={item.title}
                              onClick={()=>activeMenuHandle(item)}    
                              >
                              <Link  style={{color: activeMenu === item.id &&'black',fontSize:'.8rem',borderRadius:'0'}}  to={`/search/${item.title}?q=${encodeURIComponent(searchTerm)}`}> 
                                {item.title}
                              </Link>  
                              </MenuItem>
                              ))
                          }
                        </Select>
                      </FormControl>
                        <Button onClick={()=>setShowTools(!showTools)} sx={{color:'rgba(0, 0, 0, 0.6)',mt:'20px',borderLeft:'1px solid rgba(0, 0, 0, 0.4)',py:'0', height:'30px', borderRadius:'0',backgroundColor: showTools && 'rgba(0, 0, 0, 0.1)' }} size='small' >
                          Tolls
                        </Button>
                        {
                          showTools && 
                          <Box position="relative" display="flex" alignContent="center" sx={{transition: showTools && 'all 3s ease-in-out'}} >

                          <FormControl  variant='standard'   sx={{ width:'90px',mt:'25px',mr:'10px',position:'absolute', left:'-120px',top:'20px'}}>
                        
                            <Select
                                 labelId="simple-select-label"
                                 id="simple-select"      
                                 label='name'
                                 sx={{fontSize:'.8rem'}}
                               defaultValue='Any time'
                            >
                               <MenuItem  sx={{fontSize:'.8rem'}} value="Any time">
                                  Any time
                                </MenuItem>
                                <MenuItem sx={{fontSize:'.8rem'}} value="Past hour">Past hour</MenuItem>
                                <MenuItem sx={{fontSize:'.8rem'}} value="Past 24 hours">Past 24 hours</MenuItem>
                                <MenuItem sx={{fontSize:'.8rem'}} value="Past week">Past week</MenuItem>
                                <MenuItem sx={{fontSize:'.8rem'}} value="Past month">Past month</MenuItem>
                                <MenuItem sx={{fontSize:'.8rem'}} value="Past year">Past year</MenuItem>
                                <MenuItem sx={{fontSize:'.8rem'}} value="Custom range">Custom range ...</MenuItem>   
                            </Select>
                          </FormControl>
                          <FormControl  variant='standard'   sx={{ width:'100px',mt:'25px',mr:'10px',position:'absolute',left:'0px',top:'20px' }}>
                         
                        <Select
                             labelId="label"
                             id="simple-select"      
                              sx={{fontSize:'.8rem'}}
                              defaultValue="All results"
                        >
                                <MenuItem sx={{fontSize:'.8rem'}} value="All results">All results</MenuItem>
                                <MenuItem sx={{fontSize:'.8rem'}} value="Verbatim">Verbatim</MenuItem>   
                         </Select>
                      </FormControl>
                                </Box>
                        }
                        <Button sx={{color:'rgba(0, 0, 0, 0.6)',mt:'20px',py:'0', height:'30px', borderRadius:'0'}} size='small' >
                        SafeSearch on
                        </Button>
                    </Box>
                    }
                </Grid>
              }
            </Grid>
        </Grid>
     </Grid>

    </>
  
  )
}

export default Navbar