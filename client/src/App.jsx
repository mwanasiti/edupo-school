import React from 'react';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/login';
function App() {

  useEffect(() => {
    fetch("/admin_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;