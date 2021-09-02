import React, { useState, useEffect } from 'react';
import Two from "..//images/IMG_1542.JPG";
// import Demo from '../components/playButtons/Song1'
import FirstSongCard from '../components/musicCards/FirstSongCard';
import SecondSongCard from '../components/musicCards/SecondSongCard';
import ThirdSongCard from '../components/musicCards/ThirdSongCard';
import FourthSongCard from '../components/musicCards/FourthSongCard';

import Grid from '@material-ui/core/Grid';

const Memories = () => {



    return (
        <>
            <div>
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
                </Grid>
            </div>
        </>
    )
};

export default Memories;
