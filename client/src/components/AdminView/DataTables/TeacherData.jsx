import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "./View.css";
import Sidebar from "../BarRoutes/Sidebar";

import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

import { Delete, Edit } from "@material-ui/icons";

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },

//   {
//     field: 'gender',
//     headerName: 'Gender',
//     width: 150,
//     editable: true,
//   },

//   {field: "user", headerName: "Image", width:230,
//   renderCell:(params)=>{
//     return(
//       <div  className='cellImg'>
//         <img  src="https://i.pinimg.com/564x/17/21/81/172181825b9ed4311d32f55a166ce295.jpg" alt=" Avatar"/>

//           {params.row.username}
//       </div>
//     )
//   }},
//   {
//     field: 'phone_no',
//     headerName: 'Phone Number',
//     // type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'address',
//     headerName: 'Address',
//     // type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullname',
//     headerName: 'FullName',
//     // type: 'text',
//     width: 150,
//     editable: true,
//   },

//   {
//     field: 'email',
//     headerName: 'Email',
//     // type: 'email',
//     width: 150,
//     editable: true,
//   }

//   // {
//   //   field: 'fullName',
//   //   headerName: 'Full name',
//   //   description: 'This column has a value getter and is not sortable.',
//   //   sortable: false,
//   //   width: 160,
//   //   valueGetter: (params) =>
//   //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   // },
// ];

// const rows = [
//   { id:1,gender:"Female", image:"PICTURE", phone_no:"074168868123",address:"23 wejumperide",fullname:"Jona Monica",email:"jon@gmail.com"},
//   { id:2,gender:"Male", image:"PICTURE", phone_no:"07468781123",address:"23 westside",fullname:"MauPete ",email:"mau@gmail.com"},
//   { id:3,gender:"Female", image:"PICTURE", phone_no:"07417811683",address:"2jumperestside",fullname:"Joaness Burg ",email:"jon@gmail.com"},
//   { id:4,gender:"Female", image:"PICTURE", phone_no:"07468781123",address:"23 westpoyide",fullname:"Petero Jui ",email:"jones@gmail.com"},
//   { id:5,gender:"Male", image:"PICTURE", phone_no:"0741781123",address:"23 wejumperide",fullname:"Wonderl Proof ",email:"proof@gmail.com"},
//   { id:6,gender:"Female", image:"PICTURE", phone_no:"0741781123",address:"23jumperstside",fullname:"Joyous Occasion ",email:"jon@gmail.com"},
//   { id:7,gender:"Male", image:"PICTURE", phone_no:"0741781123",address:"23 wpoystpoyide",fullname:"Won Bin",email:"won@gmail.com"},
//   { id:8,gender:"Male", image:"PICTURE", phone_no:"07468781123",address:"23 westpoyide",fullname:"Jun Pyo",email:"jun@gmail.com"},
//   { id:9,gender:"Female", image:"PICTURE", phone_no:"0741781123",address:"23 wjumperside",fullname:"Shae Pri",email:"prin@gmail.com"},
//   { id:10,gender:"Female", image:"PICTURE", phone_no:"0741781123",address:"23 westside",fullname:"Markus",email:"markusn@gmail.com"},
//   { id:12,gender:"Male", image:"PICTURE", phone_no:"074687816823",address:"23 jumpertside",fullname:" Jamal nski",email:"jamal@gmail.com"},
//   { id:13,gender:"Male", image:"PICTURE", phone_no:"06841781123",address:"23 westside",fullname:"Princess ski",email:"ski@gmail.com"},
//   { id:14,gender:"Female", image:"PICTURE", phone_no:"0741781123",address:"23jumpere",fullname:"Jo ki",email:"ki@gmail.com"},
//   { id:15,gender:"Male", image:"PICTURE", phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
//   { id:16,gender:"Female", image:"PICTURE", phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
//   { id:17,gender:"Male", image:"PICTURE", phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
//   { id:18,gender:"Male", image:"PICTURE", phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
//   { id:19,gender:"Female", image:"PICTURE", phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
//   { id:20,gender:"Female", image:"PICTURE", phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
//   { id:21,gender:"Male", image:"PICTURE", phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
//   { id:22,gender:"Male", image:"PICTURE", phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
//   { id:23,gender:"Female", image:"PICTURE", phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},

// ];

function TeacherData() {
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    fetch("/teachers")
      .then((response) => response.json())
      .then((human) => setTeacherData(human));
  }, []);

  function handleTeacherDelete(id){
    fetch(`/teachers/${id}`,{
      method: "DELETE",
    })
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data);
      if(data.errors){
        setErrors(data.errors)
      }
      const  updatedTeachers = teacherData.filter(
        (teacher)=> teacher.id !== data.id
      );
      setTeacherData(updatedTeachers);
    });
  }

  return (
    <div>
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={4} xs={2} lg={9}>
        <div className="studentTopic">
        <p>Teacher Table</p>
       </div>
          <TableContainer
            component={Paper}
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Gender</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>FullName</TableCell>
                  <TableCell>Email</TableCell>
                  {/* <TableCell>Password</TableCell> */}
                  <TableCell>Username</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teacherData.map((human, index) => (
                  <TableRow key={index}>
                    <TableCell>{human.gender}</TableCell>
                    <TableCell>
                      <img src={human.image} alt="profile" style={{height:"65px"}}/>
                    </TableCell>
                    <TableCell>{human.phone_no}</TableCell>
                    <TableCell>{human.address} </TableCell>

                    <TableCell> {human.full_name}</TableCell>
                    <TableCell>{human.email}</TableCell>
                    {/* <TableCell> {human.password}</TableCell> */}
                    <TableCell> {human.username}</TableCell>
                    <TableCell>
                    <button > {" "}
                      <Edit /></button>
                     
                    </TableCell>
                    <TableCell>
                    <button onClick={()=>{handleTeacherDelete(human.id)}}> {" "}
                      <Delete />{" "}</button>
                      
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* 
        <DataGrid
  rows={rows}
  columns={columns}
  pageSize={5}
  rowsPerPageOptions={[5]}
  checkboxSelection
  style={{marginLeft:"20px", marginTop:"20px", height:"500px"}}
 /> */}

          {/* <div>
            <div className="container">
              <p>TEACHER data</p>
              <div classname="wrapper">
              {teacherData.map ((human, index)=> {
                return(
                  <>
                  <ul key={index}>
                  <li>{human.gender}</li>
                  <li>{human.image}</li>
                  <li>{human.phone_no}</li>
                  <li>{human.address}</li>
                  <li>{human.full_name}</li>
                  <li>{human.email}</li>
                  <li>{human.password}</li>
                  <li>{human.username}</li>
                  
                </ul>
                </>
                )
              })}



              </div>
            </div>
          </div> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default TeacherData;
