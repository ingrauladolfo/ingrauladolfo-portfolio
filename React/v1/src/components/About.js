
import React from 'react'
import profile from '../images/ratv.jpg'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import TypeWriterEffect from 'react-typewriter-effect'
const About = ( {title, dark, id}) => {
    
    const classes = useStyles();
    return (
        
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>
              <Typography variant="h3">{title}</Typography>
              <Card className={classes.card} >
                <CardMedia image={profile} className = {classes.cardMedia} title="Raúl Adolfo Torres Vargas"/>
                <CardContent className={classes.cardContent}>
                  <TypeWriterEffect 
                  multiText ={[
                    'Welcome to my portfolio',
                    "I'm Raúl Adolfo Torres Vargas"
                  ]}
                  textStyle={{fontSize:"2rem", fontWeight: "700px", color:"tomato"}} 
                  cursorColor="black"
                  typeSpeed={100}
                  />
                  <TypeWriterEffect 
                  multiText={[
                    'Frontend Developer',  'WebMaster', 'CEO and Founder of ESDMX (Easy Software Design México)'
                  ]}
                  textStyle={{fontSize:"2rem", fontWeight: "700px", color:"tomato"}} 
                  startDelay={4000}
                  cursorColor="black"
                  typeSpeed={100}
                  />
                  <Typography variant="h6" color="textSecondary">
                      Hola
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" className={classes.cvEnglishButton}>
                    <a href='https://docs.google.com/document/d/1TCFcftCZ2iHeQO-XHayNXl2uQH9EhyBmRYPH939Htts/edit?usp=sharing' target="_blank" rel="noreferrer">
                      CV - English
                    </a>
                    </Button>                  
                  <Button variant="contained" className={classes.cvSpanishButton}>
                    <a href='https://docs.google.com/document/d/1pAKOOoxazaMtQM8gB4C004-4KgL5-KNf8lHWbHEMZ7E/edit?usp=sharing' target="_blank" rel="noreferrer">
                      CV - Spanish
                    </a>
                    </Button>                  
                               
                </CardActions>
              </Card>
            </div>
        </div>
        
    )
    
}

const useStyles = makeStyles((theme)=>({
    section: {
            minHeight: "100vh",
            height:"auto"

        },
        sectionDark: {
            background: "#393d42",
            color: "#fff"
        },
        sectionContent: {
            maxWidth: "80vw",
            margin: "0 auto"

        },
        card:{
            background: "#393d42",
            border:'none',
            height:'70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: theme.spacing(6),
            position:'relative',
           
        },
        cardMedia: {
            width: '250px',
            height: '250px',
            objectFit: 'cover',
            borderRadius:'10px',
            margin: theme.spacing(5),
        },
        cardContent:{
            marginTop: theme.spacing(2),
            "& h6":{
                marginTop:theme.spacing(6),
                [theme.breakpoints.down('sm')]:{
                    display:'none'
                },
            }
        },
        cvEnglishButton: {
            position:'absolute',
            bottom: '5rem',
            right:'4rem',
            backgroundColor: "#e04f5f",
            padding: theme.spacing(3),
            [theme.breakpoints.down('sm')]:{
                bottom:'2rem',
                right:'1rem'
            },
            "&:hover":{
                background: "#393d42",
                color: "#fff"
            },
            "& a":{
                color: "#fff",
                textDecoration:"none",
                fontWeight: 900
            }
        },
        cvSpanishButton: {
            position:'absolute',
            bottom: '5rem',
            right:'30rem',
            backgroundColor: "#e04f5f",
            padding: theme.spacing(3),
            [theme.breakpoints.down('sm')]:{
                bottom:'2rem',
                right:'30rem'
            },
            "&:hover":{
                background: "#393d42",
                color: "#fff"
            },
            "& a":{
                color: "#fff",
                textDecoration:"none",
                fontWeight: 900
            }
        }
  }))
export default About
