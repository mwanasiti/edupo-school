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
