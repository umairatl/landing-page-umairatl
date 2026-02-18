import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CoverLetter from "./component/CoverLetter";
import theme from "./theme/theme.ts";
import MainContent from "./component/MainContent.jsx";

export default function App() {
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
