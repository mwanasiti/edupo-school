import { Button, Container, Grid, Input, TextField } from "@material-ui/core";
import { DriveFolderUpload, Email } from "@mui/icons-material";
import React, { useState } from "react";
import Sidebar from "../../BarRoutes/Sidebar";
import axios from "axios";
import "./Student.css";
import { useNavigate } from "react-router-dom";

function StudentForm() {
  let navigate = useNavigate()
  const [file, setFile] = useState("");
  const [data, setData] = useState({
    gender: "",
    image: "",
    parent_id: "",
    phone_no: "",
    admission_no: "",
    subject_id: "",
    full_name: "",
    email: "",
    password: "",
    classroom_id: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form");

    axios
      .post("/students", {
        gender: data.gender,
        image: data.image,
        parent_id: data.parent_id,
        phone_no: data.phone_no,
        admission_no: data.admission_no,
        subject_id: data.subject_id,
        full_name: data.full_name,
        email: data.email,
        password: data.password,
        classroom_id: data.classroom_id,
        username: data.username,
        role:"student"
      })
      .then((response) => {
        setData(response);
        navigate("/studenttable")
      });
  };

  return (
    <div className="bigParent">
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={7} xs={10} lg={9}>
          
          <div className="studentTopic">Add Student</div>
          <div className="new">
          
            <form className="formstd" onSubmit={handleSubmit}>
            
              <div className="juu_left">
                <div className="area">
                  
                     Gender: <Input placeholder="Enter gender"  style={{marginLeft:"20px"}}
                      name="gender"
                      type="text"
                      onChange={handleChange}
                     />
                </div>
                <div className="area">
                  
                     Image: <Input   style={{marginLeft:"30px"}}
                      name="image"
                      type="text"
                      placeholder="Enter image link"
                      onChange={handleChange}
                     />
                </div>
                <div className="area">
                  
                     Parent: <Input placeholder="Enter Parent ID"  style={{marginLeft:"30px"}}
                      name="parent_id"
                      type="text"
              
                      onChange={handleChange}
                     />
                </div>
                <div className="area">
                  
                      Phone:<Input placeholder="Enter phone no"  style={{marginLeft:"30px"}}
                        name="phone_no"
                      type="text"
                      onChange={handleChange}
                      />
                </div>
                <div className="area">
                  
                    RegNo:<Input   style={{marginLeft:"30px"}}
                      name="admission_no"
                      type="text"
                      placeholder="Enter admission_no"
                      onChange={handleChange}
                    />
                </div>
                <div className="area">
                  
                  
                      Subject:<Input   style={{marginLeft:"30px"}}
                        name="subject_id"
                      type="text"
                      placeholder="Enter Subject Id"
                      onChange={handleChange}
                      />
                </div>
              </div>
              <div className="chini_right">
              <div className="area">
                  
                      Name:  <Input   style={{marginLeft:"30px"}}
                        name="full_name"
                      type="text"
                      placeholder=" Enter Full name"
                      onChange={handleChange}
                      />
                </div>
                <div className="area">
                 
                      Email:  <Input  style={{marginLeft:"30px"}}
                        name="email"
                      type="text"
                      placeholder="Enter Email"
                      onChange={handleChange}
                      />
                </div>
                <div className="area">
                 
                      Password:<Input placeholder="Enter Password"  style={{marginLeft:"30px"}}
                        name="password"
                      type="password"
                      onChange={handleChange}
                      />
                </div>
                <div className="area">
                  
                      Classroom:<Input  style={{marginLeft:"30px"}}
                        name="classroom_id"
                      type="text"
                      placeholder="Enter Classroom  ID"
                      onChange={handleChange}
                      />
                </div>
                
                <div className="area">
                  
                      Username:<Input   style={{marginLeft:"30px"}}
                        name="username"
                      type="text"
                      placeholder="Enter Username"
                      onChange={handleChange}
                      />
                        <div className="formbutton">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: "150px",
                    marginTop:"90px",
                    // marginBottom: "5px",
                    marginLeft: "-9px",
                    alignItems: "center",
                  }}
                  type="submit"
                >
                  Send
                </Button>
              </div>
                </div>
                
                
              </div>
              

            </form>
          </div>
         
        </Grid>
      </Grid>
    </div>
  );
}

export default StudentForm;
