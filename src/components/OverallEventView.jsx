import React, { useState } from 'react'
import { useGetEventsQuery } from '../redux/services/OverallEventViewApi'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Menu, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import SearchBar from './SearchBar';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { ArrowRight, Image, Star, StarBorder } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import the carousel CSS
import DesktopMenu from './DesktopMenu';

const OverallEventView = () => {
  // desktop menu
  const [desktopMenu,setDesktopMenu]=useState(false)
  // side image state
  const [hover,setHover]=useState(false)
  const [searchTerm,setSearchTerm] =useState('')
  const [searchHover,setSearchHover] = useState(false);
  // getdata from redux api
  const { data:getEvenets,isLoading,isError} = useGetEventsQuery(searchTerm);
  const[sliderIndex,setSliderIndex] = useState(0)
  console.log(getEvenets)
  // mobile or tablet state 
  const theme = useTheme()
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'))
  // information about data 
  const total_results = getEvenets?.search_information?.total_results
  const location = getEvenets?.search_parameters?.q
  const FilterNews = ['News','Images','Videos','Price']
  const myString = 'seconds'; 
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
    <Container maxWidth="lg"  >
      <Grid container spacing={2} alignContent="center" display="flex" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid display="flex" alignItems="center" justifyContent="space-between" height="100%" item xs={12} md={2}>
          {
            isMobileOrTablet ?
            <>
              <Button size='small'  ><FormatListBulletedIcon/></Button>
              <Typography fontWeight="bold" fontSize={24} color="goldenrod">Goooogle</Typography>
              <Button size='small' variant='contained'>Signin</Button>  
            </>
            :
            <Typography fontWeight="bold" fontSize={24} color="goldenrod">Goooogle</Typography> 
          }
        </Grid>
        <Grid item xs={12} md={10} alignItems="center" justifyContent="space-between" display="flex"> 
          {
            !isMobileOrTablet ? 
            <>
            <SearchBar searchHover={searchHover} setSearchHover={setSearchHover} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <Grid position="realtive">
            <Button onClick={()=>setDesktopMenu(!desktopMenu)} size='small'><AppsIcon/></Button>
            <Button size='small' variant='contained'>Signin</Button>
            { desktopMenu && <DesktopMenu desktopMenu={desktopMenu} setDesktopMenu={setDesktopMenu}/>}
            </Grid>
            </>
            :
            <SearchBar searchHover={searchHover} setSearchHover={setSearchHover} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            
          }
        </Grid>
      </Grid>
      {
        isLoading ? <Grid display="flex" justifyContent="center" alignContent="center"><Typography variant='h4'>Loading...</Typography></Grid> 
        :
      <>
      <Grid container spacing={2} alignContent="center" display="flex" >
          <Grid item xs={12}>
              {FilterNews?.map((item,index)=> (
                
                 <Button key={index} variant='outlined' sx={{ borderRadius:'50px',padding:'7px',marginTop:'1rem',marginRight:'1rem'}} >{item}</Button>
                
              ))}
          </Grid>
      </Grid>
      <Grid marginTop="5px" container spacing={2} alignContent="center" display="flex">
          <Grid item xs={12}>
              <Typography color="#707c80">About : {total_results?.toLocaleString()} results ({getEvenets?.search_information?.time_taken_displayed} <b>{myString.charAt(0)}</b>{myString.slice(1)}) </Typography>
          </Grid>
      </Grid>
      <Grid marginTop="5px" container spacing={2} alignContent="center" display="flex">
          <Grid item xs={12}>
              <Typography color="#707c80">Results for : <b>{location}</b> with <b>{getEvenets?.search_parameters?.engine}</b> engine .  </Typography>
          </Grid>
      </Grid>
      <Grid container  spacing={2} alignContent="center" display="flex">
              <Grid container marginTop={3} item xs={12} md={8}>
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
                           centerSlidePercentage={33.33}
                           emulateTouch={true}
                           transitionTime={500}
                           slidesToShow={3}
                           slidesToScroll={1}
                           
                         >
                          {
                            getEvenets?.top_stories?.map((story,index) => (
                              <Grid key={index} container item xs={10} spacing={2} >
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
                                    <CardContent >
                                    <Box mb={1} display="flex" alignItems="center" justifyContent="flex-start">
                                   <img style={{ borderRadius: '100%', marginRight: '5px', height: '20px', width: '20px' }} src={story?.thumbnail} alt="" />
                                   <Typography variant='body4'><Link style={{ textDecoration:'none', color:'rgba(0, 0, 0, 0.87)'}}>{story?.source}</Link></Typography>
                                   </Box>
                                   <Typography textAlign="left"  component="div" variant="body2" color="#007bff">
                                     <Link  style={{color:"#007bff"}}> {story?.title.slice(0,60)}...</Link>
                                    </Typography>
                                    </CardContent>
                                  </CardActionArea>
                                  <CardActions>
                                  <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                                    <Typography variant='body2' color="text.secondary">{story?.date}</Typography>
                                  </Box>
                                  </CardActions>
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
                            <Grid  borderLeft={ isMobileOrTablet ? 'none' : index % 2 !== 0 && "1px solid #ccc"}  key={index} item xs={12} sm={6}>
                              <Card  key={index} sx={{ display: 'flex' , height:'150px', boxShadow: 'none', }}>
                                <Box    sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                  <CardContent   sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',py:'5px', borderTop: isMobileOrTablet ? "none" : index === 2 || index === 3 ? '1px solid #ccc' : 'none' }}>
                                   <Box   display="flex" alignItems="center" justifyContent="flex-start">
                                   <img style={{ borderRadius: '100%', marginRight: '5px', height: '20px', width: '20px' }} src={story?.thumbnail} alt="" />
                                   <Typography variant='body4'><Link style={{ textDecoration:'none', color:'rgba(0, 0, 0, 0.87)'}}>{story?.source}</Link></Typography>
                                   </Box>
                                    <Typography component="div" variant="body2" color="#007bff">
                                     <Link style={{color:"#007bff"}}> {story?.title.slice(0,60)}...</Link>
                                    </Typography>
                                  <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                                    <Typography variant='body2' color="text.secondary">{story?.date}</Typography>
                                  </Box>
                                  </CardContent>
                               
                                      </Box>
                                  {story?.thumbnail && 
                                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: '8px' , borderTop: isMobileOrTablet ? "none" : index === 2 || index === 3 ? '1px solid #ccc' : 'none'  }} >
                                  <CardMedia
      
                                    component="img"
                                    sx={{                      
                                      objectFit: 'contain',
                                      borderRadius: '10%',
                                      height: '100px',
                                      width: '100px',
                                      maxHeight: '100px',
                                      maxWidth: '100px'
                                    }}
                                    image={story.thumbnail}
                                    alt="Live from space album cover"
                                    />
                                </Box>
                                }                                 
                                </Card>
                                </Grid>                      
                           ))
                        }
                      
                       <Grid container justifyContent="center" >
                          <Button variant='contained' endIcon={<ArrowRight/>} style={{backgroundColor:"4caf50"}} >More news</Button>
                        </Grid>
                    </Grid>
                    </>
                  }
                   
                </Grid>
              }
              {
                getEvenets?.organic_results && 
                    getEvenets?.organic_results?.map((result,index) => (
                      <Grid marginTop={5} container  direction="column" alignContent="flex-start" justifyContent="flex-start" key={index}>
                        <Grid display="flex" alignItems="center" justifyItems="flex-start" >
                            <Box display="flex" alignContent="center">
                              <img src={getEvenets?.inline_images[4].image} style={{ width:'30px',height:'30px',borderRadius:'100%',objectFit:'contain'}}/>
                            </Box>
                            <Box mx=".8rem">
                              <Typography variant='body1' color="rgba(0, 0, 0, 0.8)" >{result?.displayed_link}</Typography>
                              <Typography variant='body2' color="rgba(0, 0, 0, 0.7)">{result?.link}</Typography>
                            </Box>
                            <Box display="flex" alignContent="center">
                              <MoreVertIcon color='rgba(0, 0, 0, 0.8)'/>
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
                                 
                                    <Grid container item xs={12} sm={6} key={index}  >
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
                    ))
              }
              </Grid>

              <Grid  item xs={12} md={4} border="1px">
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
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
      </>
         }
  </Container>
  )
}

export default OverallEventView

 {/* {
   isLoading || isError ? 
   <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item xs={12}>
              <Typography align="center">
                {isLoading ? 'Loading...' : 'Error: Something Went Wrong...'}
              </Typography>
            </Grid>
          </Grid>
        :
        <>
             
                <Grid item xs={0} sm={2} >
                  <Typography align='center' fontWeight="bold" fontSize={24} color="burlywood">Gooogle</Typography>
                </Grid>
                <Grid item xs={12} sm={8}  >
                  <SearchBar searchHover={searchHover} setSearchHover={setSearchHover}  setSearchTerm={setSearchTerm} searchTerm={searchTerm} onSearch={handleSearch}/>
                </Grid>
                <Grid item xs={0} sm={2}>
                  <Button>SignIn</Button>
                </Grid>

              
        </>
      } */}