import { Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  wrapGrid: {
    width: 1200,
    maxWidth: "90%",
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
      maxWidth: "85%",
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
