import { Grid } from '@material-ui/core'
import React from 'react'
import Adminbar from './Forms/Adminbar'
import StudentForm from './Forms/Student/StudentForm'



function AdminView() {
  return (
    <div>
     {/* <p> This will be the Admin's view after Logging in <br/></p> */}

      <Grid container>
      <Grid item sm={4} xs={2} lg={2}>
      <Adminbar/>
      </Grid>
      <Grid item sm={7} xs={10} lg={5}>
      <StudentForm />
      </Grid>
      </Grid>
   
    
    {/* <StudentForm/>
    <StudentAdd/> */}
    </div>
  )
}

export default AdminView