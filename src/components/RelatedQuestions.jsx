import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Box, Collapse, Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useGetEventsQuery } from '../redux/services/OverallEventViewApi'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
const RelatedQuestions = ({question,answer,title,link,displayed_link}) => {
    const {data:getEvenets}=useGetEventsQuery()
    const[isopen,setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isopen)
    }
  return (
    <List
    className='listHoverDark' 
    sx={{width:'100%',bgcolor:'background.paper',borderBottom:'1px solid rgba(0, 0, 0, 0.2)',paddingY:'0'}}
    component="nav"
    >
        <ListItemButton    sx={{paddingLeft:'5px',paddingRight:'0'}} onClick={handleClick}>
           <ListItemText  >
                {question}
           </ListItemText>
           <ListItemIcon  sx={{paddingRight:'0',display:'flex',justifyContent:'flex-end'}}>
                { isopen ? <ExpandLess/> : <ExpandMore/>}
           </ListItemIcon>
        </ListItemButton>
        <Collapse in={isopen}>
            <List>
                <ListItemText>
                    <Typography variant='body2'>{answer}</Typography>
                </ListItemText>
               
                <Grid mt={2} display="flex" alignItems="center" justifyItems="flex-start" >
        <Box display="flex" alignContent="center">
          <img src={getEvenets?.inline_images && getEvenets?.inline_images[0].image} style={{ width:'30px',height:'30px',borderRadius:'100%',objectFit:'contain'}}/>
        </Box>
        <Box mx=".8rem"> 

          <Typography variant='body2' color="rgba(0, 0, 0, 0.6)" >{displayed_link}</Typography>
        </Box>
        <Box display="flex" alignContent="center">
          <MoreVertIcon fontSize='1rem' sx={{color:'rgba(0, 0, 0, 0.8)'}}/>
        </Box>
    </Grid>
    <Grid>
        <Box> 
        <Typography variant='body1' color="rgba(0, 0, 0, 0.6)" ><Link>{title}</Link></Typography>
        </Box>
    </Grid>
    <Grid mt={2}>
        <Box> 
            <Typography variant='body2' color="rgba(0, 0, 0, 0.8)" > Searched for: <span style={{color:'#007bff'}}>{question}</span></Typography>
        </Box>
    </Grid>
            </List>
        </Collapse>
    </List>
  )
}

export default RelatedQuestions