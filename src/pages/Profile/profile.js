import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react"
import { getUserDetailsServices, updateUserDetailsServices } from "../../services/profileAPI";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const initialData = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
    gender: ""
}
const Profile = () => {
    const [data, setData] = useState(initialData);
    const [editmode, setEditMode] = useState(false);
    const userDetails = useSelector(state => state?.login?.userDetails);
    const userId = userDetails?.id;

    useEffect(() => {
        getUserDetailsServices(userId).then(res => {
            setData(res?.data)
        }
        )
    }, []);
    const onChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });

    }
    const onUpdate = () => {
        updateUserDetailsServices(userId, data);
        setEditMode(false);
    }

    return (
        <div>

            <Box
                sx={{
                    width: 500,
                    border: "2px solid #ccc",
                    margin: "30px",
                    marginLeft: "20%",
                    marginTop: "10%",
                    padding: "24px"

                }}
            >
                <Grid container spacing={2}>

                    <Grid item xs="6">
                        <Typography variant="h6" component="h6">
                            Profile
                        </Typography>
                    </Grid>
                    <Grid item xs="6">
                        {editmode ?
                            <Button variant="contained" onClick={onUpdate}>Update</Button> :
                            <Button variant="contained" onClick={() => setEditMode(true)}>Edit</Button>
                        }
                    </Grid>
                    <Grid item xs="6">
                        <TextField
                            required
                            disabled={!editmode}
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            name="firstName"
                            onChange={onChange}
                            value={data.firstName}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs="6">
                        <TextField
                            name="middleName"
                            required
                            fullWidth
                            id="outlined-basic"
                            label="MiddleName"
                            variant="outlined"
                            onChange={onChange}
                            value={data.middleName}
                            disabled={!editmode}
                        />
                    </Grid>
                    <Grid item xs="6">
                        <TextField
                            name="lastName"
                            required
                            fullWidth
                            id="outlined-basic"
                            label="LastName"
                            variant="outlined"
                            onChange={onChange}
                            value={data.lastName}
                            disabled={!editmode}
                        />
                    </Grid>
                    <Grid item xs="6">
                        <TextField
                            name="email"
                            required
                            disabled
                            fullWidth
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            onChange={onChange}
                            value={data.email}
                        />
                    </Grid>

                    <Grid item xs="6">
                        <TextField
                            name="password"
                            disabled={!editmode}
                            fullWidth
                            type="password"
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            onChange={onChange}
                            value={data.password}
                        />
                    </Grid>
                    <Grid item xs="6">
                        <TextField
                            name="contact"
                            required
                            disabled={!editmode}
                            fullWidth
                            id="outlined-basic"
                            label="Contact"
                            variant="outlined"
                            onChange={onChange}
                            value={data.contact}
                        />
                    </Grid>
                    <Grid item xs="12">
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                onChange={onChange}
                                value={data.gender}
                                disabled={!editmode}
                                name="gender"
                                aria-labelledby="demo-radio-buttons-group-label"


                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                </Grid>
            </Box>

        </div>

    )
}


export default Profile;