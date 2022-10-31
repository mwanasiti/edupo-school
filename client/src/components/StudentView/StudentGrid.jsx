import React from 'react';
import StudentDetails from './StudentDetails'
const StudentGrid = ( { isLoading}) => {
 
  return isLoading ? (
       <h1>Loading...</h1>
       ) : (
    <section className='card'>
     <StudentDetails /> 
 

  </section>
       )
}
export default StudentGrid;