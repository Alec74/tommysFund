import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import Two from "..//images/IMG_1542.JPG";
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


import song1 from '../music/My_Brain.mp3';
import song2 from '../music/What_Can_I_Become.mp3';
import song3 from '../music/Living_Off_The_Government.mp3';
import song4 from '../music/SOS(Cover).mp3';
import song5 from '../music/ImStillAlive(originalVersion).mp3';
import song6 from '../music/StartAgain.mp3';


// import {useState, useEffect} from 'react';
import Player from '../components/Player/Player';



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


    const [songs] = useState([
        {
            title: "My Brain",
            artist: "Thomas McGlone",
            img_src: "https://cdn.pixabay.com/photo/2020/01/02/10/15/background-image-4735444_1280.png",
            src: song1
        },
        {
            title: "What Can I Become",
            artist: "Thomas McGlone",
            img_src: "https://www.publicdomainpictures.net/pictures/130000/nahled/textured-background-14428431021FT.jpg",
            src: song2
        },
        {
            title: "Living Off The Government",
            artist: "Thomas McGlone",
            img_src: "https://cdn.pixabay.com/photo/2020/02/24/18/05/background-4876988_1280.jpg",
            src: song3
        },
        {
            title: "SOS (Cover)",
            artist: "Thomas McGlone",
            img_src: "https://www.maxpixel.net/static/photo/1x/Cyan-Paint-Background-Zoom-Zoom-Background-Blue-6019528.jpg",
            src: song4
        },
        {
            title: "Im Still Alive (Original Version)",
            artist: "Thomas McGlone",
            img_src: "https://www.stockvault.net/data/2019/11/25/270700/preview16.jpg",
            src: song5
        },
        {
            title: "Start Again",
            artist: "Thomas McGlone",
            img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcH8pY4QT80k0PrqyJPzsqEY1ZkJtmEWPqxg&usqp=CAU",
            src: song6
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex]);


    return (
        <>
            <div>
                <br></br>
                <Typography className={classes.title} id="center" color="textSecondary">
                    Music of Tom's
                </Typography>
                <br></br>
                
                <div className="App">
                    <Player
                        currentSongIndex={currentSongIndex}
                        setCurrentSongIndex={setCurrentSongIndex}
                        nextSongIndex={nextSongIndex}
                        songs={songs}
                    />
                </div>
                <br />
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={3}>
                        <FirstSongCard />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <SecondSongCard />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <ThirdSongCard />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FourthSongCard />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FifthSongCard />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <SixthSongCard />
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="light"><a href="https://soundcloud.com/tmcg45" target="_blank">Link to his soundcloud</a></Button>
                <br></br>
                <br />
            </div>
        </>
    )
};

export default Memories;
