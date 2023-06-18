import { Box, Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'

import NewspaperIcon from '@mui/icons-material/Newspaper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
const RelatedSearch = ({link,query,type,name,image}) => {
  return (
        <Grid    
         sx={{
            width:'100%',
            display:'flex',
          transition: 'box-shadow 0.4s ease',
          ":hover":{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius:'5px',
          }
        }} 
         alignContent="center"
          justifyContent="center"
          item 
          xs={3}
           >
          <Link to="/">
            <Grid 
                py={1}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                    <img src={image}  alt='image' style={{ objectFit:'contain',width:'100px',height:'100px'}} />
                    <Typography color="rgba(0, 0 ,0 ,0.8)" variant='body2'>{query}</Typography>
            </Grid>
         </Link>
        </Grid>
   
  

  )
}

export default RelatedSearch