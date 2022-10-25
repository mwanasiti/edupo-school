import React from 'react'
import './StudentView.css'

function StudentView() {
  return (
    <div>
    <h1>Student view</h1>
    <table>
      <thead>
        <tr>
          <th>Gender</th>
          <th>Image</th>
          <th>Parent_id</th>
          <th>Phone_number</th>
          <th>Admission Number</th>
          <th>Subject ID</th>
          <th>Full Name</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <th>Female</th>
          <td>Picture</td>
          <td>1</td>
          <td>1234</td>
          <td>SCT221</td>
          <td>1</td>
          <td>Jane Mogasi</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default StudentView