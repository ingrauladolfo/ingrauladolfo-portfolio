import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { projectsData } from '../../data/projectsData'
const useStyles = makeStyles((theme) => ({
  links: {
    marginRight: 'auto',
  },
  tag: {
    marginRight: 5,
    marginBottom: 5,
  },
}))
const TagsContainer = ({ tags }) => {
  const styles = useStyles()
  return (
    <div>
      {tags.map((tag) => (
        <Chip
          className={styles.tag}
          label={tag}
          variant="outlined"
          key={tag}
        ></Chip>
      ))}
    </div>
  )
}
export default function Project() {
  const styles = useStyles()
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={3}>
      {projectsData.map(
        ({ index, title, description, imageUrl, imageAlt, tags, links }) => (
          <Grid item sx={{ paddingBottom: 3, marginBottom: 3 }} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                image={imageUrl}
                component="img"
                sx={{
                  heigh: '140',
                }}
                alt={imageAlt}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography paragraph component="div" variant="h5">
                    {title}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {description}
                  </Typography>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
                  >
                    <TagsContainer tags={tags} />
                  </Box>
                </CardContent>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
                >
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
              </Box>
            </Card>
          </Grid>
        ),
      )}
    </Grid>
  )
}
