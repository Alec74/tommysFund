// import React, { useState, useEffect } from 'react';
// import two from "..//images/IMG_1542.JPG";
// import { Card1, Card2, Card3, Card4 } from '../components/mediaCards/card1';
import Card1 from '../components/mediaCards/card1';
import Card2 from '../components/mediaCards/card2';
import Card3 from "../components/mediaCards/card3";
import Card4 from "../components/mediaCards/card4";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h2>
                            In Memoriam to Thomas McGlone
                        </h2>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}><Card2 /></Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}><Card1 /></Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}><Card3 /></Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}><Card4 /></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>
                            The Tom Fund's Mission Statement
                        </h1>
                        <h3>
                            Provide funds and resources to explore,
                            learn, and improve the lives of those suffering
                            from mental illness to improve their health care,
                            professional, and/or educational pursuits.
                        </h3>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
