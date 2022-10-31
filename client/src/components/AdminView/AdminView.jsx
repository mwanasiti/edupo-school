import { Grid } from '@material-ui/core'
import React from 'react'
import Sidebar from './BarRoutes/Sidebar'

import Dashboard from './Dashboard/Dashboard'
import ParentView from './DataTables/ParentView'
import StudentData from './DataTables/StudentData'
import TeacherView from './DataTables/TeacherView'

import Adminbar from './Forms/Adminbar'
import ParentForm from './Forms/Parent/ParentForm'
import StudentForm from './Forms/Student/StudentForm'
import TeacherForm from './Forms/Teacher/TeacherForm'


 


function AdminView() {
  
  return (
    <div>
<Dashboard/>
    </div>
  )
}

export default AdminView