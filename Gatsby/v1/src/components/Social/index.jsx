import { GitHub, LinkedIn } from '@mui/icons-material'
import { Grid, IconButton, Link } from '@mui/material'
import React from 'react'

const socialItems = [
  { icon: GitHub, url: 'https://github.com/ingrauladolfo', name: 'github' },
  {
    icon: LinkedIn,
    url: 'https://www.linkedin.com/in/ingrauladolfotorresvargas/',
    name: 'linkedin',
  },
]

export default function Social({ direction }) {
  return (
    <Grid container direction={direction || 'row'} spacing={1}>
      {socialItems.map((item) => (
        <Grid item key={item.name}>
          <Link href={item.url} target="_blank">
            <IconButton>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
