import { BorderColor, Group, KeyboardArrowUp, Person, School } from "@mui/icons-material";
import React from "react";
import "./Widget.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widget">
        <div className="left">
          <span className="title">TEACHERS</span>
          <span className="counter">1</span>
          <span className="link">All</span>
        </div>
        <div className="left">
        <div className="percentage"> 
           <KeyboardArrowUp/>
        </div>
        <BorderColor className="icon"/>
        </div>
      </div>
      <div className="widget">
        <div className="left">
          <span className="title">Students</span>
          <span className="counter">1</span>
          <span className="link">All</span>
        </div>
        <div className="left">
        <div className="percentage">
           <KeyboardArrowUp/>
        </div>
        <School className="icon"/>
        </div>
      </div>
      <div className="widget">
        <div className="left">
          <span className="title">Parents</span>
          <span className="counter">1</span>
          <span className="link">All</span>
        </div>
        <div className="left">
        <div className="percentage">
           <KeyboardArrowUp/>
        </div>
        <Person className="icon"/>
        </div>
      </div>
      <div className="widget">
        <div className="left">
          <span className="title">Staff</span>
          <span className="counter">1</span>
          <span className="link">All</span>
        </div>
        <div className="left">
        <div className="percentage">
           <KeyboardArrowUp/>
        </div>
        <Group className="icon"/>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
