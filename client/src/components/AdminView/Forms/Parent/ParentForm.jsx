import React from "react";
import "./Parent.css";

function ParentForm() {
  return (
    <div className="new">
      <div className="top">
        <h1>Add Parent</h1>
      </div>
      <div className="bottom">
        <div className="left">left
        <img src="https://i.pinimg.com/564x/a9/cc/d7/a9ccd7f3b82fc8b70c6d75a299302001.jpg" alt='profile'/>
        </div>
        <div className="right"> 
        <form>
        <div className="formInput">
          <label></label>
        </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default ParentForm;
