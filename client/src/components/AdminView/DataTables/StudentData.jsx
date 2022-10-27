import React from 'react'
import {
  TableContainer, 
  Table, 
  TableHead, 
  TableBody, 
  TableRow, 
  TableCell,
   Paper
  } from "@mui/material"
import { Face } from '@material-ui/icons'

function StudentData() {
  return (
    <TableContainer component= {Paper} style={{"marginLeft":"20px"}}>
    {/* <h1>Helo</h1> */} 
  
<Table aria-label='student table'>
<TableHead>
  <TableRow>
  <TableCell>GENDER</TableCell>
  <TableCell>IMAGE</TableCell>
  <TableCell>PARENT ID</TableCell>
  <TableCell>PHONE NUMBER</TableCell>
  <TableCell>ADMISSION NUMBER</TableCell>
  <TableCell>SUBJECT ID</TableCell>
  <TableCell>FULL NAME</TableCell>
  <TableCell>EMAIL</TableCell>
  <TableCell>PASSWORD</TableCell>
  <TableCell>USERNAME</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  {
    tableData.map(row => (
      <TableRow key= {row.id} sx = {{"&:last-child td, &:last-child th": {border :0}}}>
      <TableCell>{row.gender}</TableCell>
      <TableCell><Face/></TableCell>
      <TableCell>{row.parent_id}</TableCell>
      <TableCell>{row.phone_no}</TableCell>
      <TableCell>{row.admission_no}</TableCell>
      <TableCell>{row.subject_id}</TableCell>
      <TableCell>{row.full_name}</TableCell>
      <TableCell>{row.email}</TableCell>
      <TableCell>{row.password}</TableCell>
      <TableCell>{row.username}</TableCell>
      

      </TableRow>
    ))
  }
</TableBody>

</Table>
    </TableContainer>
  )
}
const tableData = [{
  "gender": "Bigender",
  "image": "F",
  "parent_id": 1,
  "phone_no": "725-337-4258",
  "admission_no": 1,
  "subject_id": 12,
  "full_name": "Odella Biddlestone",
  "email": "obiddlestone0@wired.com",
  "password": "Os7tdFe72",
  "username": "obiddlestone0"
}, {
  "gender": "Female",
  "image": "M",
  "parent_id": 2,
  "phone_no": "464-570-0145",
  "admission_no": 2,
  "subject_id": 11,
  "full_name": "Gwynne Brodeau",
  "email": "gbrodeau1@spiegel.de",
  "password": "vyqvS1LyTju6",
  "username": "gbrodeau1"
}, {
  "gender": "Female",
  "image": "F",
  "parent_id": 3,
  "phone_no": "163-897-5822",
  "admission_no": 3,
  "subject_id": 53,
  "full_name": "Taryn McKyrrelly",
  "email": "tmckyrrelly2@google.ca",
  "password": "8B7aKCiA6xH",
  "username": "tmckyrrelly2"
}, {
  "gender": "Bigender",
  "image": "M",
  "parent_id": 4,
  "phone_no": "336-902-3458",
  "admission_no": 4,
  "subject_id": 7,
  "full_name": "Kipp Mill",
  "email": "kmill3@samsung.com",
  "password": "hJCE4EqzmDp",
  "username": "kmill3"
}, {
  "gender": "Female",
  "image": "M",
  "parent_id": 5,
  "phone_no": "606-552-4594",
  "admission_no": 5,
  "subject_id": 53,
  "full_name": "Candis Ipgrave",
  "email": "cipgrave4@wiley.com",
  "password": "ba2eNIeU",
  "username": "cipgrave4"
}, {
  "gender": "Male",
  "image": "M",
  "parent_id": 6,
  "phone_no": "944-450-8624",
  "admission_no": 6,
  "subject_id": 41,
  "full_name": "Shea Burril",
  "email": "sburril5@adobe.com",
  "password": "opzCqPnt",
  "username": "sburril5"
}, {
  "gender": "Male",
  "image": "M",
  "parent_id": 7,
  "phone_no": "431-598-0467",
  "admission_no": 7,
  "subject_id": 31,
  "full_name": "Ingemar MacGow",
  "email": "imacgow6@npr.org",
  "password": "iYH3WSlKBM",
  "username": "imacgow6"
}, {
  "gender": "Female",
  "image": "F",
  "parent_id": 8,
  "phone_no": "354-646-6314",
  "admission_no": 8,
  "subject_id": 47,
  "full_name": "Corella Yedall",
  "email": "cyedall7@naver.com",
  "password": "cwJ3RVOM7eFU",
  "username": "cyedall7"
}, {
  "gender": "Male",
  "image": "F",
  "parent_id": 9,
  "phone_no": "744-932-5682",
  "admission_no": 9,
  "subject_id": 57,
  "full_name": "Matias Downes",
  "email": "mdownes8@oakley.com",
  "password": "BsUiruhwKK",
  "username": "mdownes8"
}, {
  "gender": "Male",
  "image": "M",
  "parent_id": 10,
  "phone_no": "145-296-8163",
  "admission_no": 10,
  "subject_id": 7,
  "full_name": "Colin Harder",
  "email": "charder9@mysql.com",
  "password": "OeBndFP",
  "username": "charder9"
}]




export default StudentData