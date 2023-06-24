import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NewsOrganicResult = ({result,images}) => {

    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()+ '- '+ days[today.getDay()];
  return (
    <Grid container  item xs={12}  alignItems="center" marginTop="1rem"  >
  
        <Grid   item xs={12} sm={12} md={7}>
          <Card  sx={{ display: 'flex',justifyContent:'space-between' , height:'auto', boxShadow: 'none', }}>
            <Box    sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardContent   sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',py:'5px'}}>
               <Box mb={1}  display="flex" alignItems="center" justifyContent="flex-start">
               <img style={{ borderRadius: '100%', marginRight: '5px', height: '20px', width: '20px' }} src={images} alt="" />
               <Link style={{ textDecoration:'none', }}>  <Typography variant='body2' color='rgba(0, 0, 0, 0.8)'>{result?.domain}</Typography></Link>
               </Box>
                <Typography component="div" variant="body2" color="#007bff">
                 <Link style={{color:"#007bff"}}> {result?.title}</Link>
                </Typography>
                <Typography component="div" variant="body2" color="#007bff">
                 <Link style={{color:"rgba(0, 0, 0, 0.6)"}}> {result?.snippet}</Link>
                </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', pb: 1,mt:1}}>
                <Typography variant='body2' color="text.secondary"> {result?.date ? result?.date : date}</Typography>
              </Box>
              </CardContent>
           
                  </Box>
            
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: '8px'  }} >
              <CardMedia

                component="img"
                sx={{                      
                  objectFit: 'fit',
                  borderRadius: '10%',
                  height: '100px',
                  width: '100px',
                  maxHeight: '100px',
                  maxWidth: '100px'
                }}
                image={images}
                alt="Live from space album cover"
                />
            </Box>
                                            
            </Card>
            </Grid>                     
</Grid>
  )
}

export default NewsOrganicResult