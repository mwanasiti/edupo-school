import React, {useState, useEffect} from 'react'
//import axios from 'axios'
import StudentGrid from './StudentGrid'
import "./Student.css"

function StudentView() {

  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)


 
  //get request

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        console.log(data)
        setIsLoading(false)
      });
  }, []);


  return (

    <div className='container'>
         <p>Welcome Students </p>
         <StudentGrid isLoading={isLoading} students={students} />
      </div>


  )
}

export default StudentView;