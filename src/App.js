import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import Education from "./component/Education";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MobileNavbar from "./component/MobileNavbar";
import NavBar from "./component/NavBar";
import Projects from "./component/Projects";
import Recommendations from "./component/Recommendation";
import { Skills } from "./component/Skills";
import WorkExperience from "./component/WorkExperience";
import AOS from "aos";
import "aos/dist/aos.css";
import background from "../src/asset/img/crumplePaper2.jpg";
import LetsConnect from "./component/LetsConnect";
import CoverLetter from "./component/CoverLetter";
import theme from "./theme/theme.ts";
import bgImg from "./asset/img/background.png";
import MainContent from "./component/MainContent.jsx";

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
    [theme.breakpoints.down("lg")]: {
      padding: "1rem 3rem",
      width: "95%",
    },
    [theme.breakpoints.down("md")]: {
      margin: "10px 0px",
      padding: "0px",
    },
  },
  backgroundGrid: {
    position: "relative",
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "repeat", // repeat the wallpaper
    backgroundSize: "200px 200px", // tile size
    backgroundPosition: "center",
    overflow: "hidden",
  },
}));

export default function App() {
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  function onClickOpen() {
    setOpen(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {open ? <MainContent /> : <CoverLetter onOpen={onClickOpen} />}
    </ThemeProvider>
  );
}
