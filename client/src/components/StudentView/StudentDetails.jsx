import React from 'react'
const StudentDetails = ({student}) => {

  // const [student, setStudent] = useState({})

  // useEffect(() => {
  //   fetch(`/student_id`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setStudent(data)
     
  //       // setIsLoading(false)
  //     });
  // }, []);




//   useEffect(() => {
//     const fetchStudent = async () => {
//       const result = await axios(
//         '/studentId'
//       )
// t
//       console.log( 'annyone' , result.data)
//       setStudent(result.data)
//       // setIsLoading(false)

//       }
      
//       fetchStudent()
//     }, [])


  // console.log(" student ", student)
  // .catch(error => (console.log(error)))
  
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={student.image} alt='' />
        {/* <h1>{student.full_name}</h1> */}
      </div>
      <div className='card-back'>
        {/* <h2>{student.username}</h2> */}
        <ul>
        <li>
            <strong>Username:</strong> {student.username}
          </li>
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