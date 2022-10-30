import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function SubjectStudents() {

    const params = useParams();
    const {id} = params
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch(`/subject_students/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setAssignments(data);
          });
      }, []);


  return (
    <>
      <div>SubjectStudents</div>
    </>
  );
}

export default SubjectStudents;