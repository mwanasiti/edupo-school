// import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";




function handleAdminSubmit(e) {
    e.preventDefault();
    fetch("/admin_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
        navigate("/admin");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleTeacherSubmit(e) {
    e.preventDefault();
    fetch("/teacher_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
        navigate("/teacher");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


const Login=()=>{

    const paperStyle={padding :30,height:'50vh',width:280, margin:"150px auto"}
    const avatarStyle={backgroundColor:'#5072A7'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter usernmame' fullWidth required/>
                {/* <input
          required
          className=" mt-2 h-8 rounded-lg"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
               
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
               
               
            </Paper>
        </Grid>
    )
}

export default Login