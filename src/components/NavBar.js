import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logos/logo.jpg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import {Link} from 'react-router-dom'

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
            flexDirection: "column"
            }
    },
    logo: {
        width: "17%", 
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
                <Link to="/" variant="h6" className={classes.menuItem}>
                    Home
                </Link>
                <Link link to="/about" variant="h6" className={classes.menuItem}>
                    About us
                </Link>
                <Link to="/approach" variant="h6" className={classes.menuItem}>
                    Our Approach
                </Link>
                <Link to="/services" variant="h6" className={classes.menuItem}>
                    Our Services 
                </Link>
                <Link to="/clients" variant="h6" className={classes.menuItem}>
                    Our Clients 
                </Link>
                <Link to="/news" variant="h6" className={classes.menuItem}>
                    News 
                </Link>
                <Link to="/contact" variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Link>
                <CustomBtn txt="chat with an adviser"/>
            </Toolbar>
    )
}

export default NavBar