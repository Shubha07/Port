import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

//header component for the application
export default props => (
  <AppBar position="static">
    <Typography variant="h3" style={{ height: 1, textAlign: "Center" }}>
      TODO LIST
    </Typography>

    <Toolbar />
  </AppBar>
);
