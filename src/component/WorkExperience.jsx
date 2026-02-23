import { Box, Dialog, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "tss-react/mui";

import crumplePaper from "../asset/img/crumplePaper2.jpg";
import { WORK_EXPERIENCE } from "../constant/workExperience";
import { ContentSize } from "./shared/ContentSize";
import WorkDialog from "./WorkDialog";

const useStyles = makeStyles()((theme) => ({
  wrapBox: {
    marginTop: 40,
    [theme.breakpoints.down("md")]: { marginTop: 0 },
  },
  img: {
    borderRadius: "50%",
    border: "3px solid #D0DEC7",
    padding: "2px",
    background: "#fff",
    transition: "all 0.3s ease",
  },
  period: {
    [theme.breakpoints.down("md")]: { display: "none" },
  },
  paperCard: {
    padding: "2.5rem",
    borderRadius: "8px",
    backgroundImage: `url(${crumplePaper})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 8px 24px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(0,0,0,0.06)",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: "rgba(255, 255, 255, 0.3)",
      borderRadius: "8px",
      pointerEvents: "none",
    },
    "& > *": { position: "relative", zIndex: 1 },
  },
  workItem: {
    padding: "1.2rem 1.5rem",
    margin: "10px 0",
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(5px)",
    border: "1px dashed rgba(105, 126, 80, 0.3)",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      left: -30,
      top: "50%",
      transform: "translateY(-50%)",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      background: "#D0DEC7",
      border: "3px solid #697e50",
      zIndex: 2,
      transition: "all 0.3s ease",
      [theme.breakpoints.down("md")]: {
        left: -20,
      },
    },
    "&:hover": {
      background: "rgba(255, 255, 255, 0.95)",
      border: "2px dashed #A10142",
      transform: "translateX(8px) scale(1.01)",
      boxShadow: "0 6px 20px rgba(105, 126, 80, 0.15)",
      "&::before": {
        background: "#A10142",
        transform: "translateY(-50%) scale(1.3)",
      },
      "& $img": {
        transform: "scale(1.1) rotate(5deg)",
        borderColor: "#A10142",
      },
    },
  },
  timeline: {
    position: "absolute",
    left: -24,
    top: 0,
    bottom: 0,
    width: "2px",
    background:
      "linear-gradient(to bottom, #D0DEC7 0%, #697e50 50%, #D0DEC7 100%)",
    [theme.breakpoints.down("md")]: {
      left: -15,
    },
  },
  sectionHeader: {
    position: "relative",
    display: "inline-block",
    padding: "0.5rem 1.5rem",
    background: "rgba(255, 255, 255, 0.8)",
    border: "2px dashed #697e50",
    borderRadius: "20px",
    marginBottom: "1rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backdropFilter: "blur(5px)",
    "&::before": {
      content: '""',
      position: "absolute",
      top: -4,
      left: -4,
      right: -4,
      bottom: -4,
      border: "1px solid #D0DEC7",
      borderRadius: "22px",
      zIndex: -1,
    },
  },
  currentBadge: {
    display: "inline-block",
    padding: "0.1rem 0.4rem",
    background: "#A10142",
    color: "#fff",
    borderRadius: "12px",
    fontSize: "0.7rem",
    fontWeight: 700,
    marginLeft: "0.5rem",
    fontFamily: "'Patrick Hand', cursive",
  },
}));

const WorkExperience = () => {
  const { classes } = useStyles();
  const [open, setOpen] = useState(null);

  return (
    <ContentSize id="Experience">
      <Grid container direction="row" alignItems="center" mt={7}>
        <Grid item xs={12} sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h6"
            className={classes.sectionHeader}
            sx={{
              color: "#3A5202",
            }}
          >
            🚀 Work Experience
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "'Patrick Hand', cursive",
              color: "text.primary",
            }}
          >
            📋 Click on the box to view more details*
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{ position: "relative", paddingLeft: { md: "2rem", xs: 0 } }}
          >
            <Box className={classes.timeline} />

            {WORK_EXPERIENCE.map((res, index) => (
              <Box
                key={index}
                className={classes.workItem}
                onClick={() => setOpen(res)}
                data-aos="fade-up"
                data-aos-duration={200 + index * 100}
                data-aos-easing="ease-in-out"
              >
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack direction="row" alignItems="center" columnGap={2}>
                    <Box
                      sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        alt="company logo"
                        src={res.img}
                        width={50}
                        height={50}
                        className={classes.img}
                      />
                    </Box>
                    <Stack direction="column">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="subtitle1">
                          {res.company}
                        </Typography>
                        {res.isCurrent && (
                          <span className={classes.currentBadge}>Current</span>
                        )}
                      </Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontFamily: "'Patrick Hand', cursive",
                          color: "rgba(0,0,0,0.7)",
                        }}
                      >
                        {res.title}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="subtitle2" className={classes.period}>
                    {res.period}
                  </Typography>
                </Grid>
              </Box>
            ))}
          </Box>

          <Dialog open={!!open} onClose={() => setOpen(null)}>
            <WorkDialog details={open} handleClose={() => setOpen(null)} />
          </Dialog>
        </Grid>
      </Grid>
    </ContentSize>
  );
};

export default WorkExperience;
