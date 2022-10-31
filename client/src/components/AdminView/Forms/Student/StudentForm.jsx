<<<<<<< HEAD
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { DriveFolderUpload } from "@mui/icons-material";
import React from "react";
import Sidebar from "../../BarRoutes/Sidebar";

function StudentForm() {
  return (
    <div className="bigParent">
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={7} xs={10} lg={9}>
          <h1>Student Form</h1>
          <div className="new">
            <div className="top">
              <h1>Add Student</h1>
            </div>
            <div className="bottom">
              <div className="left">
                left
                <img
                  src="https://i.pinimg.com/564x/a9/cc/d7/a9ccd7f3b82fc8b70c6d75a299302001.jpg"
                  alt="profile"
                />
              </div>
              <div className="right">
                <form>
                  <div className="formInput">
                    <label>Gender:</label>
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="formInput">
                    <label>Parent Id:</label>
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="formInput">
                    <label>Phone Number:</label>
                    <input type="text" placeholder="Phone_number" />
                  </div>
                  <div className="formInput">
                    <label>Admission Number:</label>
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="formInput">
                    <label>Subject Id:</label>
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="still">
                    <div className="formInput">
                      <label>Full Name:</label>
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="formInput">
                      <label>Email:</label>
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="formInput">
                      <label>Password:</label>
                      <input type="password" />
                    </div>
                  </div>
                  <div className="formInput">
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        width: "450px",
                        // marginTop: "15px",
                        marginLeft: "55px",
                        alignItems: "center",
                      }}
                      type="submit"
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default StudentForm;
=======
import { Button, Container, FormControl, FormControlLabel, FormHelperText, FormLabel, Input, InputLabel, makeStyles, OutlinedInput, Radio, RadioGroup, TextField} from '@material-ui/core'
import { Dashboard, Delete, Edit, Save, Send, ViewAgenda } from '@material-ui/icons'
import { borderRadius } from '@mui/system';
import React from 'react'



const useStyles = makeStyles(theme=>({
  button:{
    color: "white",
    backgroundColor: "black"
  }, 
  container:{
    paddingTop: theme.spacing(3),
  }
}));


function StudentForm() {
  const classes = useStyles();
  return (
  
    <Container className={classes.container}>
    <div>
    
    {/* <FormControl>
      <OutlinedInput placeholder="Gender" />
      <OutlinedInput placeholder="Image" />
      <OutlinedInput placeholder="Parent Id" />
      <OutlinedInput placeholder="Phone Number" />
      <OutlinedInput placeholder="Admission Number" />
      <OutlinedInput placeholder="Subject ID" />
      <OutlinedInput placeholder="Full Name" />
      <OutlinedInput placeholder="Email" />
      <Button variant="contained" color="primary" size="large" startIcon={<Save/>}>Save</Button>
    </FormControl> */}
    {/* // BUTTONS */}
    {/* <Button variant="outlined" color="secondary"size="large" startIcon={<Delete/>}>Delete</Button>
    <Button variant="outlined" color="secondary"  size="large" startIcon={<Send />}>Submit</Button>
    <Button variant="outlined"  size="large" startIcon={<Edit />}className ={classes.button}>Edit</Button>  
    <Button variant="outlined" color="secondary" size="large" startIcon={<Dashboard/>}>Dashboard</Button>
    <Button variant="outlined" color="secondary" size="large" startIcon={<Save/>}>Save</Button> */}
    
    
    </div>
    <form className={classes.form} autoComplete="off" style={{border:"1px solid grey", borderRadius:"10px", padding:"10px", alignText:"center", marginLeft:"200px", width:"600px"}}>
    <div className={classes.item}>
    <FormLabel id="demo-radio-buttons-group-label">Gender:</FormLabel>
   
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1"> Male </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2"> Female</label>
</div>

{/* <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2"> Female</label>
</div> */}
    {/* <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    size ="small"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    
  </RadioGroup>  */}
    </div>
    {/* IMAGE */}
    <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Image:</FormLabel>
        <TextField id="outlined-basic" variant="outlined"  size="small" style={{width:"100%"}}/>
      </div>
    {/* PARENT ID */}
    <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Parent ID:</FormLabel>
        <TextField id="outlined-basic" variant="outlined"  size="small" style={{width:"100%"}}/>
      </div>
    {/* PHONE NO */}
    <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Phone Number:</FormLabel>
        <TextField id="outlined-basic" variant="outlined"  size="small" style={{width:"100%"}}/>
      </div>
    {/* ADDMISSION NO */}
    <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Admission Number:</FormLabel>
        <TextField id="outlined-basic" variant="outlined" size="small" style={{width:"100%"}}/>
      </div>
    {/* SUBJECT ID */}
    <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Subject ID:</FormLabel>
        <TextField id="outlined-basic" variant="outlined"  size="small" style={{width:"100%"}}/>
      </div>
    {/* FULL NAME */}
    <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Full Name:</FormLabel>
        <TextField id="outlined-basic" variant="outlined" size="small" style={{width:"100%"}}/>
      </div>
    {/* EMAIL */}
     <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Email:</FormLabel>
        <TextField id="outlined-basic" variant="outlined"  size="small" style={{width:"100%"}}/>
      </div>
      <div>
      <Button variant="contained" color="primary" size="large" startIcon={<Save/>} style={{width:"400px", marginTop:"15px", alignItems:"center", marginLeft:"80px"}}>Save</Button>
      </div>
    </form>
    </Container>
    
  )
}

export default StudentForm
>>>>>>> deno
