import { Grid } from '@material-ui/core'
import React from 'react'
import Sidebar from './BarRoutes/Sidebar'
import Widgets from './Cardboard/Widgets'
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
  
     {/* <p> This will be the Admin's view after Logging in <br/></p> */}

      <Grid container>
      <Grid item sm={4} xs={2} lg={2}>
      <Adminbar/>
      {/* <Sidebar/> */}
      </Grid>
     
      <Grid item sm={7} xs={10} lg={9}>
      {/* <Widgets/> */}
      {/* <StudentForm/> */}
      <ParentForm/>
      {/* <StudentData /> */}
      {/* <Dashboard /> */}
      {/* <TeacherView/> */}
      {/* <ParentView/> */}
      {/* <TeacherForm/> */}
      </Grid>
      </Grid>
   
    
    {/* <StudentForm/>
    <StudentAdd/> */}
    </div>
  )
}

export default AdminView