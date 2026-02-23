import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CoverLetter from "./component/CoverLetter";
import theme from "./theme/theme.ts";
import MainContent from "./component/MainContent.jsx";
import crumplePaper from "./asset/img/crumplePaper2.jpg";
import bgImg from "./asset/img/background.png";

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
    // Preload heavy background images while cover letter is visible
    [crumplePaper, bgImg].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
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
