import React from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import Grid from '../components/Grid'
import Carousel from '../components/Carousel'
import '../App.css';

//changes to imports 
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ApartmentIcon from '@material-ui/icons/Apartment';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GavelIcon from '@material-ui/icons/Gavel';
import HttpIcon from '@material-ui/icons/Http';



const theme = createMuiTheme({
        palette: {
        primary: {
            main:"#2e1667",
        },
        secondary: {
            main:"#c7d8ed",
        },
        },
        typography: {
        fontFamily: [
            'Roboto'
        ],
        h4: {
            fontWeight: 600,
            fontSize: 28,
            lineHeight: '2rem',
            },
        h5: {
            fontWeight: 100,
            lineHeight: '2rem',
        },
        },
    });
    
    const styles = makeStyles({
        wrapper: {
        width: "65%",
        margin: "auto",
        textAlign: "center"
        },
        bigSpace: {
        marginTop: "5rem"
        },
        littleSpace:{
        marginTop: "2.5rem",
        },
        grid:{
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap", 
        },
    })
    
    function Home () {
        const classes = styles(); 
    
        return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h4" className={classes.littleSpace} color="primary">
                        Fernandez Investment Firm, LLC ("FIF") is a strategic wealth management and consulting firm centered around family values and principles.
                        <p></p>
                    </Typography>
                    <Carousel/>
                    <Typography variant="h5" className={classes.littleSpace} color="primary">
                    <b>Protect What Matters the Most</b>
                    <p>Whether it's preparing for retirement, or a pandemic, we're here to make sure you're protected through any event. Our mission is to assist you in building the foundation of success through sound principles, and financial strategies.</p>
                    </Typography>
                </div>
                <div className={`${classes.grid} ${classes.bigSpace}`}>
                    <Grid icon={<AccountBalanceIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Financial Services" btnTitle="Show me More" />
                    <Grid icon={<ApartmentIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Real Estate Investment" btnTitle="Show me More"/>
                    <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Trading Services" btnTitle="Show me More"/>
                    <Grid icon={<GavelIcon style={{fill: "#7C4A0C", height:"125", width:"125"}}/>}  title="Legal Services" btnTitle="Show me More"/>
                    <Grid icon={<HttpIcon style={{fill: "#3E3767", height:"125", width:"125"}}/>} title="Information Technology" btnTitle="Show me More"/>
                </div>
                <div className={classes.wrapper}>
                    <Typography variant="h5" className={classes.littleSpace} color="primary">
                    Our way is rooted in a deep commitment to academia, experience, and technology. This commitment means clients have seen results from 21st century strategies that are unparalleled in today's market.
                    </Typography>
                </div>
                <p></p>
            </ThemeProvider >
        </div>
        );
    }
    
    export default Home;