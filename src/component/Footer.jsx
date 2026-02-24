import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, Link, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  wrapFooter: {
    margin: "10px 0",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      flexDirection: "column-reverse",
    },
  },
  img: {
    borderRadius: "50%",
  },
  link: {
    color: "black",
    "&:hover": {
      color: "#A10142",
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <ContentSize>
      <Grid
        container
        justifyContent="space-between"
        className={classes.wrapFooter}
        rowGap={2}
      >
        <Grid item>
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            © 2026 Designed and developed by umairatl. Built with ReactJs
          </Typography>
        </Grid>
        <Grid item>
          <Stack direction="row" justifyContent="center" columnGap={2}>
            <Link
              href="https://www.linkedin.com/in/umairatul-asyiqin-1b43271a8/"
              className={classes.link}
            >
              <LinkedInIcon />
            </Link>
            <Link href="https://github.com/umairatl" className={classes.link}>
              <GitHubIcon />
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </ContentSize>
  );
};

export default Footer;
