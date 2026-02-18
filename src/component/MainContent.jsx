import { Box, Grid } from "@mui/material";
import bgImg from "../asset/img/background.png";
import NavBar from "./NavBar";
import MobileNavbar from "./MobileNavbar";
import Header from "./Header";
import { Skills } from "./Skills";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import LetsConnect from "./LetsConnect";
import Recommendations from "./Recommendation";
import Footer from "./Footer";
import { makeStyles } from "tss-react/mui";
import background from "../asset/img/crumplePaper2.jpg";

const useStyles = makeStyles()((theme) => ({
  img: {
    width: "100%",
    height: "100%",
  },
  header: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobileHeader: {
    display: "none",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  wrapGrid: {
    width: 1300,
    backgroundImage: `url(${background})`,
    marginTop: 35,
    marginBottom: 35,
    padding: "1rem 5rem",
    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
    [theme.breakpoints.down("lg")]: {
      padding: "1rem 3rem",
      width: "95%",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0px 0px",
      padding: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  backgroundGrid: {
    position: "relative",
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "repeat",
    backgroundSize: "200px 200px",
    backgroundPosition: "center",

    "&::before": {
      content: '""',
      inset: 0,
      backgroundImage: `url(${bgImg})`,
      backgroundRepeat: "repeat",
      backgroundSize: "200px 200px",
      filter: "blur(12px)",
      opacity: 0.25,
      transform: "scale(1.1)",
      zIndex: 0,
    },

    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.4)",
      zIndex: 0,
    },

    "& > *": {
      position: "relative",
      zIndex: 1,
    },
  },
}));

export default function MainContent() {
  const { classes } = useStyles();

  return (
    <Box className={classes.backgroundGrid}>
      <Grid container direction="row" justifyContent="center" width="100%">
        <Box className={classes.mobileHeader}>
          <MobileNavbar />
        </Box>
        <Grid item className={classes.wrapGrid}>
          <Box className={classes.header}>
            <NavBar />
          </Box>
          <Header />
          <Skills />
          <WorkExperience />
          <Projects />
          <Recommendations />
          <LetsConnect />
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}
