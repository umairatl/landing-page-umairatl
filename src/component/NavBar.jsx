import { Box, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
// import img from "../asset/img/header2.png";
import img from "../asset/img/headerImg2.png";
import { NAVBAR_OPTONS } from "../constant/navbar";
import { downloadPDF } from "../helper/downloadPdf";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  // Enhanced navbar container
  navbarContainer: {
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    borderTop: "1px dashed #697e50",
    borderRight: "1px dashed #697e50",
    borderBottom: "3px solid #697e50",
    borderLeft: "3px solid #69S7e50",
    borderRadius: "50px",
    padding: "0.8rem 2rem",
    boxShadow: "0 6px 20px rgba(105, 126, 80, 0.15)",
    transition: "all 0.3s ease",

    "&:hover": {
      borderColor: "#A10142",
    },

    [theme.breakpoints.down("md")]: {
      padding: "0.6rem 1.5rem",
    },
  },

  // Logo styling
  logo: {
    borderRadius: "50%",
    border: "2px solid #D0DEC7",
    padding: "2px",
    transition: "all 0.3s ease",

    "&:hover": {
      transform: "rotate(5deg) scale(1.1)",
      borderColor: "#A10142",
    },
  },

  // Logo text
  logoText: {
    fontFamily: "'Patrick Hand', cursive",
    fontWeight: 700,
    color: "#3A5202",
    fontSize: "1.1rem",
  },

  // Nav link
  link: {
    textDecoration: "none",
    color: "#697e50",
    fontFamily: "'Patrick Hand', cursive",
    fontWeight: 600,
    position: "relative",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    transition: "all 0.3s ease",
    cursor: "pointer",

    "&:hover": {
      color: "#A10142",
      background: "rgba(208, 222, 199, 0.3)",

      "& $linkUnderline": {
        width: "100%",
      },
    },
  },

  // CV button special style
  cvButton: {
    background: "linear-gradient(135deg, #A10142 0%, #8a0136 100%)",
    color: "#fff !important",
    padding: "0.5rem 1.5rem",
    borderRadius: "20px",
    border: "2px solid #A10142",
    transition: "all 0.3s ease",

    "&:hover": {
      background: "linear-gradient(135deg, #8a0136 0%, #A10142 100%)",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(161, 1, 66, 0.3)",
    },
  },
}));

const NavBar = () => {
  const { classes } = useStyles();

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
  };

  return (
    <ContentSize>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.navbarContainer}
      >
        {/* Logo Section */}
        <Grid item>
          <Stack direction="row" alignItems="center" columnGap={1.5}>
            <img
              src={img}
              width={40}
              height={40}
              alt="logo"
              className={classes.logo}
            />
            <Typography className={classes.logoText}>
              {`<umairatl />`}
            </Typography>
          </Stack>
        </Grid>

        {/* Navigation Links */}
        <Grid item>
          <Stack direction="row" alignItems="center" columnGap={0.5}>
            {NAVBAR_OPTONS.map((res, index) => {
              const isCVButton = res.link === "CV";

              return (
                <Box
                  key={index}
                  onClick={() => onClickLink(res.link)}
                  className={`${classes.link} ${isCVButton ? classes.cvButton : ""}`}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'Patrick Hand', cursive",
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    {res.title}
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </ContentSize>
  );
};

export default NavBar;
