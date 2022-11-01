import React, {useEffect, useState } from 'react'
const StudentDetails = () => {

  const [student, setStudent] = useState({})

  // useEffect(() => {
  //   fetch(`/student_id`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setStudent(data)
  //       console.log("fetchinf ",data)
  //       // setIsLoading(false)
  //     });
  // }, []);
  useEffect(() => {
    fetch(`/studentId`)
      .then((res) => res.json())
      .then((data) => {
        // setAssignment(data);
        // setScore(data.score);
        console.log("fetchinf ",data)
      });
  }, []);

  console.log(" student ", student)

  
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={student.image} alt='' />
        <h1>{student.full_name}</h1>
      </div>
      <div className='card-back'>
        <h2>{student.username}</h2>
        <ul>
          <li>
            <strong>Gender:</strong> {student.gender}
          </li>
          <li>
            <strong>Role:</strong> {student.role}
          </li>
          <li>
            <strong>Phone_no:</strong> {student.phone_no}
          </li>
        </ul>
      </div>
    </div>
  </div>
   
  )
}

export default StudentDetails