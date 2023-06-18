import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import the carousel CSS
import { Link } from 'react-router-dom';
const Twitter = ({index,date,date_utc,link,title,snippet,image}) => {
  return (
        <Grid   item xs={11} >
          <Card >
            <CardActionArea>
              <CardMedia
             sx={{ 
              objectFit:'cover',
              height:'160px', 
              width:'100%'
             }} 
                component="img"
                height="160"
               image={image}
                alt="green iguana"
              />
              <CardContent sx={{height:'100%',minHeight:'130px',overflow:'auto'}} >
                <Box>
                  <Typography textAlign="left"  component="div" variant="body2" color="#007bff">
                    <Link  style={{color:"#007bff"}}>{snippet.slice(0,100)}...</Link>
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
                  <Typography variant='body2' color="text.secondary">Twitter.{date}</Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          
          </Card>
        </Grid>
                  
                          
                       

  )
}

export default Twitter