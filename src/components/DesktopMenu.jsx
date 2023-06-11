import React from 'react'
import { Button, Card, CardActions, CardContent, Grid, Modal, Typography } from '@mui/material'
import { googleData } from '../assets/data/googleData'
import { Link } from 'react-router-dom'
import { Padding } from '@mui/icons-material'
import { googleAdditionalData } from '../assets/data/googleAdditionalData'

const DesktopMenu = ({setDesktopMenu,desktopMenu}) => {
  return (
    <Grid sx={{ transition:'all 0.4s ease'}}  item xs={12} >
        <Modal
            open={desktopMenu}
            onClose={()=>setDesktopMenu(false)}
        > 
          <Card sx={{ minWidth: 275,position:"absolute", right:"20px", top:"60px",  bgcolor: 'background.paper',border: '2px solid #000',width:'300px',height:'400px',overflowY:'auto'  }}>
      <CardContent >
        <Grid container >
          {
            googleData.map((item , index) => (
              <Grid    
               sx={{
                transition: 'box-shadow 0.4s ease',
                ":hover":{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  borderRadius:'5px',
             
                }
              }} 
              key={index}  display="flex" alignContent="center" justifyContent="center" item xs={4}>
                <Link to="/">
                  <Grid 
                      py={1}
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center">
                  <img src={item.image} style={{ objectFit:'contain',width:'40px',height:'40px'}} />
                   <Typography color="rgba(0, 0 ,0 ,0.7)" variant='body2'>{item.google}</Typography>
               </Grid>
               </Link>
              </Grid>
            ))
          }
        </Grid>
        <Grid container borderTop="1px solid rgba(0, 0, 0, 0.3)" >
          {
            googleAdditionalData.map((item , index) => (
              <Grid    
               sx={{
                transition: 'box-shadow 0.4s ease',
                ":hover":{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  borderRadius:'5px',
             
                }
              }} 
              key={index}  display="flex" alignContent="center" justifyContent="center" item xs={4}>
                <Link to="/">
                  <Grid 
                      py={1}
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center">
                  <img src={item.image} style={{ objectFit:'contain',width:'40px',height:'40px'}} />
                   <Typography color="rgba(0, 0 ,0 ,0.7)" variant='body2'>{item.google}</Typography>
               </Grid>
               </Link>
              </Grid>
            ))
          }
        </Grid>
        <Grid display="flex" alignItems="center" justifyContent="center" mt={1}>
          <Button     
           variant='outlined' 
            sx={{
              color:'#8abff8'
            }}
            >
                  More from Google
           </Button>
        </Grid>
      </CardContent>
    </Card>
    </Modal>
    </Grid>
  )
}

export default DesktopMenu