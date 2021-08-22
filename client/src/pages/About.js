import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        fontSize: 50
    },
    body: {
        fontSize: 25
    }
}));

const About = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} justifyContent="stretch">
                    <Paper className={classes.paper}>
                        <Typography className={classes.title} color="textSecondary">
                            Welcome!
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            Add info about shizo affective disorder here with links to sources and what such. 
                            <br></br>
                            Explain what the fund is... the goals of it, why it exists and where it plans to go in the future.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};

export default About;
