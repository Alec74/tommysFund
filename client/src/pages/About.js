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
        textAlign: 'left',
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
                        <Typography className={classes.title} color="textSecondary">
                            What is the TommyFund?
                        </Typography>
                        <Typography className={classes.body} color="body2">
                            The TommyFund is a fundraiser started by a family afflicted by Schizoaffective disorder.
                        </Typography>
                        <Typography className={classes.title} color="textSecondary">
                            Mission Statement
                        </Typography>
                        <Typography className={classes.body} color="body2">
                        Provide funds and resources to explore, 
                            learn, and improve the lives of those suffering
                            from mental illness to improve their health care, 
                            professional, and/or educational pursuits.
                        </Typography>
                        <Typography className={classes.title} color="textSecondary">
                            The Facts and Story
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            What is schizoaffective disorder?
                            A mental health condition including schizophrenia and mood disorder symptoms.
                            Schizoaffective disorder is a combination of symptoms of schizophrenia and mood disorder,
                            such as depression or bipolar disorder. Symptoms may occur at the same time or at different
                            times.
                            Schizoaffective disorder is a chronic mental health condition characterized primarily by
                            symptoms of schizophrenia, such as hallucinations or delusions, and symptoms of a mood
                            disorder, such as mania and depression.
                            <br></br>
                            
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};

export default About;
