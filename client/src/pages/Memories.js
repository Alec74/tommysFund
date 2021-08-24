import React, { useState, useEffect } from 'react';
import Two from "..//images/IMG_1542.JPG";
// import Demo from '../components/playButtons/Song1'
import FirstSongCard from '../components/musicCards/FirstSongCard';
import SecondSongCard from '../components/musicCards/SecondSongCard';

import Grid from '@material-ui/core/Grid';

const Memories = () => {



    return (
        <>
            <div>
                <br></br>
                <Grid container spacing={10} justifyContent="center" direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <FirstSongCard />
                        <SecondSongCard />
                    </Grid>
                </Grid>
            </div>
        </>
    )
};

export default Memories;
