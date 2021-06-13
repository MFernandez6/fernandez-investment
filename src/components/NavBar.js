import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.jpg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <Typography variant="h6" className={classes.menuItem}>
                   About Us
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Our Services
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Our Approach
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    News 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <CustomBtn txt="Speak with an adviser"/>
            </Toolbar>
    )
}

export default NavBar