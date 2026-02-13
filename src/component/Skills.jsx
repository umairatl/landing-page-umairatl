import { ContentSize } from "./shared/ContentSize";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Divider from "@mui/material/Divider";
import { MAIN_SKILLS } from "../constant/skills";

const useStyles = makeStyles()((theme) => ({
  divider: {
    border: "0.7px solid #697e50",
  },
  sectionHeader: {
    position: "relative",
    display: "inline-block",
    padding: "0.5rem 1.5rem",
    // background: "rgba(255, 255, 255, 0.8)",
    // border: "2px dashed #697e50",
    // borderRadius: "20px",
    marginBottom: "1rem",
    // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    // backdropFilter: "blur(5px)",

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
  skillItemGreen: {
    width: "90%",
    padding: "0.75rem 1rem",
    borderRadius: "12px",
    cursor: "default",
    background: "rgba(255, 255, 255, 0.8)",
    borderLeft: "4px solid #697e50",
    borderBottom: "2px solid #697e50",
    borderTop: "2px dashed #697e50",
    borderRight: "2px dashed #697e50",

    boxShadow: "0 2px 8px rgba(105, 126, 80, 0.1)",

    "&:hover": {
      "& .skill-icon": {
        transform: "scale(1.1) rotate(5deg)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  skillIcon: {
    transition: "transform 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid #697e50",
    background: "rgba(208, 222, 199, 0.3)",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
    [theme.breakpoints.down("sm")]: {
      width: "25px",
      height: "25px",
    },
  },
}));

export const Skills = () => {
  const { classes } = useStyles();

  return (
    <ContentSize id="Skills">
      {/* Top Divider */}
      <Divider
        className={classes.divider}
        sx={{
          mt: 7,
          width: "100%",
          boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Divider className={classes.divider} sx={{ margin: "0.1rem 0 3rem" }} />

      {/* Skills Section */}
      <Stack justifyContent="center" alignItems="center" width="100%">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h6"
            className={classes.sectionHeader}
            sx={{
              color: "#697e50",
            }}
          >
            🎨 Code Playground
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "text.primary" }}>
            My main coding focus these days, with some experience sprinkled in
          </Typography>
        </Box>

        {/* Skills Grid */}
        <Box sx={{ width: "95%" }}>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            {MAIN_SKILLS.map((skill, index) => (
              <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
                <Box className={classes.skillItemGreen}>
                  <Stack
                    direction={{ xs: "column", lg: "row" }}
                    alignItems="center"
                    spacing={1.5}
                  >
                    <Box className={`skill-icon ${classes.skillIcon}`}>
                      {skill.icon}
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "text.secondary" }}
                    >
                      {skill.type}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>

      {/* Bottom Divider */}
      <Divider className={classes.divider} sx={{ margin: "3rem 0 0.1rem" }} />
      <Divider
        className={classes.divider}
        sx={{ width: "100%", boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.1)" }}
      />
    </ContentSize>
  );
};
