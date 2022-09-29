import React, { useState } from 'react';
import{useNavigate} from"react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateFirstName, updateMiddleName, updateLastName, updateEmail,
    updateContact, updatePassword, updateGender
} from '../../redux/registartionSlice';
import  RegistrationService  from '../../services/registartionAPI';


const Registration= () => {
    const [message,setMessage]=useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector(state => state.registartion)
    const { firstName, middleName, lastName, email, password, contact, gender } = data;

    const regClick = () => {
        Registration(data).then(res => {
            setMessage(false);
            console.log("success",res);
            setMessage(true);
        }).catch(error => {
            console.log("error",error);
        })
    }
    const backClick=() =>{
        navigate("/login")
    }

    return (
        <Box
            sx={{
                width: 500,
                border: "2px solid #ccc",
                margin: "30px",
                marginLeft: "20%",
                marginTop: "10%",
                padding:"24px"
            
    

            }}
        >
            <Grid container spacing={2}>
                { message &&
                    <Alert severity="success"> user registarted successful</Alert>
                }
                <Grid item xs="12">
                    <Typography variant="h6" component="h6">
                        Registration
                    </Typography>
                </Grid>
                <Grid item xs="6">
                    <TextField
                        required
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        onChange={e => dispatch(updateFirstName(e.target.value))}
                        value={firstName}
                        fullWidth
                    />
                </Grid>
                <Grid item xs="6">
                    <TextField
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Middlename"
                        variant="outlined"
                        onChange={e => dispatch(updateMiddleName(e.target.value))}
                        value={middleName}
                    />
                </Grid>
                <Grid item xs="6">
                    <TextField
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Lastname"
                        variant="outlined"
                        onChange={e => dispatch(updateLastName(e.target.value))}
                        value={lastName}
                    />
                </Grid>
                <Grid item xs="6">
                    <TextField
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        onChange={e => dispatch(updateEmail(e.target.value))}
                        value={email}
                    />
                </Grid>

                <Grid item xs="6">
                    <TextField
                    fullWidth
                        type="password"
                    
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        onChange={e => dispatch(updatePassword(e.target.value))}
                        value={password}
                    />
                </Grid>
                <Grid item xs="6">
                    <TextField
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Contact"
                        variant="outlined"
                        onChange={e => dispatch(updateContact(e.target.value))}
                        value={contact}
                    />
                </Grid>
                <Grid item xs="12">
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            onChange={e => dispatch(updateGender(e.target.value))}
                            value={gender}
                            aria-labelledby="demo-radio-buttons-group-label"

                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs="6">
                    <Button fullWidth variant="contained" onClick={regClick}>Registration</Button>
                </Grid>
                <Grid item xs="6">
                    <Button fullWidth variant="contained" onClick={backClick}>Backto Login</Button>
                </Grid>
            </Grid>
        </Box>
    );
}



export default Registration;
