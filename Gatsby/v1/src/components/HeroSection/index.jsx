import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Paper,
  Typography,
  Zoom,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import Social from '../Social'

const useStyles = makeStyles((theme) => ({
  section: {
    height: '90vh',
    position: 'relative',
  },
  content: {
    height: '100%',
    zIndex: 100,
    position: 'relative',
  },
  container: {
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 2,
  },
  heroImage: {
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
}))
export default function HeroSection() {
  const styles = useStyles()
  const [shouldShow, setShouldShow] = useState(false)
  useEffect(() => setShouldShow(true), [])
  return (
    <Paper className={styles.section}>
      <StaticImage
        className={styles.heroImage}
        src="https://images.unsplash.com/photo-1669410550410-b3799b687b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        alt=""
        style={{ position: 'absolute' }}
      />
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component="h1" variant="h3">
                <Typewriter
                  options={{
                    strings: [
                      'Hello my name is Raúl',
                      'Welcome to my portfolio',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
              <Typography variant="h5">
                <Typewriter
                  options={{
                    strings: [
                      'Frontend JavaScript Developer since 3 and half years ago',
                      'Fullstack JavaScript only 6 months',
                      '.Net Developer since 5 months ago',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
              <Box my={2} justifyContent="center" alignItems="center">
                <Social />
              </Box>
            </Grid>
          </Zoom>
        </Grid>
      </Container>
    </Paper>
  )
}
