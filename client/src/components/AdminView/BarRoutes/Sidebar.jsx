import React from "react";
import "./Side.css";
import { SideData } from "./SideData";

function Sidebar() {
  return (
    <div className="sidebar">
   
      <ul className="sidebarlist" >
        {
            SideData.map((val, key) => {
          return (
            <li key={key} onClick={()=>{window.location.pathname = val.link}}  className="row"
            id={window.location.pathname == val.link ? "active": "  "}
            >
              {" "}
              <div id="icon">{val.icon}</div>{" "}
              <div id="title">{val.title}</div>{"  "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
