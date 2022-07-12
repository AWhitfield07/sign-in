//Login.js
import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, TextField, Checkbox, Button, Typography, Link, } from "@mui/material";
const Login=()=> {
    const paperStyle={
        padding: "30px",
        height: "70vh",
        width: 280,
        margin: "20px auto"
    }
    const btnstyle={
        margin:"5px 0"
    }
    const textfield={
        margin:"10px"
    }
    return(
         <Grid>
            <Paper elevation={10} style={paperStyle}>
                <img src={require("/workspace/Espn-Sign-in/espn-sign-in/src/components/Images/ESPNGREYLOGO.png")} width="100px"></img>
                <Grid align="center">
                </Grid>
        <TextField label="Username or email address" placeholder="Enter Username" fullWidth required></TextField>
        <TextField label="Password (case sensitive)" placeholder="Enter Password" type="password" fullWidth required></TextField>
            <Button
                type="Submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullwidth
                >
                    Sign in
            </Button>
            <Typography style={textfield}>
                    <Link href="#">
                        Need help logging in?
                    </Link>
            </Typography>
            <Typography style={btnstyle}>
                Facebook Login is no longer available. For help logging in please use the link above.
            </Typography>
            <Button
                type="Submit"
                color="primary"
                variant="outlined"
                style={btnstyle}
                fullWidth
                >
                    Sign up
            </Button>
        </Paper>
        </Grid>
    )
}
export default Login;