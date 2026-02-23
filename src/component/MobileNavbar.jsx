import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { makeStyles } from "tss-react/mui";
import { NAVBAR_OPTONS } from "../constant/navbar";
import { downloadPDF } from "../helper/downloadPdf";
import { Stack, Typography } from "@mui/material";
import img from "../asset/img/headerImg2.png";

const DRAWER_WIDTH = 260;

const useStyles = makeStyles()(() => ({
  logo: {
    borderRadius: "50%",
    border: "2px solid #D0DEC7",
    padding: "2px",
    transition: "border-color 0.3s ease",
    cursor: "pointer",
  },

  logoActive: {
    borderColor: "#A10142",
    animation: "$logoBounce 0.4s ease",
  },

  "@keyframes logoBounce": {
    "0%": { transform: "rotate(0deg) scale(1)" },
    "40%": { transform: "rotate(8deg) scale(1.12)" },
    "70%": { transform: "rotate(-3deg) scale(1.05)" },
    "100%": { transform: "rotate(0deg) scale(1)" },
  },

  logoText: {
    fontFamily: "'Patrick Hand', cursive",
    fontWeight: 700,
    color: "#3A5202",
    fontSize: "1rem",
  },

  link: {
    color: "#697e50",
    fontFamily: "'Patrick Hand', cursive",
    fontWeight: 600,
    fontSize: "1rem",
    padding: "0.65rem 1.2rem",
    borderRadius: "8px",
    transition: "all 0.2s ease",
    cursor: "pointer",
    display: "block",
    "&:hover": {
      color: "#A10142",
      background: "rgba(208, 222, 199, 0.3)",
    },
  },

  cvLink: {
    display: "block",
    margin: "0 1.2rem",
    padding: "0.5rem 1rem",
    background: "linear-gradient(135deg, #A10142 0%, #8a0136 100%)",
    color: "#fff",
    borderRadius: "8px",
    border: "2px solid #A10142",
    textAlign: "center",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontSize: "0.78rem",
    cursor: "pointer",
    fontFamily: "'Patrick Hand', cursive",
    fontWeight: 600,
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: "0 4px 12px rgba(161, 1, 66, 0.3)",
    },
  },
}));

export default function MobileNavbar() {
  const { classes, cx } = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const [logoActive, setLogoActive] = React.useState(false);

  const handleLogoClick = () => {
    setLogoActive(true);
    setTimeout(() => setLogoActive(false), 400);
  };

  const onClickLink = (link) => {
    setIsOpen(false);
    setTimeout(() => {
      if (link === "CV") {
        downloadPDF();
      } else {
        const element = document.querySelector(link);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 300);
  };

  return (
    <>
      {/* AppBar — same border treatment as desktop navbar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
          borderTop: "1px dashed #697e50",
          borderBottom: "3px solid #697e50",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img
              src={img}
              width={34}
              height={34}
              alt="logo"
              className={cx(classes.logo, logoActive && classes.logoActive)}
              onClick={handleLogoClick}
            />
            <Typography className={classes.logoText}>
              {`<umairatl />`}
            </Typography>
          </Stack>
          <IconButton edge="end" onClick={() => setIsOpen(true)}>
            <MenuIcon sx={{ color: "#3A5202" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer — slides in from right */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        slotProps={{
          backdrop: {
            sx: {
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0, 0, 0, 0.25)",
            },
          },
        }}
        PaperProps={{
          sx: {
            width: DRAWER_WIDTH,
            bgcolor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            borderLeft: "3px solid #697e50",
            borderTop: "1px dashed #697e50",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Drawer header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "1rem 1rem 1rem 1.2rem",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <img
              src={img}
              width={34}
              height={34}
              alt="logo"
              className={cx(classes.logo, classes.logoActive)}
            />
            <Typography className={classes.logoText}>
              {`<umairatl />`}
            </Typography>
          </Stack>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon sx={{ color: "#697e50" }} />
          </IconButton>
        </Box>

        <Divider
          sx={{ borderStyle: "dashed", borderColor: "#697e50", mx: 1.5 }}
        />

        {/* Nav links */}
        <Box sx={{ flex: 1, pt: 1 }}>
          {NAVBAR_OPTONS.filter((r) => r.link !== "CV").map((res, index) => (
            <Box
              key={index}
              className={classes.link}
              onClick={() => onClickLink(res.link)}
            >
              {res.title}
            </Box>
          ))}
        </Box>

        {/* CV pinned to bottom */}
        <Box sx={{ pb: 3 }}>
          <Divider
            sx={{
              borderStyle: "dashed",
              borderColor: "#697e50",
              mx: 1.5,
              mb: 1.5,
            }}
          />
          <Box className={classes.cvLink} onClick={() => onClickLink("CV")}>
            CV
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
