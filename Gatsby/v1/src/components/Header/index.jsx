import { ChevronRight, Menu } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Container,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  Paper,
  SwipeableDrawer,
  Toolbar,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
const navigationLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '/cv/cv_rauladolfoenglish.pdf', download: true },
]

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  avatar: {
    marginRight: 'auto',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 0,
    height: 30,
    border: '2px solid gray',
    borderLeft: '12px solid transparent',
    borderRight: '12px solid transparent',
  },
}))

export default function Header() {
  const styles = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar className={styles.avatar}>R</Avatar>

          <Paper sx={{ display: { xl: 'none', xs: 'block' } }}>
            <IconButton onClick={() => setOpen(true)}>
              <Menu />
            </IconButton>
          </Paper>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRight />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.name}>
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
                download={item.name === 'Resume' ? item.download : null}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  )
}
