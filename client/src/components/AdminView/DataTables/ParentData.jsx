import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "./View.css";
import Sidebar from "../BarRoutes/Sidebar";
// import Searcher from "../BarRoutes/Searcher";

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
//   { field: "id", headerName: "ID", width: 90 },

 
//   {
//     field: "phone_no",
//     headerName: "Phone Number",
//     // type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: "address",
//     headerName: "Address",
//     // type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: "fullname",
//     headerName: "FullName",
//     // type: 'text',
//     width: 150,
//     editable: true,
//   },

//   {
//     field: "email",
//     headerName: "Email",
//     // type: 'email',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "action",
//     headerName: "Action",
//     // type: 'email',
//     width: 150,
//     editable: true,
//   },

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
//   {
//     id: 2,
//     phone_no: "07468781123",
//     address: "23 westside",
//     fullname: "MauPete ",
//     email: "mau@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 3,
//     phone_no: "07417811683",
//     address: "2jumperestside",
//     fullname: "Joaness Burg ",
//     email: "jon@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 1,
//     phone_no: "074168868123",
//     address: "23 wejumperide",
//     fullname: "Jona Monica",
//     email: "jon@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 4,
//     phone_no: "07468781123",
//     address: "23 westpoyide",
//     fullname: "Petero Jui ",
//     email: "jones@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 5,
//     phone_no: "0741781123",
//     address: "23 wejumperide",
//     fullname: "Wonderl Proof ",
//     email: "proof@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 6,
//     phone_no: "0741781123",
//     address: "23jumperstside",
//     fullname: "Joyous Occasion ",
//     email: "jon@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 7,
//     phone_no: "0741781123",
//     address: "23 wpoystpoyide",
//     fullname: "Won Bin",
//     email: "won@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 8,
//     phone_no: "07468781123",
//     address: "23 westpoyide",
//     fullname: "Jun Pyo",
//     email: "jun@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 9,
//     phone_no: "0741781123",
//     address: "23 wjumperside",
//     fullname: "Shae Pri",
//     email: "prin@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 10,
//     phone_no: "0741781123",
//     address: "23 westside",
//     fullname: "Markus",
//     email: "markusn@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 12,
//     phone_no: "074687816823",
//     address: "23 jumpertside",
//     fullname: " Jamal nski",
//     email: "jamal@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 13,
//     phone_no: "06841781123",
//     address: "23 westside",
//     fullname: "Princess ski",
//     email: "ski@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 14,
//     phone_no: "0741781123",
//     address: "23jumpere",
//     fullname: "Jo ki",
//     email: "ki@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 15,
//     phone_no: "07468781123",
//     address: "23 jumpertside",
//     fullname: "Jonathan Krasinski",
//     email: "jon@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 16,
//     phone_no: "07468781123",
//     address: "23 jumpertside",
//     fullname: "Jonathan Krasinski",
//     email: "jon@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 17,
//     phone_no: "07468781123",
//     address: "23 jumpertside",
//     fullname: "Jonathan Krasinski",
//     email: "jon@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 18,
//     phone_no: "07468781123",
//     address: "23 jumpertside",
//     fullname: "Jonathan Krasinski",
//     email: "jon@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 19,
//     phone_no: "07468781123",
//     address: "23 jumpertside",
//     fullname: "Jonathan Krasinski",
//     email: "jon@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 20,
//     phone_no: "07468781123",
//     address: "23 jumpertside",
//     fullname: "Jonathan Krasinski",
//     email: "jon@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 21,
//     phone_no: "07468781123",
//     address: "23 jumpertside",
//     fullname: "Jonathan Krasinski",
//     email: "jon@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 22,
//     phone_no: "07468781123",
//     address: "23 jumpertside",
//     fullname: "Jonathan Krasinski",
//     email: "jon@gmail.com",
//     action: "Delete",
//   },
//   {
//     id: 23,
//     phone_no: "07468781123",
//     address: "23 jumpertside",
//     fullname: "Jonathan Krasinski",
//     email: "jon@gmail.com",
//     action: "Delete",
//   },
// ];

function ParentData() {
  const [parentData, setParentData] = useState([]);

  useEffect(() => {
    fetch("/parents")
      .then((response) => response.json())
      .then((person) => 
      // console.log(person)
      setParentData(person)
      );
  }, []);

function handleParentDelete(id){
  fetch(`/parents/${id}`, {
    method: "DELETE",
  })
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data);
    if(data.errors){
      setErrors(data.errors)
    }
    const updatedParents = parentData.filter(
      (parent)=> parent.id !== data.id
    );
    setParentData(updatedParents)
  });
}

  return (
    <div>
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={4} xs={2} lg={9}>
        <TableContainer component={Paper} style={{marginLeft:"20px", marginTop:"20px"}}>
            <Table aria-label="simple table" >
              <TableHead>
                <TableRow>
              
                  <TableCell>Address</TableCell>
                  
                  <TableCell>Phone Number</TableCell>
            
                  <TableCell>FullName</TableCell>
                  <TableCell>Email</TableCell>
                  {/* <TableCell>Password</TableCell> */}
                  <TableCell>Username</TableCell>
                  <TableCell>Edit</TableCell> 
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {parentData.map((person, index) => (
                  <TableRow key={index}>
                    {/* <TableCell>{person.gender}</TableCell> */}
                    <TableCell>{person.address} </TableCell>
                
                    <TableCell>{person.phone_no}</TableCell>
                    
                   
                    <TableCell> {person.full_name}</TableCell>
                    <TableCell>{person.email}</TableCell>
                    {/* <TableCell> {person.password}</TableCell> */}
                    <TableCell> {person.username}</TableCell>
                    <TableCell>  <button onClick={()=>{handleParentDelete(person.id)}}><Edit/></button> </TableCell>
                    <TableCell> <button onClick={()=>{handleParentDelete(person.id)}}><Delete/></button>  </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
          </TableContainer>



          {/* <div>
            <div className="container">
              <p>Parent data</p>
              <div classname="wrapper">
              {parentData.map ((person, index)=> {
                return(
                  <>
                  <ul key={index}>
                  <li>{person.address}</li>
                  <li>{person.phone_no}</li>
                  <li>{person.full_name}</li>
                  <li>{person.email}</li>
                  <li>{person.password}</li>
                  <li>{person.username}</li>
                </ul>
                </>
                )
              })}



              </div>
            </div>
          </div> */}

          {/* <Searcher/> */}
        {/* <DataGrid
  rows={rows}
  columns={columns}
  pageSize={5}
  rowsPerPageOptions={[5]}
  checkboxSelection
  style={{marginLeft:"20px", marginTop:"20px", height:"500px"}}
 /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default ParentData;
