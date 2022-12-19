import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import Projects from '../components/Projects'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import About from '../components/About'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})
export default function indexPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <About />
      <Projects />
    </ThemeProvider>
  )
}
