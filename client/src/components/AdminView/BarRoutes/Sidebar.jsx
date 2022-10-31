import React from "react";
import "./Side.css";
import { SideData } from "./SideData";

function Sidebar() {
  return (
    <div className="sidebar">
    <h1>Sidebar</h1>
      <ul>
        {
            SideData.map((val, key) => {
          return (
            <li key={key} onClick={()=>{window.location.pathname = val.link}}>
              {" "}
              <div>{val.icon}</div>{" "}
              <div>{val.title}</div>{"  "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
