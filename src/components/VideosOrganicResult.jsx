import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const VideosOrganicResult = ({result}) => {
  return (
    <Grid container  item xs={12} md={8}  alignItems="center" marginTop="1rem"  >
        <Grid mb={1}>
            <Typography variant='body2' color="rgba(0, 0, 0, 0.8)">{result?.displayed_link}</Typography>
            <Typography><Link>{result?.link}</Link></Typography>
        </Grid>
        <Grid display="flex" justifyContent="flex-start" alignContent="center">
            <Grid marginRight={2}>
            <iframe
    width={150}
    height={70}
    // src="https://webcache.googleusercontent.com/search?q=cache:EX1poMDaC58J:https://bitcoin.org/fr/&cd=14&hl=fr&ct=clnk&gl=fr"
    title="YouTube video"
    sandbox="allow-same-origin"
    style={{ overflow:'hidden',padding:6, borderRadius:'5px'}}
  ></iframe>
            </Grid>
            <Grid container direction='column' justifyContent='space-between' alignItems="flex-start">
                <Typography variant='body2' color="rgba(0, 0, 0, 0.6)">{result?.snippet}</Typography>
                <Typography variant='body2' color="rgba(0, 0, 0, 0.6)" mb={1}>{result?.title}</Typography>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default VideosOrganicResult