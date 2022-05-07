import React from "react";
import Grid from "@mui/material/Grid";
import Sidebar from "../components/Sidebar";

function MainLayout(props) {
  return (
    <Grid container>
      <Sidebar />
      <Grid
        item
        sm={true}
        md={true}
        lg={true}
        height="100vh"
        overflow="scroll"
        sx={{
          overflowX: "hidden",
          "::-webkit-scrollbar": {
            width: "7px",
          },
          "::-webkit-scrollbar-thumb": {
            background: "#0288D1",
            borderRadius: "5px",
          },
        }}
      >
        {props.children}
      </Grid>
    </Grid>
  );
}

export default MainLayout;
