import React, {useState} from 'react'

function EditStudentDetails() {

      const [updatedUsername, setUpdatedUsername] = useState(username)


      function handleUpdatedUsername(e){
            updatedUsername(e.target.value)

        }
      
    //handle submit function
    function handleSubmit(e) {
      e.preventDefault(); 

                //FETCH
                fetch(`/studentDetails`, {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                        username: updatedUsername
                    
                  }),
                })
                  .then((r) => r.json())
                  .then((updatedUsername) => handleUpdatedUsername(updatedUsername))
                  .then(() => setIsEditing(false));
              }

        
  return (
   //details input
   <form className='edit-username' onSubmit={handleSubmit}>
   <label className='form-label' htmlFor='username'>Username</label>
   <input
   name="username"
       type="text"
     
       value={updatedUsername}
       onChange ={handleUpdatedUsername}
       className="edit-event-input">
   </input>
   <input className="save-button" type="submit" value="Save" />
   </form>


  )
}

export default EditStudentDetails