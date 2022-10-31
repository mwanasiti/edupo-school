import React from 'react'
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import ParentView from '../DataTables/ParentView'
import StudentData from '../DataTables/StudentData'
import TeacherView from '../DataTables/TeacherView'
import ParentForm from '../Forms/Parent/ParentForm'
import StaffForm from '../Forms/Staff/StaffForm'
import StudentForm from '../Forms/Student/StudentForm'
import TeacherForm from '../Forms/Teacher/TeacherForm'

function BarRoutes() {
  return (
   <Router>
    <Routes>
        <Route  path='/dashboard' element={<Dashboard/>}/>
        <Route  path='/addstudent' element={<StudentForm/>}/>
        <Route  path='/addteacher' element={<TeacherForm/>}/>
        <Route  path='/addparent' element={<ParentForm/>}/>
        <Route  path='/addstaff' element={<StaffForm/>}/>
        <Route  path='/viewstudent' element={<StudentData/>}/>
        <Route  path='/viewparent' element={<ParentView/>}/>
        <Route  path='/viewteacher' element={<TeacherView/>}/>
    </Routes>
   </Router>
  )
}

export default BarRoutes