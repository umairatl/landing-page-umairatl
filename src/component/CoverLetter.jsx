import { useState, useRef, useEffect } from "react";
import { Box, Button, Typography, Grid, Chip, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Img from "../asset/img/coverLetterImg.png";
import crumplePaper from "../asset/img/coverLetterBackground.png";
import { makeStyles } from "tss-react/mui";
import bgImg from "../asset/img/background.png";
import { PROJECTS_LIST } from "../constant/projects";

const useStyles = makeStyles()((theme) => ({
  wrapBox: {
    position: "relative",
    padding: "1rem 3rem",
    width: "100%",
    height: "100%",
    overflowY: "auto",
    textAlign: "center",
    backgroundImage: `url(${crumplePaper})`,
    backgroundSize: "480px 710px",
    backgroundPosition: "center",
    backgroundColor: "transparent",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "rgba(208, 222, 199, 0.3)",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#9CAF88",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#7E8F6A",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
      backgroundSize: "405px 900px",
    },
  },

  scrollHint: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    background:
      "linear-gradient(to bottom, transparent, rgba(230, 225, 210, 0.85))",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 6,
    pointerEvents: "none",
    zIndex: 2,
    borderRadius: "0 0 4px 4px",
    transition: "opacity 0.4s ease",
  },

  bounceIcon: {
    color: "#697e50",
    animation: "$nudge 1.6s ease-in-out infinite",
  },

  "@keyframes nudge": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(4px)" },
  },
}));

const skills = ["RectJS/Native", "NextJs", "AngularJs", "Typescript"];

export default function CoverLetter({ onOpen }) {
  const projectCount = PROJECTS_LIST.length;
  const { classes } = useStyles();

  const [showHint, setShowHint] = useState(false);
  const wrapBoxRef = useRef(null);

  // Only show the hint if the content actually overflows the card
  useEffect(() => {
    const el = wrapBoxRef.current;
    if (el) setShowHint(el.scrollHeight > el.clientHeight);
  }, []);

  const handleScroll = () => {
    const el = wrapBoxRef.current;
    if (!el) return;
    const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 16;
    if (nearBottom) setShowHint(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "250px 250px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,

        "&::before": {
          content: '""',
          position: "absolute",
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
      }}
    >
      {/* Card */}
      <Box
        sx={{
          position: "relative",
          width: { xs: 350, sm: 420 },
          height: { xs: 480, sm: 560 },
        }}
      >
        {/* Scrollable content */}
        <Box
          ref={wrapBoxRef}
          className={classes.wrapBox}
          onScroll={handleScroll}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} mb={2}>
              <img src={Img} width="100" height="100" alt="profile" />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                sx={{ opacity: 0.7, letterSpacing: "0.02em", mb: 1 }}
              >
                Welcome to my little corner of the web
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'Patrick Hand', cursive",
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                Here's something about me and my work I've built and cared
                about.
              </Typography>

              {/* Portfolio Snippets */}
              <Box
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(5px)",
                  border: "1px dashed rgba(105, 126, 80, 0.3)",
                  borderRadius: 1,
                  p: 2,
                  mb: 3,
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                    color: "#697e50",
                    display: "block",
                    mb: 1.5,
                  }}
                >
                  Quick Peek
                </Typography>

                <Stack spacing={1.5}>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(0,0,0,0.6)",
                        display: "block",
                        mb: 0.3,
                      }}
                    >
                      Projects featured here:
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        fontFamily: "'Patrick Hand', cursive",
                        color: "#697e50",
                      }}
                    >
                      {projectCount - 1}+
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(0,0,0,0.6)",
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      Tech Stack / Tools
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      flexWrap="wrap"
                      gap={0.5}
                    >
                      {skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            fontSize: "0.7rem",
                            height: 22,
                            bgcolor: "rgba(208, 222, 199, 0.8)",
                            fontFamily: "'Patrick Hand', cursive",
                            color: "#697e50",
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </Box>

              <Button
                variant="outlined"
                onClick={onOpen}
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontSize: 12,
                  px: 3,
                  py: 0.8,
                  borderColor: "#697e50",
                  color: "#697e50",
                  fontWeight: 600,
                  bgcolor: "rgba(255, 255, 255, 0.5)",
                  "&:hover": {
                    bgcolor: "#A10142",
                    color: "#fff",
                    borderColor: "#A10142",
                  },
                }}
              >
                Check out More
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Scroll hint — gradient fade + bouncing arrow, hidden once user reaches bottom */}
        {showHint && (
          <Box className={classes.scrollHint}>
            <KeyboardArrowDownIcon
              fontSize="small"
              className={classes.bounceIcon}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
