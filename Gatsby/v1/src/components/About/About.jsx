import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
const useStyles = makeStyles((theme) => ({
  cardMedia: {
    width: 180,
  },
  card: {
    display: 'flex',
  },
  links: {
    marginRight: 'auto',
  },
}))

export default function AboutMe({
  imgUrl,
  imageAlt,
  preName,
  name,
  birthday,
  residenceCity,
  originCity,
  career,
  university,
  links,
}) {
  const styles = useStyles()
  return (
    <Grid item>
      <Card className={styles.card}>
        <CardMedia
          className={styles.cardMedia}
          image={imgUrl}
          component="img"
          sx={{
            width: '50%',
            heigh: '50%',
            display: { xs: 'none', md: 'block' },
          }}
          alt={imageAlt}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent
            sx={{
              flex: '1 0 auto',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography paragraph component="div" variant="title">
              {preName} {name}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Birthday: {birthday}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Residence City: {residenceCity}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Origin City: {originCity}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Career: {career}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              University: {university}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <CardActions>
                <div className={styles.links}>
                  {links.map((linkItem) => (
                    <IconButton
                      href={linkItem.href}
                      key={linkItem.href}
                      target="_blank"
                    >
                      <linkItem.icon />
                    </IconButton>
                  ))}
                </div>
              </CardActions>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  )
}
