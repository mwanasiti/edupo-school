import React from "react";
import "./Styles.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

function ChangeAssessmentScore() {
  const [assesment, setAssesment] = useState({});
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(`/student_assesments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAssesment(data);
        setScore(data.score);
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
    <div className="min-h-[90vh] bg-neutral-200 pt-20">
      <div className="score-form p-10">
        <h1 className="text-center font-black text-2xl mb-1">
          Grade Student's Assessment
        </h1>
        <hr className="mb-5"></hr>
        <p className="m-2  font-bold text-xl">
          Name:{" "}
          <span className="text-lg font-light text-neutral-900 ml-4">
            {assesment.student}
          </span>
        </p>

        <p className="m-2 font-bold text-xl">
          Assessment:{" "}
          <span className="text-lg font-light text-neutral-900 ml-4">
            {assesment.assessment}
          </span>
        </p>
        <p className="m-2 font-bold text-xl">
          Subject:{" "}
          <span className="text-lg font-light text-neutral-900 ml-4">
            {assesment.subject}
          </span>
        </p>
        <p className="m-2 font-bold text-xl">
          Out of:{" "}
          <span className="text-lg font-light text-neutral-900 ml-4">
            {assesment.total}
          </span>
        </p>
        <p className="m-2 font-bold text-xl">
          Current Score:{" "}
          <span className="text-lg font-light text-neutral-900 ml-4">
            {assesment.score}
          </span>
        </p>
        <hr></hr>
        <form className="mt-4 flex flex-col ">
          <label htmlFor="score" className="m-2  font-bold text-xl mx-auto">
            Change Score:
          </label>
          <input
            className=" mt-2 h-8 rounded-lg text-black bg-slate-300 w-1/3 pl-2 mx-auto"
            type="number"
            name="score"
            maxLength="100"
            value={score}
            onChange={(e) => setScore(e.target.value)}
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
            className="w-2/3 mt-4 mx-auto"
            onClick={handleScoreSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ChangeAssessmentScore;
