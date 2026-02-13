import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "tss-react/mui";
import { NAVBAR_OPTONS } from "../constant/navbar";
import CloseIcon from "@mui/icons-material/Close";
import { downloadPDF } from "../helper/downloadPdf";
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles()(() => ({
  cardMenu: {
    "& .MuiPaper-root": {
      width: "90% !important",
      maxWidth: "100% !important",
      alignContent: "center",
      left: "5vw !important",
      top: "25% !important",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
    },
  },
  menuOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
  },
  menuContent: {
    position: "relative",
    zIndex: 1,
    backdropFilter: "blur(12px)",
  },
  blurBackdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
    backdropFilter: "blur(6px)",
    zIndex: 1200,
  },
}));

export default function MobileNavbar() {
  const { classes } = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  const onClickLink = (link) => {
    if (link === "CV") {
      downloadPDF();
    } else {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    }
    handleClose();
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "transparent",
          padding: "0.2rem 0.1rem",
          borderBottom: "2px solid #3A5202",
        }}
      >
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item>
              <IconButton onClick={handleClick}>
                {isMenuOpen ? (
                  <CloseIcon sx={{ color: "#A10142" }} />
                ) : (
                  <MenuIcon sx={{ color: "#3A5202" }} />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Menu
        className={classes.cardMenu}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* Menu content */}
        <Box className={classes.menuContent}>
          {NAVBAR_OPTONS.map((res, index) => (
            <MenuItem
              key={index}
              onClick={() => onClickLink(res.link)}
              // sx={{ py: 1.5 }}
            >
              <Typography sx={{ fontFamily: "'Patrick Hand', cursive" }}>
                {res.title}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </Menu>

      {isMenuOpen && (
        <Box className={classes.blurBackdrop} onClick={handleClose} />
      )}
    </>
  );
}
