import React from 'react';
// import EditStudentDetails from './EditStudentDetails';
import StudentDetails from './StudentDetails'
const StudentGrid = ( { isLoading, student}) => {
 
     console.log(student)
  return isLoading ? (
       <h1>Loading...</h1>
       ) : (
    <section className='card'>
     <StudentDetails student={student}/> 
     <p className="username">Username: {username}</p>

  </section>
       )
}
export default StudentGrid;
