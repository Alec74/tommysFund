import React, { useState, useEffect } from 'react';
// import two from "..//images/IMG_1542.JPG";
// import { Card1, Card2, Card3, Card4 } from '../components/mediaCards/card1';
import Card1 from '../components/mediaCards/card1';
import Card2 from '../components/mediaCards/card2';
import Card3 from "../components/mediaCards/card3";
import Card4 from "../components/mediaCards/card4";

// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'

import img1 from '../images/IMG_1380.jpg';
import img2 from '../images/IMG_4139.jpg';
import img3 from '../images/IMG_4206.PNG';
import img4 from '../images/IMG_8461.jpg';
import img5 from '../images/IMG_1031.jpg';
import img6 from '../images/IMG_1045.jpg';
import img7 from '../images/IMG_2606.JPG';
import img8 from '../images/IMG_2652.jpg';


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
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div id="homeHero"></div>
                    <Paper id="space" className={classes.paper}>
                        <h2>
                            In Memoriam to Thomas McGlone
                        </h2>
                    </Paper>
                    <Paper id="carousel" className={classes.paper}>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3 id="txtOutline">Family "Portrait"</h3>
                                    <p>-Circa 2019</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img2}
                                    alt="Second slide"
                                    id="cEdit"
                                />
                                <Carousel.Caption>
                                    <h3 id="txtOutline">Baby Tom</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3 id="txtOutline">Senior Night</h3>
                                    <p>
                                        -Circa 2013
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img4}
                                    alt="Fourth slide"
                                />
                                <Carousel.Caption>
                                    <h3 id="txtOutline">New Brother</h3>
                                    <p style={{color:'black'}}>-Circa 1997</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img5}
                                    alt="Fifth slide"
                                />
                                <Carousel.Caption>
                                    <h3 id="txtOutline">Happy 25th!</h3>
                                    <p style={{color:'black'}}>-Circa 2020</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img6}
                                    alt="Sixth slide"
                                />
                                <Carousel.Caption>
                                    <h3 id="txtOutline">Father and Son</h3>
                                    <p style={{color:'black'}}>-Circa 1999</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img7}
                                    alt="Seventh slide"
                                />
                                <Carousel.Caption>
                                    <h3 id="txtOutline">Alumni and High School Football Coach</h3>
                                    <p>-Circa 2019</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img8}
                                    alt="Eighth slide"
                                />
                                <Carousel.Caption>
                                    <h3 id="txtOutline">Happy Thanksgiving!</h3>
                                    <p style={{color:'black'}}>-Circa 2019</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                        </Carousel>
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
            <div id="marginBottom"></div>
        </div>
    );
}
