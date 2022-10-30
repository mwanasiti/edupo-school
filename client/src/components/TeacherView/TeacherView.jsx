import React from "react";
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function TeacherView() {

  const navigate = useNavigate()

  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    fetch("/teacher_subjects")
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data);
      });
  }, []);


if (subjects.length === 0)
  return(
    <h1 className="text-center p-3 text-black text-xl font-bold"> You Currently Do not Teach any Subjects at Edupo School</h1>
  );

  return (
    <>

<h1 className="text-center p-3 text-black text-xl font-bold"> Your  Subjects</h1>
    <td className="text-center p-3 text-black text-xl font-bold">
            <Button variant="contained" onClick={() => navigate(`/par-stu-assignments/${student.id}`)}>ADD SUBJECT</Button>


            </td>
  
            

  {/* <div>
  <td className='ml-5'>
            <Button variant="contained" onClick={() => navigate(`/par-stu-assignments/${assignment.id}`)}>Assignments</Button>


            </td>
            <td className='ml-5'>
            <Button variant="contained" onClick={() => navigate(`/par-stu-assignments/${assessment.id}`)}>Assessment</Button>


            </td>   
            <td className='ml-5'>
            <Button variant="contained" onClick={() => navigate(`/par-stu-assignments/${classroom.id}`)}>classroom</Button>


            </td>         
  </div> */}

  {/* <div className="overflow-x-auto relative dark">
    <table className="">
      <thead className="">
        <tc>
          <th scope="col" className="py-3 px-6">
            ASSIGNMENT
          </th>
          <th scope="col" className="py-3 px-6">
            ASSESSMENT
          </th>
          <th scope="col" className="py-3 px-6">
            CLASSROOMS
          </th>
        
        </tc>
      </thead>
      </table>
  </div>   */}

    </>
  );
}

export default TeacherView;
