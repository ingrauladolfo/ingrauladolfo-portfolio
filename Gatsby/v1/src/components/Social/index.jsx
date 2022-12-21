import { Button, Divider, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { socialItems } from '../../data/socialItems'

export default function Social({ direction }) {
  return (
    <Grid container direction={direction || 'row'} spacing={2}>
      {socialItems.map((item) => (
        <Grid item key={item.name}>
          <Link href={item.url} target="_blank" underline="none">
            <Button variant="outlined" color="primary">
              <item.icon />
              &nbsp;
              <Typography>{item.name}</Typography>
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
