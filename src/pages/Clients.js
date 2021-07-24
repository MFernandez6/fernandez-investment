import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import pichons from '../logos/pichons.jpg';
import Palm_Tree_logo from '../logos/Palm_Tree_logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function Clients () {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={pichons} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                <b>Pichon's Food Truck</b>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                A contemporary spin on classical dishes. 
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                est. 2020
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                Kendall, Florida
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        <br></br>
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={Palm_Tree_logo} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                <b>Miami Vending Solutions, LLC.</b>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Your vending solution from soda to snacks! 
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                est. 2021
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                Miami, Florida
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        <br></br>
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="https://fastdecals.com/shop/images/detailed/6/product_detailed_image_32703_2995.jpg" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                <b>Raleigh's Rentals, LLC.</b>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Easy vehicle rentals in the greater Miami area. 
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                est. 2022
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                Miami, Florida
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        <br></br>
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="https://easydraweverything.com/wp-content/uploads/2020/05/easy-to-draw-house-cartoon-0.png" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                <b>Fernandez Empire, LLC.</b>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Commercial property real-estate venture company. 
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                est. 2021
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                Miami, Florida
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        <br></br>
        </div>
    );
}

export default Clients