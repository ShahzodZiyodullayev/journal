import React from "react";
import Grid from "@mui/material/Grid";
import Sidebar from "../components/Sidebar";
import Header from "../components/header/Header";

function MainLayout(props) {
  return (
    <>
    <Header />
    <Grid container>
       <Sidebar />
       <Grid
        item
        sm={true}
        md={true}
        lg={true}
        height="90vh"
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
    </>
  );
}

export default MainLayout;
