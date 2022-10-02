import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { updateEmail, updatePassword, updateUserDetails } from '../../redux/loginSlice';
import { LoginService } from '../../services/LoginApi';

const validationsMsgs = {
    userNameError: "",
    passwordError: ""

};
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [validations, setValidations] = useState(validationsMsgs);
    const data = useSelector(state => state.login);
    console.log("data");
    const { email, password } = (data);
    const onLoginClick = () => {
        if (validateFrom()) {
            LoginService({ email, password }).then(res => {
                dispatch(updateUserDetails(res.data));
                navigate("/dashbaroad");
            })
        }
    }
    const onregClick = () => {
        navigate("/registration");
    }
    const validateFrom = () => {
        let isValid = true;
        const msgs = {};
        if (!email) {
            msgs.userNameErrorMsg = "please fill  userName field";
            isValid = false;

        }
        if (email && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            msgs.userNameErrorMsg = "please fill  valid email";
            isValid = false;

        }

        if (!password) {
            msgs.passwordErrorMsg = "please fill  Password ";
            isValid = false;

        }
        setValidations(msgs);
        return isValid
    }

    return (
        <Box
            sx={{
                width: 600,
                border: "2px solid #ccc",
                padding: "24px",
                margin: "30px",
                marginLeft: "20%",
                marginTop: "10%"
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs="1">
                    <Typography variant="h6" component="h6">
                        Login
                    </Typography>
                </Grid>
                <Grid item xs="12">
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        onChange={e => dispatch(updateEmail(e.target.value))}
                        error={Boolean(validations.userNameErrorMsg)}
                        helperText={validations.userNameErrorMsg}
                    />
                </Grid>
                <Grid item xs="12">
                    <TextField
                        type="password"
                        fullWidth
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        onChange={e => dispatch(updatePassword(e.target.value))}
                        error={Boolean(validations.passwordErrorMsg)}
                        helperText={validations.passwordErrorMsg}
                    />
                </Grid>

                <Grid item xs="6">
                    <Button fullWidth variant="contained" onClick={onLoginClick}>Login</Button>
                </Grid>
                <Grid item xs="6">
                    <Button fullWidth variant="contained" onClick={onregClick}>Create Account</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
