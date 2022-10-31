import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import './View.css'


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  
  {
    field: 'gender',
    headerName: 'Gender',
    width: 150,
    editable: true,
  },
  {field: "user", headerName: "Image", width:230, 
  renderCell:(params)=>{
    return(
      <div  className='cellImg'>
        {/* <img  src="https://i.pinimg.com/564x/17/21/81/172181825b9ed4311d32f55a166ce295.jpg" alt=" Avatar"/> */}
        <img src="https://i.pinimg.com/564x/2b/a8/4b/2ba84bfa0347c31c59d35299af93de12.jpg" alt="person"/>
          {params.row.username}
      </div>
    )
  }},
  {
    field: 'parent_id',
    headerName: 'Parent ID',
    width: 150,
    editable: true,
  },
  {
    field: 'phone_no',
    headerName: 'Phone Number',
    // type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'admission_no',
    headerName: 'Admission Number',
    // type: 'number',
    width: 150,
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
  { id:1,gender:"Female", parent_id:"PICTURE", phone_no:"074168868123",admission_no:"23 mperide",subject_id:"1",  fullname:"Jona Monica",email:"jon@gmail.com"},
  { id:2,gender:"Male", parent_id:"PICTURE", phone_no:"07468781123",admission_no:"23 wide",subject_id:"1", fullname:"MauPete ",email:"mau@gmail.com"},
  { id:3,gender:"Female", parent_id:"PICTURE", phone_no:"07417811683",admission_no:"2jumstside",subject_id:"1", fullname:"Joaness Burg ",email:"jon@gmail.com"},
  { id:4,gender:"Female", parent_id:"PICTURE", phone_no:"07468781123",admission_no:"23 woyide",subject_id:"1", fullname:"Petero Jui ",email:"jones@gmail.com"},
  { id:5,gender:"Male", parent_id:"PICTURE", phone_no:"0741781123",admission_no:"23 wejride",subject_id:"1", fullname:"Wonderl Proof ",email:"proof@gmail.com"},
  { id:6,gender:"Female", parent_id:"PICTURE", phone_no:"0741781123",admission_no:"23justside",subject_id:"1", fullname:"Joyous Occasion ",email:"jon@gmail.com"},
  { id:7,gender:"Male", parent_id:"PICTURE", phone_no:"0741781123",admission_no:"23 wppoyide",subject_id:"1", fullname:"Won Bin",email:"won@gmail.com"},
  { id:8,gender:"Male", parent_id:"PICTURE", phone_no:"07468781123",admission_no:"23 weyide",subject_id:"1", fullname:"Jun Pyo",email:"jun@gmail.com"},
  { id:9,gender:"Female", parent_id:"PICTURE", phone_no:"0741781123",admission_no:"23 werside",subject_id:"1", fullname:"Shae Pri",email:"prin@gmail.com"},
  { id:10,gender:"Female", parent_id:"PICTURE", phone_no:"0741781123",admission_no:"23 side",subject_id:"1", fullname:"Markus",email:"markusn@gmail.com"},
  { id:12,gender:"Male", parent_id:"PICTURE", phone_no:"074687816823",admission_no:"23 ertside",subject_id:"1", fullname:" Jamal nski",email:"jamal@gmail.com"},
  { id:13,gender:"Male", parent_id:"PICTURE", phone_no:"06841781123",admission_no:"23 wide",subject_id:"1", fullname:"Princess ski",email:"ski@gmail.com"},
  { id:14,gender:"Female", parent_id:"PICTURE", phone_no:"0741781123",admission_no:"23jre",subject_id:"1", fullname:"Jo ki",email:"ki@gmail.com"},
  { id:15,gender:"Male", parent_id:"PICTURE", phone_no:"07468781123",admission_no:"23 jumpertside",subject_id:"1", fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:16,gender:"Female", parent_id:"PICTURE", phone_no:"07468781123",admission_no:"23 side",subject_id:"1", fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:17,gender:"Male", parent_id:"PICTURE", phone_no:"07468781123",admission_no:"23 jumpede",subject_id:"1", fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:18,gender:"Male", parent_id:"PICTURE", phone_no:"07468781123",admission_no:"23 jumpertside",subject_id:"1", fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:19,gender:"Female", parent_id:"PICTURE", phone_no:"07468781123",admission_no:"23 jrtside",subject_id:"1", fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:20,gender:"Female", parent_id:"PICTURE", phone_no:"07468781123",admission_no:"23 jumside",subject_id:"1", fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:21,gender:"Male", parent_id:"PICTURE", phone_no:"07468781123",admission_no:"23 jumpide",subject_id:"1", fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:22,gender:"Male", parent_id:"PICTURE", phone_no:"07468781123",admission_no:"23 jumpide",subject_id:"1", fullname:"Jonathan Krasinski",email:"jon@gmail.com"},
  { id:23,gender:"Female", parent_id:"PICTURE", phone_no:"07468781123",admission_no:"23 jutside",subject_id:"1", fullname:"Jonathan Krasinski",email:"jon@gmail.com"},

];

function StudentData() {
  return (
 <DataGrid
  rows={rows}
  columns={columns}
  pageSize={8}
  rowsPerPageOptions={[5]}
  checkboxSelection
  style={{marginLeft:"50px", marginTop:"20px", height:"600px"}} 
 />
  )
}

export default StudentData