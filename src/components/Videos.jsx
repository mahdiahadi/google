import React from 'react'
import { useGetVideosQuery } from '../redux/services/OverallEventViewApi'

const Videos = ({searchTerm}) => {
  const {data:getVideos} = useGetVideosQuery(searchTerm)
  return (
    <div>Videos</div>
  )
}

export default Videos