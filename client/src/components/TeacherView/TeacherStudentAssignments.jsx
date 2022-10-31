import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function TeacherStudentAssignments() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [assignments, setAssignments] = useState([]);
  const [subjectAssignments, setSubjectAssignments] = useState([]);
  const [errors, setErrors] = useState([]);
  const [assignment_id, setAssignmentID] = useState("");

  useEffect(() => {
    fetch(`/par_stu_assignments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
 
        fetch(`/subject_assignments/${data[0].subject_id}`)
          .then((res) => res.json())
          .then((data) => {
            setSubjectAssignments(data);

            console.log(data);
          });
      });
  }, []);

  function handleAddStudentAnAssignment() {
    e.preventDefault();
    fetch("/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id: id,
        assignment_id
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setAssignments([...assignments, data]);
        });
        //   navigate(-1)
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell align="right">Assignment</TableCell>
              <TableCell align="right">Subject</TableCell>

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
                <TableCell align="right">{row.subject}</TableCell>

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
                      navigate(`/change-assignment-score/${row.id}`)
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

      <div className="w-2/3 mx-auto mt-10 rounded-lg shadow-xl shadow-neutral-400">
        <h1 className="text-center mt-3 p-3 text-black text-xl font-bold">
          Add Student an Assignment
          <hr></hr>
        </h1>
        <form className="flex flex-col text-center font-black p-4">
          <label htmlFor="assignment" className="text-lg text-black">
            Select Assignment:
            <br></br>
            <select
              name="assignment"
              value={assignment_id}
              onChange={(e) => setAssignmentID(e.target.value)}
              className="mt-3 p-1 bg-neutral-200 rounded"
            >
              {subjectAssignments.map((assignment) => (
                <option value={assignment.id}>{assignment.name}</option>
              ))}
            </select>
          </label>
          {errors.map((error) => {
            return (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3 text-center"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            );
          })}
          <Button
            variant="contained"
            color="success"
            type="submit"
            className="w-1/3 mt-4 mx-auto"
            onClick={handleAddStudentAnAssignment}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default TeacherStudentAssignments;
