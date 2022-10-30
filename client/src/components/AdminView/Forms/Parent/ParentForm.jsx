import { Button } from "@material-ui/core";
import React from "react";
import "./Parent.css";

function ParentForm() {
  return (
    <div className="new">
      <div className="top">
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
          <form>
            <div className="formInput">
              <label>Address:</label>
              <input type="text" placeholder="Address" />
            </div>
            <div className="formInput">
              <label>Phone Number:</label>
              <input type="text" placeholder="Phone_number" />
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
              <input type="password"  />
            </div>
            <div className="formInput">
            <Button variant="contained" color="primary" style={{
                width: "450px",
                // marginTop: "15px",
                marginLeft: "55px",
                alignItems: "center",
              }}
              type="submit">Send</Button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default ParentForm;
