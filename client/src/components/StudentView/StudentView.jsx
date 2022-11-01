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
      </div>


  )
}

export default StudentView;
