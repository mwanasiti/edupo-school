import { Button } from '@material-ui/core'
import { Save } from '@material-ui/icons'
import React from 'react'
import './StudentAdd.css'
import StudentView from './StudentView'

function StudentAdd() {
  return (
    <div class="container">
    <div class="row">
      <div class="col-12 col-md-5 col-lg-6">
      <form className='student'>
      <h1 className='head'>STUDENT ADD</h1>
      {/* GENDER */}
      
      <div class="form-check">
      <label>Gender: </label>
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
          Female
          </label>
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
          <label class="form-check-label" for="flexRadioDefault2">
              Male
            </label>
        </div>
        {/* IMAGE */}
        <div className='details'>
            <label>Image: </label>
            <input type="text" aria-label="First name" class="form-control"/>
          </div>
          
          {/* PARENT */}
          <div className='details'>
            <label>Parent ID: </label>
            <input type="text" aria-label="First name" class="form-control"/>
          </div>
          {/* PHONE NUMBER */}
          <div className='details'>
            <label>Phone number: </label>
            <input type="text" aria-label="First name" class="form-control"/>
          </div>
          {/* ADMISSION NUMBER */}
          <div className='details'>
            <label>Admission  Number: </label>
            <input type="text" aria-label="First name" class="form-control"/>
          </div>
          {/* SUBJECT ID */}
          <div className='details'>
            <label>Subject ID: </label>
            <input type="text" aria-label="First name" class="form-control"/>
          </div>
          {/* FULLNAME */}
            <div class="input-group">
                <label class="input-group-text">Full Name: </label>
                <input type="text" aria-label="First name" class="form-control"/>
                {/* <input type="text" aria-label="Last name" class="form-control"/> */}
            </div>
            <Button variant="contained" color="primary" size="large" startIcon={<Save/>}>Save</Button>
            {/* <button className='upload'>Submit</button> */}
      </form>
      </div>
    </div>
    
    </div>
  )
}

export default StudentAdd