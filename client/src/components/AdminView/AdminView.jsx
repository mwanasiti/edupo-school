import React from 'react'
import { Routes, Route } from "react-router-dom";
import StudentAdd from './StudentAdd';


function AdminView() {
  return (
    <>
      <div>This will be the Admin's view after Logging in</div>
      <StudentAdd />
    </>

  )
}

export default AdminView