import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  iconStyles: {
    paddingRight: 10,
  },
  navStyles: {
    backgroundColor: "#98665B",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navStyles}>
      <Toolbar>
        <ArrowDropDownCircleOutlinedIcon className={classes.iconStyles} />

        <Typography> Chayce Knaub</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
