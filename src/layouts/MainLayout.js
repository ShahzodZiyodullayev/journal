import React from "react";
import Grid from "@mui/material/Grid";
import Sidebar from "../components/Sidebar";

function MainLayout(props) {
  return (
    <Grid container>
      <Sidebar />
      <Grid item sm={true} md={true} lg={true} height="100vh" overflow="scroll">
        {props.children}
      </Grid>
    </Grid>
  );
}

export default MainLayout;
