import React, { useState } from 'react'
import { useGetNewsQuery } from '../redux/services/OverallEventViewApi'
import { Container, Grid, Typography } from '@mui/material'
import NewsOrganicResult from './NewsOrganicResult'
import TopStories from './TopStories'
import { newsFilteringData } from '../assets/data/newsFilteringData'

const News = ({searchTerm,currentPage}) => {

  const {data:getNews,isFetching} = useGetNewsQuery({searchTerm,currentPage})
  console.log('news:',getNews)
  const images = getNews?.inline_images && getNews?.inline_images
  return (
    <Container maxWidth='xl'>
      {
         isFetching ? <Grid display="flex" justifyContent="center" alignContent="center"><Typography variant='h4'>Loading...</Typography></Grid> 
            :
        <>
      <Grid sx={{ transition:'all 0.3s ease-in-out'}} marginTop="5px" container spacing={2} alignContent="center" display="flex">
        <Grid item xs={12}>
          <Typography variant='body2' color="#707c80">About {getNews?.search_information?.total_results.toLocaleString()} : results ({getNews?.search_information?.time_taken_displayed} seconds) </Typography>
        </Grid>
      </Grid>
      <Grid container  item xs={12}  alignItems="center" marginTop="1rem">
        {
          getNews?.top_stories?.map((story,index) => (
            <TopStories story={story} key={index} index={index} sm={10} md={7}/>
          ))
        }
      </Grid>
      <Grid container>
        {getNews?.organic_results?.map((result,index) => (
          <NewsOrganicResult result={result} key={index} images={ images ? images[index < images?.length ? index : index - images?.length ].image  : newsFilteringData[0].image} />
          ))}
      </Grid>
      <Grid>

      </Grid>
      </>
        }
    </Container>
  )
}

export default News