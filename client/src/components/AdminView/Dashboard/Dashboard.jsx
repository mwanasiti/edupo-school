import { Grid } from "@material-ui/core";
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
        <Grid item sm={4} xs={2} lg={2}>
          <div className="home">
          Dashboard
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
