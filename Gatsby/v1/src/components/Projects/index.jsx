import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import Project from './Project'

export default function Projects() {
  return (
    <Container maxWidth="md" id="projects">
      <Box pt={20} mb={10}>
        <Typography variant="h2" textAlign="center">
          Projects
        </Typography>
      </Box>
      <Project />
      {/* {projectsData.map((data) => (
        <Project {...data} key={data.index} />
      ))} */}
    </Container>
  )
}
