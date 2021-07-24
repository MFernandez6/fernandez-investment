import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core'; 
import FormLabel from '@material-ui/core/FormLabel';
import '../App.css'


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

const FORMSPARK_FORM_ID = "1DdFE7HZ";

const Contact = () => {
    const classes = styles(); 

    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

    const [message, setMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        await submit({ message });
        alert("Message has been delivered!");
    };

    
    return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Typography variant="h3" className={classes.littleSpace} color="primary">
                Contact Us
            </Typography>
            <div className={classes.root}>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <CardMedia
                        component="img"
                        alt="Message Icon"
                        image="https://www.androidpolice.com/wp-content/uploads/2021/05/27/Google-Messaged-Pinned-Conversations.png"
                        title="Message Icon"
                        />
                        <Card>
                            <Typography variant="h4" className={classes.littleSpace} color="primary">
                                Fernandez Investment Firm, LLC.
                            </Typography>
                            <hr></hr>
                            <Typography variant="h6"  color="primary">
                                <p>1700 Northwest North River Drive
                                <br></br>
                                Miami, Florida 33125
                                <br></br>
                                <a className={classes.bigSpace} href="www.facebook.com">www.FernandezInvestment.com</a>
                                <br></br>
                                t. 786.417.3869</p>
                            </Typography>
                        </Card>
                        <Typography variant="h5" className={classes.littleSpace} color="primary">
                            <form onSubmit={onSubmit}>
                                <div>
                                    <label>Name:</label>
                                    <br></br>
                                    <textarea value={message} id="message" className="border-2 p-2" onChange={(e) => setMessage(e.target.value)} />
                                    <br></br>
                                </div>
                                <div>
                                    <label>Email:</label>
                                    <br></br>
                                    <textarea value={message} id="message" className="border-2 p-2" onChange={(e) => setMessage(e.target.value)} />
                                    <br></br>
                                </div>
                                <div>
                                    <label>Message:</label>
                                    <br></br>
                                    <textarea value={message} id="message" className="border-2 p-2" onChange={(e) => setMessage(e.target.value)} />
                                    <br></br>
                                    <button type="submit" disabled={submitting} >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </ThemeProvider >
    </div>
    );
}


export default Contact;