import React from "react";
import "./Side.css";
import { SideData } from "./SideData";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        {SideData.map((val, key) => {
          return <li></li>;
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
