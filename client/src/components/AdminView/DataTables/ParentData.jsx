import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import './View.css'
import { Grid } from '@material-ui/core';
import Sidebar from '../BarRoutes/Sidebar';

  
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  
  // {
  //   field: 'gender',
  //   headerName: 'Gender',
  //   width: 150,
  //   editable: true,
  // },
  // {
  //   field: 'image',
  //   headerName: 'Image',
  //   width: 150,
  //   editable: true,
  // },
  // {field: "user", headerName: "Image", width:230, 
  // renderCell:(params)=>{
  //   return(
  //     <div  className='cellImg'>
  //       <img  src="https://i.pinimg.com/564x/17/21/81/172181825b9ed4311d32f55a166ce295.jpg" alt=" Avatar"/>
  //       {/* <img src="https://i.pinimg.com/564x/a9/8e/5d/a98e5d7a6c785d4251224e5bbce0c89d.jpg" alt="person"/> */}
  //         {params.row.username}
  //     </div>
  //   )
  // }},
  {
    field: 'phone_no',
    headerName: 'Phone Number',
    // type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Address',
    // type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullname',
    headerName: 'FullName',
    // type: 'text',
    width: 150,
    editable: true,
  },
  
  {
    field: 'email',
    headerName: 'Email',
    // type: 'email',
    width: 150,
    editable: true,
  }
  
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id:2, phone_no:"07468781123",address:"23 westside",fullname:"MauPete ",email:"mau@gmail.com"},
  { id:3, phone_no:"07417811683",address:"2jumperestside",fullname:"Joaness Burg ",email:"jon@gmail.com"},
  { id:1, phone_no:"074168868123",address:"23 wejumperide",fullname:"Jona Monica",email:"jon@gmail.com"},
  { id:4, phone_no:"07468781123",address:"23 westpoyide",fullname:"Petero Jui ",email:"jones@gmail.com"},
  { id:5, phone_no:"0741781123",address:"23 wejumperide",fullname:"Wonderl Proof ",email:"proof@gmail.com"},
  { id:6, phone_no:"0741781123",address:"23jumperstside",fullname:"Joyous Occasion ",email:"jon@gmail.com"},
  { id:7, phone_no:"0741781123",address:"23 wpoystpoyide",fullname:"Won Bin",email:"won@gmail.com"},
  { id:8, phone_no:"07468781123",address:"23 westpoyide",fullname:"Jun Pyo",email:"jun@gmail.com"},
  { id:9, phone_no:"0741781123",address:"23 wjumperside",fullname:"Shae Pri",email:"prin@gmail.com"},
  { id:10, phone_no:"0741781123",address:"23 westside",fullname:"Markus",email:"markusn@gmail.com"},
  { id:12, phone_no:"074687816823",address:"23 jumpertside",fullname:" Jamal nski",email:"jamal@gmail.com"},
  { id:13, phone_no:"06841781123",address:"23 westside",fullname:"Princess ski",email:"ski@gmail.com"},
  { id:14, phone_no:"0741781123",address:"23jumpere",fullname:"Jo ki",email:"ki@gmail.com"},
  { id:15, phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:16, phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:17, phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:18, phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:19, phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:20, phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:21, phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:22, phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:23, phone_no:"07468781123",address:"23 jumpertside",fullname:"Jonathan Krasinski",email:"jon@gmail.com"},

];

function ParentData() {
  return (
    <div>
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar/>
        </Grid>
        <Grid item sm={4} xs={2} lg={9}>
        <DataGrid
  rows={rows}
  columns={columns}
  pageSize={5}
  rowsPerPageOptions={[5]}
  checkboxSelection
  style={{marginLeft:"20px", marginTop:"20px", height:"500px"}}
 />
        </Grid>
      </Grid>
    </div>
 
  )
}

export default ParentData