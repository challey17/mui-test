import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>

        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
