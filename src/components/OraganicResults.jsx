import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetEventsQuery } from '../redux/services/OverallEventViewApi'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Star } from '@mui/icons-material';
const OraganicResults = ({result,images}) => {
    const {data:getEvenets}=useGetEventsQuery()
    //Rating star
  const [allStar]=useState(5);
  const createArray = (len) => [...Array(len)];

  const StarRating = ({allStar,selectedStar}) => {
      return(
        <>
          { createArray(allStar * 2 ).map( (index , value) => (
              <div
                key={value}
                style={{
                  display:'inline-block',
                  width:'12px',
                  overflow:'hidden',
                  direction: value % 2 === 0 ? 'ltr' : 'rtl'
                }}
              >
                  { value <= selectedStar * 2 - 1 ? <Star style={{ fill:'orange'}} /> : <Star style={{ fill:'lightgray'}}/>}
              </div>
          ))}
        </>
      )
  }
  return (
    <Grid marginTop={5} container  direction="column" alignContent="flex-start" justifyContent="flex-start" >
    <Grid display="flex" alignItems="center" justifyItems="flex-start" >
        <Box display="flex" alignContent="center">
          <img src={getEvenets?.inline_images && images} style={{ width:'30px',height:'30px',borderRadius:'100%',objectFit:'contain'}}/>
        </Box>
        <Box mx=".8rem">
          <Typography variant='body1' color="rgba(0, 0, 0, 0.8)" >{result?.displayed_link}</Typography>
          <Typography variant='body2' color="rgba(0, 0, 0, 0.7)">{result?.link}</Typography>
        </Box>
        <Box display="flex" alignContent="center">
          <MoreVertIcon style={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.8)' }} />
        </Box>
    </Grid>
    <Grid container  marginTop={1}>
         <Typography variant="h6" ><Link>{result?.title}</Link></Typography>
          <Typography variant='body2' color="rgba(0, 0, 0, 0.9)">
            {result?.snippet}
          </Typography>
          {
            result?.rich_snippet?.top?.attributes &&
    
              result?.rich_snippet?.top?.attributes?.map((rich,index) => (
                <Grid container item xs={12} sm={6} key={index}  >
             <Grid>
                <Typography variant='body2' color="rgba(0, 0, 0, 0.8)" >
                  {rich?.name}: {rich?.value}
                </Typography>
             </Grid>
                </Grid>  
              ))
           
          }
          {
            result?.rich_snippet?.top?.detected_extensions.rating &&
             
                <Grid container item xs={12} sm={6}   >
                <Grid mt={1} display="flex" alignItems="center">
                   <StarRating allStar={allStar} selectedStar={result?.rich_snippet?.top?.detected_extensions?.rating} /> &nbsp;
                   <Typography  variant='body2' color="rgba(0, 0, 0, 0.6)" >
                     Rating: { result?.rich_snippet?.top?.detected_extensions?.rating} &nbsp; Reviews: {result?.rich_snippet?.top?.detected_extensions?.reviews}
                   </Typography>
                </Grid>
                   </Grid>  
           
          }
          <Typography variant='body2' >
           {
        
            result?.sitelinks &&
            result?.sitelinks?.inline?.map((link,index) => (
                <Link key={index} target='_blank' to={link?.link}>{link?.title} . </Link>
            ))
           }
          </Typography>
    </Grid>
  </Grid>
  )
}

export default OraganicResults