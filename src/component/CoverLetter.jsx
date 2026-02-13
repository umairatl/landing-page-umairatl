import {
  Box,
  Button,
  Typography,
  Paper,
  Grid,
  Chip,
  Stack,
} from "@mui/material";
import Img from "../asset/img/coverLetterImg.png";
// import crumplePaper from "../asset/img/crumplePaper2.jpg";
import crumplePaper from "../asset/img/coverLetterBackground.png";
import { makeStyles } from "tss-react/mui";
import bgImg from "../asset/img/background.png";

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
  quickPickBox: {
    // background: "pink",
    bgcolor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(5px)",
    border: "1px dashed rgba(105, 126, 80, 0.3)",
    borderRadius: 1,
    p: 2,
    mb: 3,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      // width: "80%",
      // height: "70%",
    },
  },
}));

export default function CoverLetter({ onOpen }) {
  const skills = ["ReactJs", "NextJs", "React Native", "AngularJs"];
  const projectCount = 8;
  const { classes } = useStyles();

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "250px 250px", // adjust tile size
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
      {/* Envelope Container */}
      <Box
        sx={{
          position: "relative",
          width: { xs: 350, sm: 420 },
          height: { xs: 480, sm: 560 },
        }}
      >
        {/* Letter/Paper inside envelope with crumpled paper texture */}
        <Box className={classes.wrapBox}>
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
                sx={{
                  opacity: 0.7,
                  letterSpacing: "0.02em",
                  mb: 1,
                }}
              >
                Welcome to my humble swamp,
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
                  {/* Project Count */}
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
                      {projectCount}+
                    </Typography>
                  </Box>

                  {/* Skills */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(0,0,0,0.6)",
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      FE Tech Stack
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

        {/* Stamp */}
        {/* <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 20,
            width: 50,
            height: 50,
            bgcolor: "#A10142",
            border: "2px solid rgba(0,0,0,0.1)",
            borderRadius: "2px",
            zIndex: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            boxShadow: "0 2px 8px rgba(161, 1, 66, 0.3)",
          }}
        >
          📮
        </Box> */}
      </Box>
    </Box>
  );
}
