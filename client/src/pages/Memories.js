import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Two from "..//images/IMG_1542.JPG";
// import Demo from '../components/playButtons/Song1'
import FirstSongCard from '../components/musicCards/FirstSongCard';
import SecondSongCard from '../components/musicCards/SecondSongCard';
import ThirdSongCard from '../components/musicCards/ThirdSongCard';
import FourthSongCard from '../components/musicCards/FourthSongCard';
import FifthSongCard from '../components/musicCards/FifthSongCard';
import SixthSongCard from '../components/musicCards/SixthSongCard';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button';

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

{/* <Paper className={classes.paper}>
                        <Typography className={classes.title} id="top" color="textSecondary">
                            Welcome!
                        </Typography>
                    </Paper> */}

const Memories = () => {
    const classes = useStyles();


    return (
        <>
            <div>
                <br></br>
                <Typography className={classes.title} id="center" color="textSecondary">
                    Music of Tom's
                </Typography>
                <br></br>
                <Grid container spacing={3}>

                    <Grid item xs={6} sm={3}>
                        <FirstSongCard />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <SecondSongCard />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <ThirdSongCard />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <FourthSongCard />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <FifthSongCard />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <SixthSongCard />
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="light"><a href="https://soundcloud.com/tmcg45" target="_blank">Link to his soundcloud</a></Button>
                <br></br>
            </div>
        </>
    )
};

export default Memories;
