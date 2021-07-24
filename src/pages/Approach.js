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
    
    function Approach () {
        const classes = styles(); 
    
        return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h4" className={classes.littleSpace} color="primary">
                    Building Trust That Lasts a Lifetime.
                    </Typography>

                    <Typography variant="h6" className={classes.littleSpace} color="primary">
                    Years of experience have prepared our advisers and consultants to guide you through life's milestones. At Fernandez Investment, we create financial strategies to get you where you want to go.

                    <p>Our approach is based on uninterrupted observance of the financial markets, as well as, keen insights into the direction of the futures markets. </p>
                    </Typography>


                    <Typography variant="h4" className={classes.littleSpace} color="primary">
                    Experienced Derived from Different Backgrounds.
                    </Typography>

                    <Typography variant="h6" className={classes.littleSpace} color="primary">
                    In these uncertain and ever-evolving times, clients may feel an extra sense of confidence knowing Fernandez Investment has a team of individuals who possess expertise in a wide-ranging interests.
                    <p>Our advisers closely evaluate and examine changes in the financial market, technology, and government - adapting to new requirements and direction. </p>
                    </Typography>
                </div>
            </ThemeProvider >
        </div>
        );
    }
    
    export default Approach;