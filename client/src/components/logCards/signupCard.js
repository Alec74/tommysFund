import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SignupCard() {
    // const classes = useStyles();
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

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    Signup to add comments
                </Typography>
            </CardContent>
            <CardContent>
                <form onSubmit={handleFormSubmit} >
                    {/* <div style={{padding: 20px}}> */}
                        <TextField style={{margin: '10px'}} required id="standard-required" label="Username" onChange={handleChange} />
                        <br></br>
                        <TextField style={{margin: '10px'}} required id="standard-required" label="Email" onChange={handleChange} />
                        <br></br>
                        <TextField style={{margin: '10px'}}
                            required id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                        />
                        <br></br>
                        <Button style={{margin: '10px'}} variant="outlined" type="submit">Signup</Button>
                    {/* </div> */}
                </form>
            </CardContent>
        </Card>
    );
}
