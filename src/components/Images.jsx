import React from 'react'
import { useGetImagesQuery } from '../redux/services/OverallEventViewApi'

const Images = ({searchTerm}) => {
  const {data:getImages} = useGetImagesQuery(searchTerm)

  return (
    <div>Images</div>
  )
}

export default Images