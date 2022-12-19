import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { aboutData } from '../../data/aboutData'
import AboutMe from './About'
export default function About() {
  return (
    <Container maxWidth="md" id="about">
      <Box pt={8} mb={10}>
        <Typography variant="h2" textAlign="center">
          About
        </Typography>
      </Box>
      <Grid container direction="column" spacing={4}>
        {aboutData.map((data) => (
          <AboutMe {...data} key={data.name} />
        ))}
      </Grid>
    </Container>
  )
}
