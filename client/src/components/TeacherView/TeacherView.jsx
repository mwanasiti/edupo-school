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
  const [name, setName] = useState([])
  const [errors, setErrors] = useState([]);


  useEffect(() => {
    fetch("/teacher_subjects")
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data);
      });
  }, []);


  function handleSubjectSubmit(e) {
    e.preventDefault();
    fetch("/new_subject_teacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setSubjects([...subjects, data]);
        });
        setName("");
        //   navigate(-1)
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

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
              <TableCell align="right">View Assessments</TableCell>
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
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() =>
                      navigate(`/add-assessment/${row.subject_id}`)
                    }
                  >
                    View Assessments
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <div className="w-2/3 mx-auto mt-10 rounded-lg shadow-xl shadow-neutral-400">
        <h1 className="text-center mt-3 p-3 text-black text-xl font-bold">
          Add New Subject
          <hr></hr>
        </h1>
        <form className="flex flex-col text-center font-black p-4">
          <label htmlFor="name" className="text-lg">
            Subject Name:
          </label>
          <input
            required
            className=" mt-2 h-8 rounded-lg text-black bg-slate-300 w-2/3 pl-2 mx-auto"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            onClick={handleSubjectSubmit}
          >
            Submit
          </Button>
        </form>
      </div> */}
    </>
  );
}

export default TeacherView;
