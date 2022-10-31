import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import "./TForm.css";
import Sidebar from "../../BarRoutes/Sidebar";

function TeacherForm() {
  const [file, setFile] = useState("");
  // console.log(file);

  return (
    <div>
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>

        <Grid item sm={4} xs={2} lg={2}>
          <div className="new">
            <div className="top">
              <h1>Add Teacher</h1>
            </div>
            <div className="bottom">
              <div className="left">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : "https://i.pinimg.com/564x/a9/cc/d7/a9ccd7f3b82fc8b70c6d75a299302001.jpg"
                  }
                  alt="profile"
                />
              </div>
              <div className="right">
                <form>
                  <div className="formInput">
                    <label>Gender:</label>
                    <input type="text" placeholder="Gender" />
                  </div>
                  <div className="formInput">
                    <label htmlFor="file">
                      Upload Image:{" "}
                      <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input
                      type="file"
                      id="file"
                      style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>

                  <div className="formInput">
                    <label>Phone Number:</label>
                    <input type="text" placeholder="Phone_number" />
                  </div>
                  <div className="formInput">
                    <label>Address:</label>
                    <input type="text" placeholder="Address" />
                  </div>
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

export default TeacherForm;
