import React from 'react'
import { useGetNewsQuery } from '../redux/services/OverallEventViewApi'
import { Container, Grid, Typography } from '@mui/material'

const News = ({searchTerm}) => {
  const {data:getNews} = useGetNewsQuery(searchTerm)
  console.log('news:',getNews)
  return (
    <Container>
      
    </Container>
  )
}

export default News