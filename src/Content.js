import React from "react";
import ProjCard from "./ProjCard";
import { Grid } from "@material-ui/core";

const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <ProjCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ProjCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ProjCard />
      </Grid>
    </Grid>
  );
};

export default Content;
