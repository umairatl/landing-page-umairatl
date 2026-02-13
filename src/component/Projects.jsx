import { Box, Card, Grid, Link, Stack, Typography, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "tss-react/mui";
import { ContentSize } from "./shared/ContentSize";
import { PROJECTS_LIST } from "../constant/projects";

const useStyles = makeStyles()((theme) => ({
  wrapBox: {
    marginBottom: 40,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    filter: "brightness(0.4)",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "180px",
    },
  },

  // Enhanced popup card!
  projectCard: {
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(5px)",
    border: "1px dashed rgba(105, 126, 80, 0.3)",
    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", // Bouncy effect!
    overflow: "hidden",
    height: "100%",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    position: "relative",

    // Paper corner fold
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      borderWidth: "0 25px 25px 0",
      borderStyle: "solid",
      borderColor: "transparent #D0DEC7 transparent transparent",
      zIndex: 1,
      transition: "all 0.3s ease",
    },

    // Decorative dot
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 15,
      right: 15,
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "#D0DEC7",
      zIndex: 1,
      transition: "all 0.3s ease",
    },

    "&:hover": {
      transform: "translateY(-12px) scale(1.03)", // More dramatic lift!
      backgroundColor: "rgba(255, 255, 255, 0.98)",
      border: "2px dashed #697e50", // Thicker border on hover
      boxShadow: "0 16px 40px rgba(105, 126, 80, 0.25)", // Bigger shadow

      "&::before": {
        borderWidth: "0 30px 30px 0", // Corner fold grows
        borderColor: "transparent #697e50 transparent transparent",
      },

      "&::after": {
        background: "#A10142", // Dot turns burgundy
        transform: "scale(1.5)",
      },

      "& $img": {
        transform: "scale(1.1)",
        filter: "brightness(0.5)", // Slightly brighter on hover
      },

      "& $projectTitle": {
        color: "#A10142",
      },

      "& $imageOverlay": {
        opacity: 1, // Show title on image
      },
    },
  },

  // Title overlay on image
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
    display: "flex",
    alignItems: "flex-end",
    padding: "1rem",
    opacity: 0,
    transition: "opacity 0.3s ease",
    zIndex: 2,
  },

  projectTitle: {
    fontFamily: "'Patrick Hand', cursive",
    fontWeight: "bold",
    transition: "color 0.3s ease",
    color: "#3A5202",
  },

  link: {
    textDecoration: "none",
  },

  linkText: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.3rem",
    fontSize: "0.8rem",
    fontFamily: "'Patrick Hand', cursive",
    color: "#697e50",
    fontWeight: 600,
  },

  contentWrapper: {
    padding: "1.5rem",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    position: "relative",
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
}));

const Projects = () => {
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    <Box mt={7} className={classes.wrapBox}>
      <ContentSize id="Projects">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h6"
            className={classes.sectionHeader}
            sx={{
              color: "#3A5202",
            }}
          >
            🎨 Projects & Hackathons
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "'Patrick Hand', cursive",
              color: "text.primary",
            }}
          >
            Some of the Projects I’ve built while learning, experimenting, and
            solving real problems through work, hackathons, and personal
            exploration.
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={3} justifyContent="center">
          {PROJECTS_LIST.map((res, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Link
                href={res.repo}
                target="_blank"
                className={classes.link}
                sx={{ display: "block", height: "100%" }}
              >
                <Card
                  className={classes.projectCard}
                  elevation={0}
                  data-aos="fade-up"
                  data-aos-duration={200 + index * 100}
                  data-aos-easing="ease-in-out"
                >
                  {/* Project Image with Overlay */}
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "8px 8px 0 0",
                    }}
                  >
                    <img
                      src={res?.img}
                      className={classes.img}
                      alt="project img"
                    />
                    {/* Title overlay that appears on hover */}
                    <Box className={classes.imageOverlay}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fff",
                          fontFamily: "'Patrick Hand', cursive",
                          fontWeight: 700,
                        }}
                      >
                        {res.website}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Project Content */}
                  <Box className={classes.contentWrapper}>
                    {/* Project Title */}
                    <Typography
                      variant="subtitle1"
                      className={classes.projectTitle}
                    >
                      {res.website}
                    </Typography>

                    {/* Period */}
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "'Patrick Hand', cursive",
                        color: "rgba(0,0,0,0.6)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {res.period}
                    </Typography>

                    {/* Link Type - Simple text with icon */}
                    <Box className={classes.linkText}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#697e50"
                          d="m7.775 3.275l1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0a.75.75 0 0 1 .018-1.042a.75.75 0 0 1 1.042-.018a2 2 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042m-4.69 9.64a2 2 0 0 0 2.83 0l1.25-1.25a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0a.75.75 0 0 1-.018 1.042a.75.75 0 0 1-1.042.018a2 2 0 0 0-2.83 0l-2.5 2.5a2 2 0 0 0 0 2.83"
                        />
                      </svg>
                      {res.linkType}
                    </Box>

                    {/* Tech Stack Chips */}
                    {res.stack && (
                      <Box sx={{ mt: 0.5 }}>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          flexWrap="wrap"
                          gap={0.5}
                        >
                          {res.stack.map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              size="small"
                              sx={{
                                fontSize: "0.7rem",
                                height: 22,
                                bgcolor: "rgba(208, 222, 199, 0.8)",
                                fontFamily: "'Patrick Hand', cursive",
                                color: "#697e50",
                                border: "1px solid rgba(105, 126, 80, 0.2)",
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    )}

                    {/* Project Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Patrick Hand', cursive",
                        color: "rgba(0,0,0,0.7)",
                        lineHeight: 1.6,
                        marginTop: "0.5rem",
                        flex: 1,
                      }}
                    >
                      {res.subtitle}
                    </Typography>
                  </Box>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </ContentSize>
    </Box>
  );
};

export default Projects;
