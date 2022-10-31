import { Grid } from '@material-ui/core'
import React from 'react'
<<<<<<< HEAD
import Sidebar from './BarRoutes/Sidebar'

import Dashboard from './Dashboard/Dashboard'
import ParentView from './DataTables/ParentView'
import StudentData from './DataTables/StudentData'
import TeacherView from './DataTables/TeacherView'

import Adminbar from './Forms/Adminbar'
import ParentForm from './Forms/Parent/ParentForm'
import StudentForm from './Forms/Student/StudentForm'
import TeacherForm from './Forms/Teacher/TeacherForm'


 
=======
import { Routes, Route } from "react-router-dom";
import Adminbar from './Adminbar';
import StudentAdd from './StudentAdd';
import StudentForm from './studentForm';
>>>>>>> deno


function AdminView() {
  
  return (
<<<<<<< HEAD
    <div>
<Dashboard/>
    </div>
=======
    <>
      <div>This will be the Admin's view after Logging in</div>
      {/* <Adminbar /> */}
      <StudentForm/>
    </>

>>>>>>> deno
  )
}

export default AdminView