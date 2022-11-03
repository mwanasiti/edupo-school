import { Grid } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import { BorderColor, Group, MoreVert, Person, School } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "../BarRoutes/Sidebar";
import "./../BarRoutes/Side.css";
import "./Dashboard.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Charts from "./Charts";
import SchoolEvents from "./SchoolEvents";
import { useNavigate } from "react-router-dom";
function Dashboard() {
let navigate  = useNavigate()
<<<<<<< HEAD

=======
>>>>>>> 7808ff4a82feb5f5edb13b81a83797c378f4606a
const [teacheBoard, setTeacherBoard]=useState([])
const [studentBoard, setStudentBoard]=useState([])
const [parentBoard, setParentBoard]=useState([])
const [staffBoard, setStaffBoard]=useState([])
<<<<<<< HEAD

=======
>>>>>>> 7808ff4a82feb5f5edb13b81a83797c378f4606a
// TEACHER BOARD
useEffect(()=>{
 fetch("/teachers")
 .then(response =>response.json())
 .then((tboard)=>
 setTeacherBoard(tboard)
 )
<<<<<<< HEAD

},[])

=======
},[])
>>>>>>> 7808ff4a82feb5f5edb13b81a83797c378f4606a
// STUDENT BOARD
useEffect(()=>{
  fetch("/students")
  .then(response =>response.json())
  .then((sboard)=>
  setStudentBoard(sboard)
  )
<<<<<<< HEAD
 
 },[])

=======
 },[])
>>>>>>> 7808ff4a82feb5f5edb13b81a83797c378f4606a
// PARENT BOARD
useEffect(()=>{
  fetch("/parents")
  .then(response =>response.json())
  .then((pboard)=>
  setParentBoard(pboard)
  )
<<<<<<< HEAD
 
 },[])

=======
 },[])
>>>>>>> 7808ff4a82feb5f5edb13b81a83797c378f4606a
// STAFF BOARD
// useEffect(()=>{
//   fetch("/staff")
//   .then(response =>response.json())
//   .then((pboard)=>
//   setParentBoard(pboard)
//   )
<<<<<<< HEAD
 
//  },[])

=======
//  },[])
>>>>>>> 7808ff4a82feb5f5edb13b81a83797c378f4606a
  return (
    <div className="bigParent">
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={4} xs={2} lg={9}>
          <div className="widgets">
          {/* TEACHERS */}
            <div className="widget">
              <div className="left">
                <div className="user">
                  <span className="title">TEACHERS</span>
                </div>
                <div className="number">
                {teacheBoard.slice(-1).map((tboard,index)=>{
                  return(
                  <div key={index}>
                  <span className="nambari">{tboard.id}</span>
                  </div>
                  )
                })}
<<<<<<< HEAD
                
=======
>>>>>>> 7808ff4a82feb5f5edb13b81a83797c378f4606a
                </div>
                <div className="ona">
                  <span className="link"  onClick={() => {
          navigate("/teachertable")
        }}  >See all</span>
                </div>
                <div className="go">
                  <KeyboardArrowUp />
                </div>
                <div className="identifier">
                  <BorderColor className="icon" />
                </div>
              </div>
            </div>
            {/* STUDENTS */}
            <div className="widget">
              <div className="left">
                <div className="user">
                  <span className="title">STUDENTS</span>
                </div>
                <div className="number">
                {studentBoard.slice(-1).map((sboard,index)=>{
                  return(
                  <div key={index}>
                  <span className="nambari">{sboard.id}</span>
                  </div>
                  )
                })}
<<<<<<< HEAD
                
=======
>>>>>>> 7808ff4a82feb5f5edb13b81a83797c378f4606a
                </div>
                
                <div className="ona">
                  <span className="link"  onClick={() => {
          navigate("/studenttable");
        }}>See all</span>
                </div>
                <div className="go">
                  <KeyboardArrowUp />
                </div>
                <div className="identifier">
                  <School className="icon" />
                </div>
              </div>
            </div>
            {/* PARENTS */}
            <div className="widget">
              <div className="left">
                <div className="user">
                  <span className="title">PARENTS</span>
                </div>
                <div className="number">
                {parentBoard.slice(-1).map((pboard,index)=>{
                  return(
                  <div key={index}>
                  <span className="nambari">{pboard.id}</span>
                  </div>
                  )
                })}
<<<<<<< HEAD
                
=======
>>>>>>> 7808ff4a82feb5f5edb13b81a83797c378f4606a
                </div>
                
                <div className="ona">
                  <span className="link"  onClick={() => {
          navigate("/parenttable");
        }}>See all</span>
                </div>
                <div className="go">
                  <KeyboardArrowUp />
                </div>
                <div className="identifier">
                  <Person className="icon" />
                </div>
              </div>
            </div>
            {/* STAFF */}
            <div className="widget">
              <div className="left">
                <div className="user">
                  <span className="title">STAFF</span>
                </div>
                {/* <div className="number">
                {staffBoard.slice(-1).map((staffboard,index)=>{
                  return(
                  <div key={index}>
                  <span className="nambari">{staffboard.id}</span>
                  </div>
                  )
                })}
<<<<<<< HEAD
                
=======
>>>>>>> 7808ff4a82feb5f5edb13b81a83797c378f4606a
                </div> */}
                <div className="ona">
                  <span className="link">See all</span>
                </div>
                <div className="go">
                  <KeyboardArrowUp />
                </div>
                <div className="identifier">
                  <Group className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="featured">
          <div className="graphs">
          <div className="top">
            <h1 className="title">Chart</h1>
          </div>
          <div className="bottom">
            <div className="featuredChart">
            <Charts/>
            </div>
          </div>
          </div>
          <div className="graphs">
          <div className="top">
            <h1 className="title">Calendar</h1>
          </div>
          <div className="bottom">
            <div className="featuredChart">
            <SchoolEvents/>
            </div>
          </div>
          </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 7808ff4a82feb5f5edb13b81a83797c378f4606a
export default Dashboard;