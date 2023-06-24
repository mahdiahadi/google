
import { Box, Card, CardContent, CardMedia, Grid, Typography, useMediaQuery,useTheme} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const TopStories = ({story,md,sm,borderLeft,borderTop}) => {
    const theme = useTheme()
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Grid  borderLeft={borderLeft} item xs={12} sm={sm} md={md}>
    <Card   sx={{ display: 'flex',justifyContent:'space-between' , height:'150px', boxShadow: 'none', }}>
      <Box    sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CardContent   sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',py:'5px', borderTop: {borderTop}}}>
         <Box   display="flex" alignItems="center" justifyContent="flex-start">
         <img style={{ borderRadius: '100%', marginRight: '5px', height: '20px', width: '20px' }} src={story?.thumbnail} alt="" />
         <Typography variant='body4'><Link style={{ textDecoration:'none', color:'rgba(0, 0, 0, 0.87)'}}>{story?.source}</Link></Typography>
         </Box>
          <Typography component="div" variant="body2" color="#007bff">
           <Link style={{color:"#007bff"}}> {story?.title.slice(0,60)}...</Link>
          </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
          <Typography variant='body2' color="text.secondary">{story?.date}</Typography>
        </Box>
        </CardContent>
     
            </Box>
        {story?.thumbnail && 
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: '8px' , borderTop:{borderTop}  }} >
        <CardMedia

          component="img"
          sx={{                      
            objectFit: 'contain',
            borderRadius: '10%',
            height: '100px',
            width: '100px',
            maxHeight: '100px',
            maxWidth: '100px'
          }}
          image={story.thumbnail}
          alt="Live from space album cover"
          />
      </Box>
      }                                 
      </Card>
      </Grid>  
  )
}

export default TopStories