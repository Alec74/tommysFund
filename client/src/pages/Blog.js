import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SignupCard from '../components/logCards/signupCard';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';


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


function Blog(props) {
    const classes = useStyles();
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                username: formState.username,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className={classes.root}>
            <Grid container 
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={10}>
                <Grid item xs={12} spacing={10}>
                    <Paper className={classes.paper}>
                        {/* <form onSubmit={handleFormSubmit}>
                            <TextField required id="standard-required" label="Username" onChange={handleChange} />
                            <TextField required id="standard-required" label="Email" onChange={handleChange} />
                            <TextField
                                required id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                            <Button variant="outlined" type="submit">Signup</Button>
                        </form> */}
                        <SignupCard/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        // <div className="container my-1">
        //     <Link to="/login">← Go to Login</Link>

        //     <h2>Blog</h2>
        //     <form onSubmit={handleFormSubmit}>
        //         <div className="flex-row space-between my-2">
        //             <label htmlFor="username">Username:</label>
        //             <input
        //                 placeholder="First"
        //                 name="username"
        //                 type="username"
        //                 id="username"
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div className="flex-row space-between my-2">
        //             <label htmlFor="email">Email:</label>
        //             <input
        //                 placeholder="youremail@test.com"
        //                 name="email"
        //                 type="email"
        //                 id="email"
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div className="flex-row space-between my-2">
        //             <label htmlFor="pwd">Password:</label>
        //             <input
        //                 placeholder="******"
        //                 name="password"
        //                 type="password"
        //                 id="pwd"
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div className="flex-row flex-end">
        //             <button type="submit">Submit</button>
        //         </div>
        //     </form>
        // </div>
    );
}

export default Blog;
