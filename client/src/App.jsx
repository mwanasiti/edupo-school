import React from 'react';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/login';


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
    <div className="App">
      <Login />

      {/* <main className="min-h-[92vh]">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/login" element={<login setUser={setUser} />} />
        </Routes>
      </main> */}
    </div>
  );
}

export default App;