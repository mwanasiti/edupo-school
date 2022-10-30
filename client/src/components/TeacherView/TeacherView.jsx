import React,{useState, useEffect} from 'react'
// import Assignment from './Assignment.jsx'
import SubjectDetails from '../../components/TeacherView/SubjectDetails'



function TeacherView() {

  const [teachers, setteachers] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  // fetch

  useEffect(() =>{
    fetch('/teachers ${id}',{
      
    })
  })
  return (
    <div>
      {/* This will be the Teacher's view after Logging in */}
      
      <SubjectDetails />
      
      {/* < SubjectList/> */}
    </div>
  )
}
View
export default TeacherView