import { Grid } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

import { BorderColor, Group, Person, School } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../BarRoutes/Sidebar";
import "./../BarRoutes/Side.css";
import "./Dashboard.css";

function Dashboard() {
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
                  <span className="link">See all</span>
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
                  <span className="link">See all</span>
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
                  <span className="link">See all</span>
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
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
