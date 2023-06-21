import { Close, Contrast, ExitToApp, ExpandLess, ExpandMore, LocalActivity, Lock, Search, Support } from '@mui/icons-material'
import { Button, Card, Collapse, FormControl, FormControlLabel, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Modal, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const MobileMenu = ({mobileMenu,setMobileMenu}) => {
    const [open,setOpen]=useState(null)
  
    const handleClick = (id) => {
       setOpen( open === id ? null : id)
    }
  return (
    <Grid>
        <Modal 
            open={mobileMenu}
            onClose={()=> setMobileMenu(false)}
        >
           <Grid item xs={12} zIndex={9999999} bgcolor='background.paper' position="absolute" left='0' top="0" height="0" sx={{ width: mobileMenu ? '300px' : '0' , height: mobileMenu && '100vh' }}>
        <Grid borderBottom='1px solid rgba(0, 0, 0, 0.2)'>
        <Grid m={2}   className='quickSetting'>
          <Grid container item xs={12} display="flex" justifyContent="center" alignContent="center">
              <Typography variant='h5'> Setting</Typography>
           
          </Grid>
          <Grid mt={3} display="flex" alignContent="center" justifyContent="center">
            <Button sx={{ paddingX:'3rem',border:'1px solid rgba(0, 0, 0, 0.2)'}} variant='outlined'>See all Search setting</Button>
          </Grid>
      </Grid>
        </Grid>
          <Grid borderBottom="1px solid rgba(0, 0, 0, 0.2)">
            <Grid m={1} className='yourActivity'>
                <List component="nav">
                    <ListItemButton onClick={()=>handleClick(1)}>
                        <ListItemIcon>
                            <LocalActivity/>
                        </ListItemIcon>
                        <ListItemText>
                            <Typography  variant='h5' fontSize={20}>Your Activity</Typography>
                        </ListItemText>
                        {open === 1 ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={open === 1}>
                        <List component="div">
                             <Link>
                             <Grid  display="flex" justifyContent="space-between" alignContent="center">
                                 <Typography color="rgba(0, 0, 0, 0.7)">Search Customisation</Typography>
                                 <Typography variant='body2' color='rgba(0, 0, 0, 0.6)' display="flex" alignItems='center'>On &nbsp;</Typography>
                             </Grid>
                             </Link>
                             <Grid mt={1}>
                               <Typography variant='body2' fontSize={12} >
                                 <Link>Learn more about your data in Search</Link>
                               </Typography>
                             </Grid>               
                        </List>
                    </Collapse>
                 
                </List>
            </Grid>
          </Grid>
          <Grid borderBottom="1px solid rgba(0, 0, 0, 0.2)">
              <Grid m={1} className='usingSearch'> 
              <ListItemButton onClick={()=>handleClick(2)}>
                        <ListItemIcon>
                            <Search/>
                        </ListItemIcon>
                        <ListItemText>
                        <Typography variant='h5' fontSize={20}>Using Search</Typography>
                        </ListItemText>
                        {open ===2 ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={open ===2}>
                        <List component="div">
                        <Grid mt={3} display="flex" justifyContent="space-between" alignContent="center">
                    <Grid >
                      <Typography color="rgba(0, 0, 0, 0.7)">SafeSearch</Typography>
                      <Typography variant='body2' fontSize={12}><Link>Learn more about SafeSearch</Link></Typography>
                    </Grid>
                    <Grid display="flex" alignItems='center'><Typography variant='body2' color='rgba(0, 0, 0, 0.7)' display="flex" alignItems='center' >locked on &nbsp;<Lock/></Typography></Grid>
                  </Grid>
                  <Link >
                    <Grid mt={3} display="flex" justifyContent="space-between">
                        <Typography color="rgba(0, 0, 0, 0.7)">Languages</Typography>
                        <Typography color="rgba(0, 0, 0, 0.7)">English</Typography>
                    </Grid>
                  </Link>         
                        </List>
                    </Collapse>

              </Grid>
          </Grid>
      <Grid borderBottom="1px solid rgba(0, 0, 0, 0.2)">
        <Grid m={1} className='appearance'>
        <ListItemButton onClick={()=>handleClick(3)}>
                        <ListItemIcon>
                            <Contrast/>
                        </ListItemIcon>
                        <ListItemText>
                        <Typography variant='h5' fontSize={20}>Appearance</Typography>
                        </ListItemText>
                        {open ===3 ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={open ===3}>
                        <List component="div">
                        <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
             <Grid container mt={2} >
             <Grid container display="flex" alignItems="center" justifyContent="space-between">
             <FormControlLabel value="female" control={<Radio />} label="Light theme" sx={{color:'rgba(0, 0, 0, 0.7)'}} />
             <img src="https://www.gstatic.com/ui/v1/menu/light_thumbnail2.png" alt='light-theme'/>
             </Grid>
             <Grid mt={1} container  display="flex" alignItems="center" justifyContent="space-between">
              <FormControlLabel value="male" control={<Radio />} label="Dark theme" sx={{color:'rgba(0, 0, 0, 0.7)'}}  />
              <img src="https://www.gstatic.com/ui/v1/menu/dark_thumbnail2.png" alt='dark-them' />
             </Grid>
             <Grid mt={1} container  display="flex" alignItems="center" justifyContent="space-between">
              <FormControlLabel value="other" control={<Radio />} label="Device default" sx={{color:'rgba(0, 0, 0, 0.7)'}}  />
              <img src="https://www.gstatic.com/ui/v1/menu/device_default_thumbnail2.png" alt="default-theme"/>
             </Grid>
             </Grid>
            </RadioGroup>
          </FormControl>
                  <Link >
                    <Grid mt={3} display="flex" justifyContent="space-between">
                        <Typography color="rgba(0, 0, 0, 0.7)">Languages</Typography>
                        <Typography color="rgba(0, 0, 0, 0.7)">English</Typography>
                    </Grid>
                  </Link>         
                        </List>
                    </Collapse>
        </Grid>
      </Grid>

      <Grid m={1}  className='support'>
        <List component="nav">
        <ListItemButton onClick={()=>handleClick(4)}>
                        <ListItemIcon>
                            <Support/>
                        </ListItemIcon>
                        <ListItemText>
                        <Typography variant='h5' fontSize={20}>Appearance</Typography>
                        </ListItemText>
                        {open ===3 ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
            <Collapse in={ open === 4}>
                <List component="div">

            <Link>
                <Grid mt={1} display="flex" justifyContent="space-between" alignContent="center">
                    <Typography color="rgba(0, 0, 0, 0.7)">Search help</Typography>
                    <Typography variant='body2' color='rgba(0, 0, 0, 0.6)' display="flex" alignItems='center'><ExitToApp/></Typography>
                </Grid>
            </Link>
                </List>
            </Collapse>
        </List>
      </Grid>
    </Grid>
        </Modal>
    </Grid>
  )
}
