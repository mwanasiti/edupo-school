import { Grid } from '@material-ui/core'
import React from 'react'
import Adminbar from './Forms/Adminbar'
import StudentForm from './Forms/StudentForm'


function AdminView() {
  return (
    <div>
     <p> This will be the Admin's view after Logging in <br/></p>

      <Grid container>
      <Grid item sm={4}>
      <Adminbar/>
      </Grid>
      <Grid item sm={7}>
      <StudentForm/>
      </Grid>
      </Grid>
   
    
    {/* <StudentForm/>
    <StudentAdd/> */}
    </div>
  )
}

export default AdminView