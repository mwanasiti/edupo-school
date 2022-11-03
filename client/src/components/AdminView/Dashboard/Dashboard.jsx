import { Grid } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

import { BorderColor, Group, MoreVert, Person, School } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../BarRoutes/Sidebar";
import "./../BarRoutes/Side.css";
import "./Dashboard.css";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Charts from "./Charts";
import SchoolEvents from "./SchoolEvents";
import { useNavigate } from "react-router-dom";


function Dashboard() {
let navigate  = useNavigate()

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
                  <span className="nambari">18</span>
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
                  <span className="nambari">14</span>
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
                  <span className="nambari">10</span>
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
                <div className="number">
                  <span className="nambari">45</span>
                </div>
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
          {/* <div className="graphs">
          <div className="top">
            <h1 className="title">Calendar</h1>
            
          </div>
          <div className="bottom">
            <div className="featuredChart">
            <SchoolEvents/>
            </div>
          </div>
          </div> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;