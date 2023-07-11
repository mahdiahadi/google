import React, { useState } from 'react'
import { useGetEventsQuery } from '../redux/services/OverallEventViewApi'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Container, Grid, IconButton, List, ListItemButton, ListItemText, Menu, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import NewspaperIcon from '@mui/icons-material/Newspaper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { ArrowBackIos, ArrowForward, ArrowForwardIos, ArrowRight, ArrowRightAlt, ArrowRightAltOutlined, ExpandLess, ExpandMore, Image, LiveTv, Settings, Star, StarBorder, Tv, VideoCallOutlined } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import the carousel CSS
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { newsFilteringData } from '../assets/data/newsFilteringData';
import RelatedQuestions from './RelatedQuestions';
import OraganicResults from './OraganicResults';
import RelatedSearch from './RelatedSearch';
import { googleData } from '../assets/data/googleData';
import Twitter from './Twitter';
import InlineVideos from './InlineVideos';
import TopStories from './TopStories';

const OverallEventView = ({searchTerm,showTools,setCurrentPage, currentPage}) => {

  // side image state
  const [hover,setHover]=useState(false)
 
  // getdata from redux api
  const { data:getEvenets,isLoading,isError} = useGetEventsQuery({searchTerm,currentPage});
// inline images
  const images = getEvenets?.inline_images && getEvenets?.inline_images  
  // mobile or tablet state 
  const theme = useTheme()
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'))

  // information about data 
  const total_results = getEvenets?.search_information?.total_results
  const location = getEvenets?.search_parameters?.q
  const myString = 'seconds'; 
  
  //list state
  const [isOpen,setIsOpen]=useState(true)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  // local resukt state
  const [openLocal, setOpenLocal] = useState(null)
  const handleClickLocal = (id) => {
    setOpenLocal( openLocal === id ? null : id )
  }
  // related search 
  const [openRelatedSearch,setOpenRelatedSearch]=useState(null);
  const handleClickSearch = (id) => {
      setOpenRelatedSearch( openRelatedSearch === id ? null : id)
  }
  return (
    <Container maxWidth="lg"  >
     
      {
        isLoading ? <Grid display="flex" justifyContent="center" alignContent="center"><Typography variant='h4'>Loading...</Typography></Grid> 
        :
      <>
   
     {
      !showTools && 
      <Grid sx={{ transition:'all 0.3s ease-in-out'}} marginTop="5px" container spacing={2} alignContent="center" display="flex">
        <Grid item xs={12}>
          <Typography variant='body2' color="#707c80">About : {total_results?.toLocaleString()} results ({getEvenets?.search_information?.time_taken_displayed} <b>{myString.charAt(0)}</b>{myString.slice(1)}) </Typography>
        </Grid>
      </Grid>
     }
      <Grid marginTop={ showTools && '40px'} container spacing={2} alignContent="center" display="flex">
          <Grid item xs={12}>
              <Typography variant="body2" color="#707c80">Results for : <b>{location}</b> with <b>{getEvenets?.search_parameters?.engine}</b> engine .  </Typography>
          </Grid>
      </Grid>
      <Grid container  spacing={2} alignContent="center" display="flex">
        <Grid container marginTop={3} item xs={12} md={8} style={{order: isMobileOrTablet && 2}}>
        {
          getEvenets?.top_stories &&
          <Grid position="relative">
            {
              isMobileOrTablet ?  
              <Grid container alignItems="center" >
               <Grid  item container display="flex" alignItems="center" justifyContent="flex-start">
                  <Box display="flex" alignItems="center">
                     <NewspaperIcon style={{ color:'#707c80'}}/> &nbsp;&nbsp;
                      <Typography fontWeight="bold" fontSize="1.5rem" color="#555f61">Top stories</Typography> &nbsp; 
                  </Box>
                  <Box  sx={{ marginRight:'5px',alignItems:'center',display:'flex'}} >
                      <MoreVertIcon style={{ color:'#707c80' }}/>
                  </Box>
                </Grid>
                <Grid  alignItems="center" marginTop="1rem"  >
                  <Carousel
                     showThumbs={false}
                     showIndicators={false} // Hide the dots
                     infiniteLoop={false}
                     autoPlay={false}
                     interval={3000}
                     showArrows={false}
                     showStatus={false}
                     swipeable={true}
                     centerMode={true}
                     centerSlidePercentage={isMobileOrTablet ? 50 : 33.333}
                     emulateTouch={true}
                     transitionTime={500}
                     slidesToShow={3}
                     slidesToScroll={1}    
                   >
                    {
                      getEvenets?.top_stories?.map((story,index) => (
                        <Grid key={index} container  item xs={11} spacing={1}  >
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
                                image={story?.thumbnail}
                                alt="green iguana"
                              />
                       
                          <CardContent  sx={{ maxHeight:'contain',direction: 'column', alignContent: 'flex-start' ,overflow:'auto' }}>
                            <Box mb={1} display="flex" alignItems="center" justifyContent="flex-start">
                              <img style={{ borderRadius: '100%', marginRight: '5px', height: '20px', width: '20px' }} src={story?.thumbnail} alt="" />
                              <Typography >
                                <Link style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }}>{story?.source}</Link>
                              </Typography>
                            </Box>
                            <Box>
                              <Typography textAlign="left" component="div" variant="body2" color="#007bff">
                                <Link style={{ color: "#007bff" }}>{story?.title.slice(0, 50)}...</Link>
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', pt:2 }}>
                              <Typography variant='body2' color="text.secondary">{story?.date}</Typography>
                            </Box>
                          </CardContent>
                     
                                 </CardActionArea>     
                                </Card>
                              </Grid>
                            ))
                    }
                        </Carousel>
                      </Grid>
                    </Grid>
                    :
                    <>
                    <Grid item display="flex" alignItems="center" justifyContent="flex-start"><NewspaperIcon style={{ color:'#707c80'}}/> &nbsp; &nbsp; <Typography fontWeight="bold" fontSize="1.5rem" color="#555f61">Top stories</Typography> &nbsp; &nbsp; <MoreVertIcon style={{ color:'#707c80'}}/></Grid>
                    <Grid container  item xs={12}  alignItems="center" marginTop="1rem"  >
                        {
                          getEvenets?.top_stories?.slice(0,4)?.map((story,index) => (
                            <TopStories
                             key={index}
                             index={index} 
                             story={story} 
                             sm={6} 
                             borderLeft={isMobileOrTablet ? 'none' : index % 2 !== 0 && "1px solid #ccc"}                    
                             borderTop={ isMobileOrTablet ? "none" : index === 2 || index === 3 ? '1px solid #ccc' : 'none'}
                             />
                             ))
                        }
                      
                       <Grid container justifyContent="center" >
                          <Button className='btn' variant='contained' endIcon={<ArrowRight/>} style={{backgroundColor:"4caf50"}} >More news</Button>
                        </Grid>
                    </Grid>
                    </>
                  }
                   
                </Grid>
              }
              {
                getEvenets?.inline_videos && 
                <Grid container alignItems="center" >
                     <Grid  item  display="flex" alignItems="center" justifyContent="flex-start">
                        <Box display="flex" alignItems="center">
                           <LiveTv style={{ color:'#707c80'}}/> &nbsp;&nbsp;
                            <Typography fontWeight="bold" fontSize="1.5rem" color="#555f61">Videos</Typography> &nbsp; 
                        </Box>
                        <Box  sx={{ marginRight:'5px',alignItems:'center',display:'flex'}} >
                            <ArrowForwardIosIcon  style={{ color:'#707c80',fontSize:'18px',marginLeft:'4px' }}/>
                        </Box>
                      </Grid>
                <Grid item xs={12} >
                {getEvenets?.inline_videos?.map((video,index) => (
                  <InlineVideos
                    key={index}
                    date={video?.date}
                    link={video?.link}
                    source={video?.source}
                    title={video?.title}
                    length={video?.length}
                  />
                ))}
                </Grid>
                </Grid>
              }
                 {
                getEvenets?.organic_results && 
                    getEvenets?.organic_results?.slice(0,4).map((result,index) => (                 
                      <OraganicResults
                      key={index}
                      result={result}
                      // images={ images[index < images?.length ? index : index - images?.length].image}
                      />
                      )) 
              } 
               {
                getEvenets?.related_questions && 
            <>
                <Grid borderBottom="1px solid rgba(0, 0, 0, 0.2)" container mt={3}>
                        <Grid container item xs={12}>
                        <Box display="flex" alignItems="center">
                            <Typography fontWeight="bold" fontSize="1.5rem" color="#555f61">People also ask</Typography> &nbsp; 
                        </Box>
                        <Box  sx={{ marginRight:'5px',alignItems:'center',display:'flex'}} >
                            <MoreVertIcon style={{ color:'#707c80'  }}/>
                        </Box>
                        </Grid>
                </Grid>
                <Grid>
                  {
                    getEvenets?.related_questions?.map((item,index) => (
                       <RelatedQuestions
                        key={index}
                        question={item?.question}
                        answer={item?.answer}
                        displayed_link={item?.source?.displayed_link}
                        link={item?.source?.link}
                        title={item?.source?.title}
                       />   
                    ))
                  }
                </Grid>
                </>
              }    
              {
                getEvenets?.inline_tweets && 
                <Grid>
                  <Link>
                  <Grid mt={4} container direction="column" alignContent="flex-start" justifyContent="center" >
                    <Grid display="flex" alignItems="center" justifyContent="flex-start">
                        <Typography variant='body2' color='rgba(0, 0, 0, 0.5)'>https://twitter.com/{getEvenets?.knowledge_graph?.title}</Typography>
                        <MoreVertIcon style={{ color:'rgba(0, 0, 0, 0.5)', fontSize:'20px'}} />
                    </Grid>
                    <Grid>
                        <Typography variant='h6' color="#007bff">{getEvenets?.inline_tweets[0]?.title} . Twitter</Typography>
                    </Grid>
                  </Grid>
                  </Link>
                  <Grid  position="relative" mt={2}>            
                  <Carousel                  
                    showThumbs={false}
                    showIndicators={false} // Hide the dots
                    infiniteLoop={false}
                    autoPlay={false}
                    interval={3000}
                    showArrows={true}
                    showStatus={false}
                    swipeable={true}
                    centerMode={true}
                    centerSlidePercentage={isMobileOrTablet ? 80 : 50}
                    emulateTouch={true}
                    transitionTime={500}
                    slidesToShow={3}
                    slidesToScroll={1}
                    renderArrowPrev={(onClickHandler, hasPrev) =>
                      hasPrev && (
                        <IconButton style={{position:'absolute',right:'0',zIndex:'9999',top:'46%'}} onClick={onClickHandler}>
                          <ArrowBackIcon style={{ fontSize: '2rem', color: 'rgba(0, 0, 0, 0.4)' ,backgroundColor:"#fff",borderRadius:'50%' }} />
                        </IconButton>
                      )
                    }
                    renderArrowNext={(onClickHandler, hasNext) =>
                      hasNext && (
                        <IconButton style={{position:'absolute',left:'0px',zIndex:'9999',top:'46%'}} onClick={onClickHandler}>
                          <ArrowForwardIcon style={{ fontSize: '2rem',borderRadius:'50%', color: 'rgba(0, 0, 0, 0.4)',backgroundColor:"#fff",}} />
                        </IconButton>
                      )
                    }
                  >
                    {
                      getEvenets?.inline_tweets?.map((tweet,index) => (
                        <Twitter
                          image={getEvenets?.inline_images ? getEvenets?.inline_images[2].image : googleData[1].image}
                          key={index}
                          date={tweet?.date}
                          date_utc={tweet?.date_utc}
                          link={tweet?.link}
                          snippet={tweet?.snippet}
                          title={tweet?.title}
                        />
                      ))
                    }
                     </Carousel>
                   
                  </Grid>
                </Grid>
              

              }
              {
                getEvenets?.organic_results && 
                    getEvenets?.organic_results?.slice(4,getEvenets?.organic_results?.length).map((result,index) => (
                      <OraganicResults
                      key={index}
                      result={result}
                      //  images={ images[index < images?.length ? index : index - images?.length].image &&  images[index < images?.length ? index : index - images?.length].image }
                      />
                      )) 
              } 
              {
                getEvenets?.related_searches && 
                <>
                  <Grid borderBottom="1px solid rgba(0, 0, 0, 0.2)" container  mt={4}>
                        <Grid container item xs={12}>
                        <Box display="flex" alignItems="center">
                        
                            <Typography fontWeight="bold" fontSize="1.5rem" color="#555f61">Related searches</Typography> &nbsp; 
                        </Box>
                        <Box  sx={{ marginRight:'5px',alignItems:'center',display:'flex'}} >
                            <MoreVertIcon style={{ color:'#707c80' }}/>
                        </Box>
                        </Grid>
                  </Grid>
                  <Grid container position="relative" >
                    <List
                        sx={{width:'100%',bgcolor:'background.paper',paddingY:'0'}}
                        component="nav"
                    >
                      <ListItemButton onClick={handleClick}>
                        <ListItemText >
                          <Grid display='flex' alignItems="center" >
                          {
                            !isOpen && 
                            <img alt='image' style={{objectFit:'cover',marginRight:'1rem'}} src={ getEvenets?.inline_images ? getEvenets?.inline_images[0].image : googleData[4].image} width={30} height={30}/>
                          }
                          { getEvenets?.related_searches[0]?.group_name ? getEvenets?.related_searches[0]?.group_name: getEvenets?.related_searches[0]?.query }
                          </Grid>
                        </ListItemText>
                          {isOpen ? <ExpandLess/> : <ExpandMore/>}
                      </ListItemButton>
                      <Collapse in={isOpen} >
                        <Grid display="flex">
                        {
                          getEvenets?.related_searches?.slice(0,4)?.map((search,index) => (
                            <RelatedSearch
                            image={getEvenets?.inline_images ? getEvenets?.inline_images[2].image : googleData[1].image}
                              key={index}
                              name={search?.group_name}
                              link={search?.link}
                              query={search?.query}
                              type={search?.type}
                            />
                          ))
                        }
                        </Grid>
                      <Grid mt={2} mb={3} display="flex" alignContent="center" justifyContent="center">
                        <Button sx={{paddingX:'4rem'}} variant='outlined'>See more <ArrowRight/> </Button>
                      </Grid>
                      </Collapse>
                    </List>
                    <Box display="flex" alignContent="center" width="100%" borderBottom='1px solid rgba(0, 0, 0, 0.2)' ><Typography bgcolor="background.paper" pl={2} right="0" bottom='-5px' position="absolute"  variant='body2' fontSize='0.8rem' color="rgba(0, 0, 0, 0.6)">Feedback</Typography></Box>
                  </Grid>
                </>
              }
            
           
                  <Grid container mb={2}>
                    <Grid item xs={12} display="flex" alignContent='center' justifyContent="center">
                    <Typography display="flex" variant='h4' >
                    {
                      currentPage > 1 && (
                        <Grid style={{ cursor: 'pointer' }} onClick={() => setCurrentPage(currentPage - 1)} mr={1}>
                          <Typography variant='h4' color="#1976d2" textAlign="center">
                            <ArrowBackIos />
                          </Typography>
                          <Typography variant='body2' textAlign="center" color="#1976d2">Previous</Typography>
                        </Grid>
                      )
                    }
                    <span style={{ color: '#1976d2' }}>G</span>
                    <Grid style={{ display: 'flex', alignItems: 'center' }}>
                    {
                      getEvenets?.pagination ? 
                      (()=>{
                          const allPages = [
                            getEvenets?.pagination?.current,
                            ...getEvenets?.pagination?.api_pagination?.other_page?.map((i)=> i.page)
                          ];
                          const sortedPages= allPages?.sort((a,b) => a - b)
                          return sortedPages?.map((page,index) => (
                            <Grid
                              style={{ cursor: 'pointer', margin: '0 5px' }}
                              onClick={() => setCurrentPage(page)}
                              key={index}
                            >
                              <Typography variant='h4' color={currentPage === page ? 'red' : 'goldenrod'}>o</Typography>
                              <Typography variant='body2' textAlign="center" color={currentPage === page ? 'rgba(0, 0, 0, 0.7)' : '#1976d2'}>
                                {page}
                              </Typography>
                            </Grid>
                          ))
                        })()
                      :
                      (()=>{
                        const allPages=[1,2,3,4,5,6,7,8,9,10]
                        const sortedpages = allPages.sort((a,b) => a - b)
                        return sortedpages?.map((page,index) => (
                          <Grid key={index} onClick={() => setCurrentPage(page)} style={{ cursor:'pointer', margin:'0 5px'}}>
                             <Typography variant='h4' color={ currentPage === page ? 'red' : 'goldenrod'} >o</Typography>
                            <Typography variant='body2' textAlign="center" color={ currentPage === page ? 'rgba(0, 0, 0, 0.7)' : '#1976d2'}>{page}</Typography>
                          </Grid>
                        ))
                      })()
                    }
                    </Grid>
                    <span style={{ color: '#1976d2' }}>g</span> <span style={{ color: 'green' }}>l</span><span style={{ color: 'red' }}>e</span>
                    {
                       getEvenets?.pagination?.api_pagination?.other_pages.length > 0 && currentPage <= getEvenets?.pagination?.api_pagination?.other_pages.length &&
                       <Grid style={{ cursor: 'pointer' }} onClick={() => setCurrentPage(currentPage + 1)} ml={2}>
                         <Typography variant='h4' color="#1976d2" textAlign="center"><ArrowForwardIos /></Typography>
                         <Typography variant='body2' textAlign="center" color="#1976d2">Next</Typography>
                       </Grid>
                      }
                    </Typography>
                    </Grid>
                  </Grid>
                

          </Grid>      
              {
                getEvenets?.knowledge_graph &&
                  <Grid  item xs={12} md={4} style={{ order: isMobileOrTablet && 1}} border="1px">
                  <Grid   borderBottom="1px">
                      <Card sx={{ width: "100%" }}>     
                      <CardMedia >
                        <Grid   container spacing={1}>
                          {Array.isArray(getEvenets?.knowledge_graph?.images) && getEvenets?.knowledge_graph?.images.slice(0, 6).map((img,index) => (
                            <Grid 
                            key={index} item xs={4} style={{ margin: '0px' }}>
                            <img src={img} alt={`Image ${index + 1}`} style={{ width: '100%', height: '100px', objectFit: 'fill'}} />
                          </Grid>
                          ))}
                    
                        <Grid   position="relative" item xs={12} >
                              <Link to="/" 
                              onMouseEnter={()=>setHover(true)}
                              onMouseLeave={()=>setHover(false)}
                              style={{textDecoration:`${hover ? 'underline' : 'none'}`,borderRadius:'5px',opacity:`${hover ? '.8' : '.6'}`, transition: 'opacity 0.3s ease',backgroundColor:`${hover ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.65)'}`,padding:'4px',display:'flex',alignItems:'center',color:'#fff',position:'absolute',bottom:'12px',right:'0px',zIndex:'1'}}>
                                 <Image /> <Typography ml={1}>More Images</Typography>
                              </Link>
                        </Grid>
                        </Grid>
                      </CardMedia>
                          
                        <CardContent sx={{ borderBottom:'1px solid lightgray'}}>
                          <Typography gutterBottom variant="h5" component="div">
                          {getEvenets?.knowledge_graph?.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          {getEvenets?.knowledge_graph?.type}
                          </Typography>
                        </CardContent>
                       <CardContent sx={{ borderBottom:'1px solid lightgray'}}>
                        <Typography marginBottom={2} variant='body2' color="text">
                          {getEvenets?.knowledge_graph?.description} <Link to={`${getEvenets?.knowledge_graph?.source?.link}`}>{getEvenets?.knowledge_graph?.source?.name}</Link>
                        </Typography>
                          {
                            getEvenets?.knowledge_graph && 
                            getEvenets?.knowledge_graph?.known_attributes?.map((attr,index) => (
                              <Typography marginTop={1} variant="body2" color="text"  key={index}> {attr?.value}</Typography>
                              ))
                          }
                       </CardContent>
                      {
                        getEvenets?.knowledge_graph?.people_also_search_for && 
                        <CardContent>
                          <Grid item display="flex" justifyContent="space-between" alignContent="center">
                            <Typography variant='body1' color="CaptionText">People also search for</Typography>
                            <Typography variant='body2' ><Link to="/"  >View {getEvenets?.knowledge_graph?.people_also_search_for?.length -1}+ more</Link></Typography>
                          </Grid>
                          {
                          getEvenets?.knowledge_graph?.people_also_search_for?.map((item,index) => (
                          <Grid key={index}>
                              <img/>
                          </Grid>
                        ))}
                        </CardContent>
                      }
                      {
                        getEvenets?.local_results && 
                        <CardContent>
                             <Grid item display="flex" justifyContent="space-between" alignContent="center">
                              <Typography variant='body2' fontWeight='bold' textAlign="center" color="CaptionText">Local Result</Typography>
                               <Typography variant='body2' textAlign="center" fontSize={12} >View {getEvenets?.local_results?.length -1}+ more</Typography>
                          </Grid>
                        <List
                        sx={{width:'100%'}}
                        component='nav'
                        aria-labelledby="nested-list-subheader"
                        >
                          {
                          getEvenets?.local_results?.map((result,index) => (
                              <Grid key={index}> 
                            <ListItemButton sx={{padding:'0px 1px'}} onClick={()=>handleClickLocal(result?.position)}>
                                <ListItemText sx={{color : openLocal === result?.position && '#007bff'}}>
                                    {result?.title}
                                </ListItemText>
                                { openLocal === result?.position ? <ExpandLess/> : <ExpandMore/>  }
                              </ListItemButton>
                              <Collapse in={ openLocal === result?.position}>
                                <Typography variant='body2'>
                                  {result?.extensions}
                                </Typography>
                              </Collapse>
                              </Grid>
                              ))}
                            </List>
                            </CardContent>
                      }
                      {
                        getEvenets?.related_searches && 
                        <CardContent>
                          <Grid item display="flex" justifyContent="space-between" alignContent="center">
                              <Typography variant='body2' fontWeight='bold' textAlign="center" color="CaptionText">Related Search</Typography>
                               <Typography variant='body2' textAlign="center" fontSize={12} >View {getEvenets?.related_searches?.length -1}+ more</Typography>
                          </Grid>
                          <List
                          sx={{ width:'100%'}}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                          >
                              {
                                getEvenets?.related_searches?.map((search,index) => (
                                  <Grid key={index}>
                                  <ListItemButton className='listHoverDark' sx={{padding:'0px 1px'}} onClick={() => handleClickSearch(index)}>
                                      <ListItemText sx={{color : openRelatedSearch === index && '#007bff'}} >
                                          {search?.query}
                                      </ListItemText>
                                      { openRelatedSearch === index ? <ExpandLess color={openRelatedSearch === index && '#007bff'}/> : <ExpandMore/>}
                                  </ListItemButton>
                                  <Collapse in={ openRelatedSearch === index}>
                                  <Typography variant='body2' ><span style={{ fontWeight:'bold'}}>Group Name:</span> {search?.group_name}</Typography>
                                  <Typography variant='body2' ><span style={{ fontWeight:'bold'}}>Name</span>: {search?.query}</Typography>
                                  <Typography variant='body2' ><span style={{ fontWeight:'bold'}}>Type</span>: {search?.type}</Typography>
                                  </Collapse>
                                  </Grid>
                                ))
                              }
                          </List>
                        </CardContent>
                      }
                      </Card>
                    </Grid>
              </Grid>
              }
      </Grid>
      </>
         }
  </Container>
  )
}

export default OverallEventView

