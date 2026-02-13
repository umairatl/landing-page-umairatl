import { Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  wrapGrid: {
    width: 1200,
    // background: "white",
    marginTop: 50,
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  },
}));

export const ContentSize = ({ children, id }) => {
  const { classes } = useStyles();

  return (
    <Grid
      id={id}
      container
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item className={classes.wrapGrid}>
        {children}
      </Grid>
    </Grid>
  );
};
