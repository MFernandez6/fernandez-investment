import React from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import '../App.css';

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
    
    function About () {
        const classes = styles(); 
    
        return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h3" className={classes.littleSpace} color="primary">
                        About Fernandez Investment
                    </Typography>
                    <Typography variant="h4" className={classes.littleSpace} color="primary">
                        Our Company
                    </Typography>
                    <Typography variant="h6" className={classes.littleSpace} color="primary">
                    Fernandez Investment Firm, LLC. ("FIF") is based in Miami, Florida. We are one of the world's most forward-thinking multi-asset investment firms that have produced results that have made an impact for our investors, businesses, and communities. 
                    <p>Our investment and strategy committee utilizes algorithms which scrutinize opportunities and produce unbiased evaluations.</p>
                    </Typography>

                    <Typography variant="h4" className={classes.littleSpace} color="primary">
                        Our Team
                    </Typography>
                    <Typography variant="h6" className={classes.littleSpace} color="primary">
                    <p><b>President & Chief Executive Officer </b>
                    Miguel Angel Fernandez</p>

                    <p><b>Chief Dog Officer </b>
                    Frankie Sinatra</p>

                    <p><b>Chief Pig Officer </b>
                    Lily Fernandez</p>

                    </Typography>
                    <Typography variant="h9" className={classes.littleSpace} color="primary"> 
                    Fernandez Investment Firm, LLC. is independently owned and managed by the Pincipals of the firm. The firm is regulated by FINRA (Financial Industry Regulation Authority).
                    </Typography>
                </div>
            </ThemeProvider >
        </div>
        );
    }
    
    export default About;