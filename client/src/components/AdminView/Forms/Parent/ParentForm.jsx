import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Sidebar from "../../BarRoutes/Sidebar";
import "./Parent.css";
import axios from "axios";

function ParentForm() {
  const [parent, setParent] = useState({
    address: "",
    phone_no: "",
    full_name: "",
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParent({ ...parent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form");

    axios.post("/parents", {
        address: data.address,
        phone_no: data.phone_no,
        full_name: data.full_name,
        email: data.email,
        password: data.password,
        username: data.username,
      })
      .then((response) => {
        setParent(response);
      });
  };

  return (
    <div className="bigParent">
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={7} xs={10} lg={9}>
          <div className="new">
            <div className="">
              <h1>Add Parent</h1>
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
                <form onSubmit={handleSubmit}>
                  <div className="formInput">
                    <label>Address:</label>
                    <input type="text" placeholder="Address" onChange={handleChange}/>
                  </div>
                  <div className="formInput">
                    <label>Phone Number:</label>
                    <input type="text" placeholder="Phone_number" onChange={handleChange}/>
                  </div>
                  <div className="formInput">
                    <label>Full Name:</label>
                    <input type="text" placeholder="Full Name" onChange={handleChange}/>
                  </div>
                  <div className="formInput">
                    <label>Email:</label>
                    <input type="text" placeholder="Email"onChange={handleChange} />
                  </div>
                  <div className="formInput">
                    <label>Password:</label>
                    <input type="password" onChange={handleChange}/>
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

export default ParentForm;
