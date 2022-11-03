import React from 'react'
const StaffDetails = ({staff}) => {

  return (
    <div className='kardi'>
    <div className='kardi-inner'>
      <div className='kardi-front'>
        <img src={staff.image} alt='' />
      
      </div>
      <div className='kardi-back'>
     
        <ul>
        <li>
            <strong>full_name:</strong> {staff.full_name}
          </li>
          <li>
            <strong>department:</strong> {staff.department}
          </li>
          <li>
            <strong>post:</strong> {staff.post}
          </li>
          <li>
            <strong>phone_no:</strong> {student.phone_no}
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
export default StaffDetails;