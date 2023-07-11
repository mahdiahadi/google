import React from 'react'
import { useGetVideosQuery } from '../redux/services/OverallEventViewApi'
import { Container, Grid, Typography } from '@mui/material'
import VideosOrganicResult from './VideosOrganicResult'
import { ArrowBack, ArrowBackIos, ArrowForward, ArrowForwardIos } from '@mui/icons-material'

const Videos = ({searchTerm,setCurrentPage,currentPage,showTools}) => {
  const {data:getVideos,isFetching} = useGetVideosQuery({searchTerm,currentPage})
  return (
    <Container maxWidth="xl">
        {
          isFetching ? 
          <Grid display="flex" justifyContent="center" alignContent="center"><Typography variant='h4'>Loading...</Typography></Grid> 
          :
          <>
            {
              !showTools &&
              <Grid  sx={{ transition:'all 0.3s ease-in-out'}} marginTop='5px' container spacing={2} alignContent="center" display="flex">
              <Grid item xs={12}>
                <Typography variant='body2' color="rgba(0, 0, 0, 0.6)">About {getVideos?.search_information?.total_results?.toLocaleString()} results ({getVideos?.search_information?.time_taken_displayed}seconds) </Typography>
              </Grid>
            </Grid>
            }
            <Grid marginTop={ showTools && '40px'} container>
                { getVideos?.organic_results &&
                   getVideos?.organic_results?.map((result,index) => (
                    <VideosOrganicResult result={result} key={index}  />
                    ))
                }
            </Grid>
            <Grid container mb={2}>
                <Grid item xs={12} display="flex" alignContent="center" justifyContent="center">
                    <Typography display="flex" variant='h4' >
                      {
                       currentPage > 1 && (
                        <Grid style={{ cursor: 'pointer' }} onClick={() => setCurrentPage(currentPage - 1)} mr={1}>
                          <Typography variant='h4' color="#1976d2" textAlign="center">
                            <ArrowBackIos />
                          </Typography>
                          <Typography variant='body2' textAlign="center" color="#1976d2">Previous</Typography>
                        </Grid>
                      )}
                        <span style={{ color: '#1976d2' }}>G</span>
                        <Grid display="flex" alignItems="center">
                            {
                              getVideos?.pagination ?
                              (()=>{
                                const allPages = [
                                  getVideos?.pagination?.current ,
                                  ...getVideos?.pagination?.api_pagination?.other_pages?.map((i) => i.page)
                                ]
                                const sortedPages = allPages.sort((a,b) => a - b );
                                return sortedPages?.map((page,index) => (
                                  <Grid 
                                  style={{ cursor:'pointer' , margin:'0 5px'}}
                                  onClick={()=>setCurrentPage(page)}
                                    key={index}
                                  >
                                    <Typography variant='h4' color={ currentPage === page ? 'red' : 'goldenrod'} >o</Typography>
                                    <Typography variant='body2' textAlign='center' color={ currentPage === page ? 'rgba(0, 0, 0, 0.7)': '#1976d2'}>{page}</Typography>
                                  </Grid>
                                ))
                              })()
                              :
                              (() => {
                                let pages = [1,2,3,4,5,6,7,8,9,10];
                                 return pages.map((page,index) => (
                                      <Grid 
                                        key={index}
                                        onClick={() => setCurrentPage(page)}
                                        style={{ cursor:'pointer', margin:'0 5px'}}
                                      >
                                        <Typography variant='h4' color={ currentPage === page ? 'red' : 'goldenrod'} >o</Typography>
                                        <Typography variant='body2' textAlign='center' color={ currentPage === page ? 'rgba(0, 0, 0, 0.7)': '#1976d2'}>{page}</Typography>
                                        
                                      </Grid>
                                  ))
                              })()
                            }
                        </Grid>
                        <span style={{ color: '#1976d2' }}>g</span> <span style={{ color: 'green' }}>l</span><span style={{ color: 'red' }}>e</span>
                      {
                       getVideos?.pagination?.api_pagination?.other_pages.length > 0 &&  currentPage <= getVideos?.pagination?.api_pagination?.other_pages.length &&
                       <Grid style={{ cursor: 'pointer' }} onClick={() => setCurrentPage(currentPage + 1)} ml={2}>
                         <Typography variant='h4' color="#1976d2" textAlign="center"><ArrowForwardIos /></Typography>
                         <Typography variant='body2' textAlign="center" color="#1976d2">Next</Typography>
                       </Grid>
                      }
                    </Typography>
                </Grid>
            </Grid>
          </>
        }
    </Container>
  )
}

export default Videos