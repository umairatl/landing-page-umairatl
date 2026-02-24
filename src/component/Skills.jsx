import { ContentSize } from "./shared/ContentSize";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { MAIN_SKILLS } from "../constant/skills";

const LINE_H = "2.3rem";

const useStyles = makeStyles()((theme) => ({
  sectionHeader: {
    position: "relative",
    display: "inline-block",
    padding: "0.5rem 1.5rem",
    background: "rgba(255, 255, 255, 0.8)",
    border: "2px dashed #A10142",
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
  notepad: {
    position: "relative",
    maxWidth: "520px",
    width: "100%",
    backgroundColor: "#fafaf6",
    backgroundImage: `repeating-linear-gradient(
      transparent,
      transparent calc(${LINE_H} - 1px),
      #dde3ec calc(${LINE_H} - 1px),
      #dde3ec ${LINE_H}
    )`,
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    boxShadow: "3px 4px 0 #d1d5db, 0 6px 20px rgba(0,0,0,0.07)",
    overflow: "hidden",
    paddingLeft: "3.2rem",
    paddingRight: "1rem",
    paddingTop: "0.4rem",
    paddingBottom: "0.8rem",
  },
  marginLine: {
    position: "absolute",
    left: "2.8rem",
    top: 0,
    bottom: 0,
    width: "1.5px",
    background: "rgba(161,1,66,0.35)",
    [theme.breakpoints.down("sm")]: {
      left: "2.5rem",
    },
  },
  skillRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    height: LINE_H,
    fontFamily: "'Patrick Hand', cursive",
    fontSize: "1rem",
    color: "grey",
  },
  dash: {
    color: "#697e50",
    fontSize: "0.85rem",
    fontFamily: "'Patrick Hand', cursive",
    marginRight: "0.1rem",
    flexShrink: 0,
  },
}));

export const Skills = () => {
  const { classes } = useStyles();

  const mobileCol = MAIN_SKILLS;

  return (
    <ContentSize id="Skills">
      {/* Top animated dividers */}
      <Box
        sx={{
          mt: 7,
          width: "100%",
          boxShadow: "0px 20px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            height: "1.5px",
            background:
              "linear-gradient(90deg, rgba(161,1,66,0.5) 0%, rgba(161,1,66,0.25) 35%, rgba(255,220,235,0.5) 50%, rgba(161,1,66,0.25) 65%, rgba(161,1,66,0.5) 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmerR 2.5s linear infinite",
            "@keyframes shimmerR": {
              "0%": { backgroundPosition: "200% 0" },
              "100%": { backgroundPosition: "-200% 0" },
            },
          }}
        />
      </Box>
      <Box sx={{ margin: "0.15rem 0 3rem" }}>
        <Box
          sx={{
            height: "1.5px",
            background:
              "linear-gradient(90deg, rgba(161,1,66,0.2) 0%, rgba(161,1,66,0.5) 35%, rgba(255,220,235,0.5) 50%, rgba(161,1,66,0.5) 65%, rgba(161,1,66,0.2) 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmerL 2.5s linear infinite",
            "@keyframes shimmerL": {
              "0%": { backgroundPosition: "-200% 0" },
              "100%": { backgroundPosition: "200% 0" },
            },
          }}
        />
      </Box>

      <Stack justifyContent="center" alignItems="center" width="100%">
        {/* Header — restored */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h6"
            className={classes.sectionHeader}
            sx={{ color: "#A10142" }}
          >
            👩‍💻 Code Playground
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "'Patrick Hand', cursive",
              color: "text.primary",
            }}
          >
            The core frameworks and technologies I'm working with as I continue
            expanding my skill set.
          </Typography>
        </Box>

        {/* Notepad */}
        <Box className={classes.notepad}>
          {/* Red margin line */}
          <Box className={classes.marginLine} />

          <Box>
            {mobileCol.map((skill, i) => (
              <Box
                key={i}
                className={classes.skillRow}
                data-aos="fade-up"
                data-aos-duration={300}
                data-aos-delay={i * 60}
              >
                <span className={classes.dash}>—</span>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: skill.color || "black",
                    lineHeight: 0,
                    "& svg": { width: "1.3rem", height: "1.3rem" },
                  }}
                >
                  {skill.icon}
                </Box>
                {skill.type}
              </Box>
            ))}
          </Box>
        </Box>
      </Stack>

      {/* Bottom animated dividers */}
      <Box sx={{ margin: "3rem 0 0.15rem" }}>
        <Box
          sx={{
            height: "1.5px",
            background:
              "linear-gradient(90deg, rgba(161,1,66,0.2) 0%, rgba(161,1,66,0.5) 35%, rgba(255,220,235,0.5) 50%, rgba(161,1,66,0.5) 65%, rgba(161,1,66,0.2) 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmerR 2.5s linear infinite",
          }}
        />
      </Box>
      <Box sx={{ width: "100%", boxShadow: "0px 20px 20px rgba(0,0,0,0.1)" }}>
        <Box
          sx={{
            height: "1.5px",
            background:
              "linear-gradient(90deg, rgba(161,1,66,0.5) 0%, rgba(161,1,66,0.25) 35%, rgba(255,220,235,0.5) 50%, rgba(161,1,66,0.25) 65%, rgba(161,1,66,0.5) 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmerL 2.5s linear infinite",
          }}
        />
      </Box>
    </ContentSize>
  );
};
