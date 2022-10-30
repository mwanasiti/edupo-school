import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";


function TeacherStudentAssignments() {
  const params = useParams();
  const { id } = params;
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch(`/par_stu_assignments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
      });
  }, []);
  return (
    <>
      <div>TeacherStudentAssignments</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell align="right">Assignment</TableCell>
              <TableCell align="right">Due Date</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Change Score</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {assignments.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.student}
                </TableCell>
                <TableCell align="right">{row.assignment}</TableCell>
                <TableCell align="right">{row.due_date}</TableCell>
                <TableCell align="right">{row.score ? row.score : 0}</TableCell>
                <TableCell align="right">
                  {row.score ? (
                    <h1 className="text-green-600">SUBMITTED</h1>
                  ) : (
                    <h1 className="text-red-500">NOT SUBMITTED</h1>
                  )}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() =>
                      navigate(`/subject-students/${row.subject_id}`)
                    }
                  >
                    Change Score
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TeacherStudentAssignments;
