import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

function AddAssignment() {
    const [assignments, setAssignments] = useState([]);
    const [errors, setErrors] = useState([]);
  
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;
    const [score, setScore] = useState(0);
  
    useEffect(() => {
      fetch(`/subject_assignments/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setAssignments(data);
          console.log(data)
        });
    }, []);
  
    function handleScoreSubmit(e){
      e.preventDefault()
      fetch(`/student_assesments/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            score,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data) => {
              setAssesment(data);
            });
          //   navigate(`/my-students-assessments/${id}`);
          navigate(-1)
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }
  return (
    <div>AddAssignment</div>
  )
}

export default AddAssignment