import { Container, Grid } from "@material-ui/core";
import React from "react";

function StudentForm() {
  return (
    <div className="bigParent">
      <Grid container>
        <Grid item sm={4} xs={2} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={7} xs={10} lg={9}>
          <h1>Student Form</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default StudentForm;
