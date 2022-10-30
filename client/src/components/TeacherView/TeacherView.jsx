import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TeacherView() {
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("/teacher_subjects")
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data);
      });
  }, []);

  if (subjects.length === 0)
    return (
      <h1 className="text-center p-3 text-black text-xl font-bold">
        {" "}
        You Currently Do not Teach any Subjects at Edupo School
      </h1>
    );

  return (
    <>
      {/* <div>This will be the Teacher's view after Logging in</div> */}

      <h1 className="text-center p-3 text-black text-xl font-bold">
        My Subjects
      </h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Subject Name</TableCell>
              <TableCell align="right">View Students</TableCell>
              <TableCell align="right">View Assignments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.subject}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() =>
                      navigate(`/subject-students/${row.subject_id}`)
                    }
                  >
                    View My Students
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() =>
                      navigate(`/add-assignment/${row.subject_id}`)
                    }
                  >
                    View Assignments
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

export default TeacherView;
