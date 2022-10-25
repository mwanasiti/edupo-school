import React, {useEffect, useState}from 'react'

function Assignment() {
const [assignment, setAssignment] = useState([])
const [formDataPatch, setFormDataPatch] = useState([])

useEffect(() => {
      fetch(`/assignments/${id}`)
      .then((r) => r.json())
      .then(assignment => {
      setAssignment(assignment);
      setFormDataPatch({
            due_date: assignment.due_date,
            name: assignment.name
      })
})
}, [id])


if (!isLoaded) return <h2>Loading...</h2>

    function handleChange(e){
        const { name, value } = e.target;
        setFormDataPatch({ ...formDataPatch, [name]: value });
    };

    function toggleEdit(){
        setShow(!show)
    }

 function handleDeleteAssignment(){
        fetch(`/assignments/${id}`, {
            method:'DELETE'
          })
        history.push(`/subject/${assignment.subject.id}/assignments`);
    }

    function handlePatch(e) {
        e.preventDefault()
        fetch(`/assignments/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataPatch),
        })
        .then(res => res.json())
        .then(updatedAssignment => setAssignment(updatedAssignment))
        setShow(!show)
    }




  return (
    <div>Assignment</div>
  )
}

export default Assignment;