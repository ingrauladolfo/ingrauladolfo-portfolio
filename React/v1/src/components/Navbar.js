import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, Toolbar } from '@material-ui/core';
import React, { useState } from 'react'
import logo from '../images/esdmx.png'
import {Link} from 'react-scroll'
import { BuildTwoTone, Cancel, ContactMailTwoTone, EmojiObjectsTwoTone, InfoTwoTone, Menu } from '@material-ui/icons';



const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const links = [
        {
            id:"about",
            text: "About me",
            icon: <InfoTwoTone fontSize="large" className={classes.objectIcon} />
        },
        {
            id:"skills",
            text: "My skills",
            icon: <EmojiObjectsTwoTone fontSize="large" className={classes.objectIcon} />
        },
        {
            id:"portfolio",
            text: "My projects",
            icon: <BuildTwoTone fontSize="large" className={classes.objectIcon} />
        },
        {
            id:"contact",
            text: "Contact me",
            icon: <ContactMailTwoTone fontSize="large" className={classes.objectIcon} />
        }
    ]
    return (
        <div>
            <AppBar position="sticky" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <img src={logo} className={classes.logo} alt="ESDMX" />
                    <List className={classes.menu}>
                        {
                            links.map(({id,text}, index)=>(
                                <Link key={index} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-70}>{text}</Link>
                            ))
                        }
                    </List>
                    <IconButton edge="end" className={classes.menuButton} onClick={()=>setOpen(!open)}>
                        <Menu fontSize="large"/>
                    </IconButton>
                </Toolbar>
                
            </AppBar>
            <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
                <IconButton  onClick={()=>setOpen(false)} className={classes.cancelIcon}>
                    <Cancel />
                </IconButton>
                <Divider />
                {
                            links.map(({id,text, icon}, index)=>(
                                <Link className={classes.sidebar} key={index} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-70}> 
                                <ListItem className={classes.sidebarItem} component="h5">
                                    <span>
                                        <ListItemIcon className={classes.sidebarIcon}>
                                            {icon}
                                        </ListItemIcon>
                                        {text}
                                    </span>
                                </ListItem>
                                </Link>
                            ))
                        }
            </Drawer>
        </div>
    )
}
const useStyles = makeStyles((theme)=>({
    root:{
        background: "linear-gradient(90deg ,#616d71,#393d42)",
        top: 0,
        left:0,
        right:0,
        zIndex:999 
    },
    toolbar:{
        display: "flex",
        justifyContent: "flex-start",
        alignItems:"center"
    },
   logo: {
       height: "4.5rem",
       objectFit:'contain',
       "&:hover" : {
           cursor: "pointer"
       }
   },
   menu: {
       [theme.breakpoints.down("sm")]: {
           display:"none"
       },
       "& a": {
           color: "#e04f5f",
           fontSize: "1.4rem",
           fontWeight:"bold",
           marginLeft: theme.spacing(3)
       },
       "& a:hover" : {
        cursor: "pointer",
        color: "#ffffff",
        borderBottom: "3px solid #e04f5f"
    }
   },
   menuButton:{
       display:"none",
       [theme.breakpoints.down("sm")]: {
           display:"block",
           color: "#e04f5f",
           position: "absolute",
           top:0,
           right: 10
       }
   },
   sidebar:{
    background: "linear-gradient(90deg ,#616d71,#393d42)",
       width:"40vw",
       [theme.breakpoints.down('sm')]:{
           width:"60vw"
       },
       "& h5": {
           margin: theme.spacing(5,0,0,4),
           fontSize:"1.4rem"
           
       },
       "& h5:hover": {
        cursor: "pointer",
        
    } 
   },
   sidebarIcon: {
    color:"#ffffff",
    fontWeight: "bold"
   },
   sidebarItem:{
    color:"#ffffff",
    fontWeight: "bold",
    "&:hover":{
        color: "#e04f5f"
        
    }
   },
   cancelIcon: {
    color: "#e04f5f",
    position: "absolute",
    top:0,
    right:10,

   },
   objectIcon:{
    color: "#ffffff",
    "&:hover":{
        color: "#e04f5f",
    }
   }
  }))
export default Navbar;
