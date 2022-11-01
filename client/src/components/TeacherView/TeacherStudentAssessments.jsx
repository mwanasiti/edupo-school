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

function TeacherStudentAssessments() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [assesments, setAssesments] = useState([]);

  useEffect(() => {
    fetch(`/par_stu_assesments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAssesments(data);
      });
  }, []);

  return (
    <>
      {/* <div>TeacherStudentAssessments</div> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell align="right">Assessment</TableCell>
              <TableCell align="right">Subject</TableCell>

              <TableCell align="right">Out Of</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Change Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assesments.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.student}
                </TableCell>
                <TableCell align="right">{row.assessment}</TableCell>
                <TableCell align="right">{row.subject}</TableCell>

                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">{row.score ? row.score : 0}</TableCell>
                <TableCell align="right">
                  {row.score >= 40 ? (
                    <h1 className="text-green-600">PASS</h1>
                  ) : (
                    <h1 className="text-red-500">FAIL</h1>
                  )}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() =>
                      navigate(`/change-assessment-score/${row.id}`)
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

export default TeacherStudentAssessments;