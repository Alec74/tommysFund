import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import two from "..//images/IMG_1542.JPG";
import ContactForm from '../components/contactForm/Contact';


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
    },
    setup: {
        backgroundImage: two
    }
}));

const ContactUs = () => {
    const classes = useStyles();


    return (
        <div className={classes.root} >
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}  >
                    <ContactForm></ContactForm>
                </Grid>
            </Grid>
        </div>
    )
};

export default ContactUs;
