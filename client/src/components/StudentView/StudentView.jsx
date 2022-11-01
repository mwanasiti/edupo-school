<<<<<<< HEAD
import React, {useState, useEffect} from 'react'
import MyAssessments from './MyAssessments';
import MyAssignments from './MyAssignments';
//import axios from 'axios'
import StudentGrid from './StudentGrid'
// import "./Student.css"

function StudentView() {

  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)


 
  //get request

  useEffect(() => {
    fetch("/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        // console.log(data)
        setIsLoading(false)
      });
  }, []);


  return (

    <div className='container'>
         {/* <p> This will be the Student's view after Logging in</p> */}
         {/* <StudentGrid isLoading={isLoading} students={students} /> */}
         <MyAssignments />
         <MyAssessments />
=======
import React from 'react'
//import axios from 'axios'
import StudentGrid from './StudentGrid'
import "./Student.css"
// import {useParams } from "react-router-dom";
function StudentView({student}) {

  // const [student, setStudent] = useState({})
  // const [isLoading, setIsLoading] = useState(true)


  // const params = useParams();
  //  const { id } = params;
 
  //get request

  // useEffect(() => {
  //   fetch("/student_id")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setStudent(data)
  //       console.log(data)
  //       // setIsLoading(false)
  //     });
  // }, []);


  return (

    <div className='container'>
         <p>Welcome</p>
         <StudentGrid student={student} />
>>>>>>> origin/angela
      </div>


  )
}

<<<<<<< HEAD
export default StudentView;
=======
export default StudentView;
>>>>>>> origin/angela
