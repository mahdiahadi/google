import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const InlineVideos = ({date,link,source,title,length}) => {

  return (
    <Link>
        <Grid  borderBottom="1px solid rgba(0, 0, 0, 0.2)" display="flex" justifyContent="flex-start">
            <Grid>
            <iframe
    width={150}
    height={70}
    src={link}
    title="YouTube video"
    frameBorder={0}
    allowFullScreen
    style={{ padding:6, borderRadius:'15px'}}
  ></iframe>
            </Grid>
            <Grid>
                <Typography fontSize={15}>{title}</Typography>
                <Grid mt={1}>
                <Typography fontSize={14} color="rgba(0, 0, 0, 0.7)">{source}</Typography>
                <Typography fontSize={12} variant='body2' color="rgba(0, 0, 0, 0.4)">{date}</Typography>
                </Grid>
            </Grid>
    </Grid>
    </Link>
  )
}

export default InlineVideos