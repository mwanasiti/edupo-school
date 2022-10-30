import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";

function AddAssignment() {
  const [assignments, setAssignments] = useState([]);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [subjectName, setSubjectName] = useState("undefined");
  const [name, setName] = useState("");
  const [due_date, setDate] = useState("");

  useEffect(() => {
    fetch(`/subject_assignments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
        setSubjectName(data[0].subject);
      });
  }, []);

  function handleAssignmentSubmit(e) {
    e.preventDefault();
    fetch("/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        subject_id: id,
        due_date,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setAssignments([...assignments, data]);
        });
        setName("");
        setDate("");
        //   navigate(-1)
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  if (assignments.length === 0)
    return (
      <h1 className="text-center p-3 text-black text-xl font-bold">
        There are currently No Assignments for this Subject this Subject in
        Edupo School
      </h1>
    );

  return (
    <>
      <h1 className="text-center p-3 text-black text-xl font-bold">
        {subjectName} Assignments
      </h1>
      <div className="w-2/3 mx-auto">
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Assignment Name</TableCell>
                {/* <TableCell align="right">Subject Name</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {assignments.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.name}
                  </TableCell>
                  {/* <TableCell align="right">{row.subject}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="w-2/3 mx-auto mt-10 rounded-lg shadow-xl shadow-neutral-400">
        <h1 className="text-center mt-3 p-3 text-black text-xl font-bold">
          Add New Assignment
          <hr></hr>
        </h1>
        <form className="flex flex-col text-center font-black p-4">
          <label htmlFor="name" className="text-lg">
            Assignment Name:
          </label>
          <input
            required
            className=" mt-2 h-8 rounded-lg text-black bg-slate-300 w-1/3 pl-2 mx-auto"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="date" className="text-lg">
            Due Date:
          </label>
          <input
            required
            className=" mt-2 h-8 rounded-lg text-black bg-slate-300 w-1/3 pl-2 mx-auto"
            type="date"
            name="date"
            placeholder="yy-mm-dd"
            value={due_date}
            onChange={(e) => setDate(e.target.value)}
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
            onClick={handleAssignmentSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default AddAssignment;