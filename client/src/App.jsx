import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AdminView from "./components/AdminView/AdminView";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import ParentStudentAssessments from "./components/ParentView/ParentStudentAssessments";
import ParentStudentAssignments from "./components/ParentView/ParentStudentAssignments";
import ParentView from "./components/ParentView/ParentView";
import StudentView from "./components/StudentView/StudentView";
import AddAssessment from "./components/TeacherView/AddAssessment";
import AddAssignment from "./components/TeacherView/AddAssignment";
import ChangeAssessmentScore from "./components/TeacherView/ChangeAssessmentScore";
import ChangeAssignmentScore from "./components/TeacherView/ChangeAssignmentScore";
import EditAssessment from "./components/TeacherView/EditAssessment";
import EditAssignment from "./components/TeacherView/EditAssignment";
import SubjectStudents from "./components/TeacherView/SubjectStudents";
import TeacherStudentAssessments from "./components/TeacherView/TeacherStudentAssessments";
import TeacherStudentAssignments from "./components/TeacherView/TeacherStudentAssignments"
import TeacherView from "./components/TeacherView/TeacherView";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/admin_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/teacher_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/student_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/parent_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <main className="min-h-[92vh]">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<TeacherView />} />
          <Route path="/student" element={<StudentView />} />
          <Route path="/parent" element={<ParentView />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/login" element={<LoginForm setUser={setUser} />} />

          <Route path="/par-stu-assignments/:id" element={<ParentStudentAssignments/>} />
          <Route path="/par-stu-assessments/:id" element={<ParentStudentAssessments/>} />

          <Route path="/subject-students/:id" element={<SubjectStudents/>} />

          <Route path="/my-students-assessments/:id" element={<TeacherStudentAssessments/>} />
          <Route path="/my-students-assignments/:id" element={<TeacherStudentAssignments/>} />

          <Route path="/change-assessment-score/:id" element={<ChangeAssessmentScore/>} />
          <Route path="/change-assignment-score/:id" element={<ChangeAssignmentScore/>} />

          <Route path="/add-assignment/:id" element={<AddAssignment/>} />
          <Route path="/add-assessment/:id" element={<AddAssessment/>} />


          <Route path="/edit-assignment/:id" element={<EditAssignment/>} />
          <Route path="/edit-assessment/:id" element={<EditAssessment/>} />





        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
