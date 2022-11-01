import React, {useState} from 'react'

function EditStudentDetails() {

      const [updatedDetails, setUpdatedDetails] = useState(details)


      function handleUpdatedDetails(e){
            setUpdatedDetails(e.target.value)
        }
  return (
    <div>EditStudentDetails</div>
  )
}

export default EditStudentDetails