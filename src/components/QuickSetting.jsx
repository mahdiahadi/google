import { Button, Container, FormControl, FormControlLabel, Grid, Modal, Radio, RadioGroup, ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react'
import { Settings as SettingsIcon, Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon, Close, Fullscreen, ExitToApp, Lock } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const QuickSetting = ({quickSetting,setQuickSetting,handleDefaultTheme,darkMode,setDarkMode}) => {
  const theme = createTheme({
    typography:{
          
      allVariants:{
        color: darkMode && '#bdc1c6'
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
     <Modal  
     
      open={quickSetting}
      onClose={()=>setQuickSetting(false)}
     >
    <Grid id='setting' item xs={12} zIndex={9999999}  bgcolor={ !darkMode ? 'background.paper' : '#212529'} overflow="hidden" position="absolute" right='0' top="0" height="0" sx={{ width: quickSetting ? '350px' : '0' , height: quickSetting && '100vh' }}>
        <Grid borderBottom= { !darkMode ? "1px solid rgba(0, 0, 0, 0.2)" : "1px solid #bdc1c6"}>
        <Grid m={2}   className='quickSetting'>
          <Grid container item xs={12} display="flex" justifyContent="space-between" alignContent="center">
              <Typography    variant='h5'>Quick Setting</Typography>
              <Button onClick={()=>setQuickSetting(false)} ><Close sx={{color: !darkMode ?'rgba(0, 0, 0, 0.6)' : '#bdc1c6'}} /></Button>
          </Grid>
          <Grid mt={3} display="flex" alignContent="center" justifyContent="center">
            <Button sx={{ paddingX:'3rem',border:!darkMode ? '1px solid rgba(0, 0, 0, 0.2)' :'1px solid #bdc1c6'}} variant='outlined'>See all Search setting</Button>
          </Grid>
      </Grid>
        </Grid>
          <Grid borderBottom= { !darkMode ? "1px solid rgba(0, 0, 0, 0.2)" : "1px solid #bdc1c6"}>
            <Grid m={2} className='yourActivity'>
                <Grid><Typography  variant='h5' fontSize={20}>Your Activity</Typography></Grid>
                <Link>
                <Grid mt={3} display="flex" justifyContent="space-between" alignContent="center">
                    <Typography color={ !darkMode ? 'rgba(0, 0, 0, 0.7)' : '#bdc1c6'} >Search Customisation</Typography>
                    <Typography variant='body2' color={ !darkMode ? 'rgba(0, 0, 0, 0.7)' : '#bdc1c6'}  display="flex" alignItems='center'>On &nbsp;<ExitToApp/></Typography>
                </Grid>
                </Link>
                <Grid mt={3}>
                  <Typography variant='body2' fontSize={12} >
                    <Link>Learn more about your data in Search</Link>
                  </Typography>
                </Grid>
            </Grid>
          </Grid>
          <Grid borderBottom= { !darkMode ? "1px solid rgba(0, 0, 0, 0.2)" : "1px solid #bdc1c6"}>
              <Grid m={2} className='usingSearch'> 
                  <Grid><Typography variant='h5' fontSize={20}>Using Search</Typography></Grid>
                  <Grid mt={3} display="flex" justifyContent="space-between" alignContent="center">
                    <Grid >
                      <Typography color={ !darkMode ? 'rgba(0, 0, 0, 0.7)' : '#bdc1c6'} >SafeSearch</Typography>
                      <Typography variant='body2' fontSize={12}><Link>Learn more about SafeSearch</Link></Typography>
                    </Grid>
                    <Grid display="flex" alignItems='center'><Typography variant='body2' color={ !darkMode ? 'rgba(0, 0, 0, 0.7)' : '#bdc1c6'}  display="flex" alignItems='center' >locked on &nbsp;<Lock/></Typography></Grid>
                  </Grid>
                  <Link >
                    <Grid mt={3} display="flex" justifyContent="space-between">
                        <Typography color={ !darkMode ? 'rgba(0, 0, 0, 0.7)' : '#bdc1c6'} >Languages</Typography>
                        <Typography color={ !darkMode ? 'rgba(0, 0, 0, 0.7)' : '#bdc1c6'} >English</Typography>
                    </Grid>
                  </Link>
                  <Grid mt={3} display="flex" justifyContent="space-between" alignContent="center">
                    <Typography color={ !darkMode ? 'rgba(0, 0, 0, 0.7)' : '#bdc1c6'} >Advanced Search</Typography>
                    <Typography variant='body2' color={ !darkMode ? 'rgba(0, 0, 0, 0.7)' : '#bdc1c6'} display="flex" alignItems='center'> &nbsp;<ExitToApp/></Typography>
                  </Grid>
              </Grid>
          </Grid>
      <Grid borderBottom= { !darkMode ? "1px solid rgba(0, 0, 0, 0.2)" : "1px solid #bdc1c6"}>
        <Grid m={2} className='appearance'>
          <Grid><Typography variant='h5' fontSize={20}>Appearance</Typography></Grid>
          <Grid >
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
             <Grid container mt={2} >
             <Grid container display="flex" alignItems="center" justifyContent="space-between">
             <FormControlLabel value="light" control={<Radio checked={!darkMode} onClick={()=>setDarkMode(false)} />} label="Light theme" sx={{color:'rgba(0, 0, 0, 0.7)'}} />
             <img src="https://www.gstatic.com/ui/v1/menu/light_thumbnail2.png" alt='light-theme'/>
             </Grid>
             <Grid mt={1} container  display="flex" alignItems="center" justifyContent="space-between">
              <FormControlLabel  value="dark" control={<Radio    checked={darkMode} onClick={() => setDarkMode(true)}/>}  label="Dark theme" sx={{color:'rgba(0, 0, 0, 0.7)'}}  />
              <img src="https://www.gstatic.com/ui/v1/menu/dark_thumbnail2.png" alt='dark-them' />
             </Grid>
             {/* <Grid mt={1} container  display="flex" alignItems="center" justifyContent="space-between">
              <FormControlLabel  value="default" control={<Radio checked={handleDefaultTheme}    onChange={handleDefaultTheme}/>} label="Device default" sx={{color:'rgba(0, 0, 0, 0.7)'}}  />
              <img src="https://www.gstatic.com/ui/v1/menu/device_default_thumbnail2.png" alt="default-theme"/>
             </Grid> */}
             <Grid mt={1} container  display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant='body2' color={ !darkMode ? 'rgba(0, 0, 0, 0.7)' : '#bdc1c6'}  textAlign="center">"When you change the system theme, the default behavior is for the site theme to change accordingly." </Typography>
             </Grid>
             </Grid>
            </RadioGroup>
          </FormControl>
          </Grid>

        </Grid>
      </Grid>

      <Grid m={2} className='support'>
          <Grid><Typography  variant='h5' fontSize={20}>Support</Typography></Grid>
            <Link>
                <Grid mt={3} display="flex" justifyContent="space-between" alignContent="center">
                    <Typography color={ !darkMode ? 'rgba(0, 0, 0, 0.7)' : '#bdc1c6'} >Search help</Typography>
                    <Typography variant='body2' color={ !darkMode ? 'rgba(0, 0, 0, 0.7)' : '#bdc1c6'}  display="flex" alignItems='center'><ExitToApp/></Typography>
                </Grid>
            </Link>
      </Grid>
   
    </Grid>
     </Modal>
    </ThemeProvider>
  )
}

export default QuickSetting