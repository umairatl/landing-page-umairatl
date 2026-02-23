import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "tss-react/mui";
import QL from "../asset/img/quoteLeft.png";
import QR from "../asset/img/quoteRight.png";
import { feedback } from "../constant/feedback";
import { ContentSize } from "./shared/ContentSize";
import LaunchIcon from "@mui/icons-material/Launch";

const useStyles = makeStyles()((theme) => ({
  img: {
    width: "60px !important",
    height: "60px",
    borderRadius: "50%",
  },
  arrowIcons: {
    width: 32,
    height: 32,
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    cursor: "pointer",
  },

  wrapItemFeedback: {
    height: "300px",
    [theme.breakpoints.down("md")]: {
      height: "450px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "750px",
    },
  },
  quoteImg: {
    width: "100%",
    height: "50%",
  },
  carouselContainer: {
    "& .carousel .control-dots .dot": {
      background: "#697E50",
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
  wrapCarouselGrid: {
    position: "relative",
    // The Top-Left Line
    "&::after": {
      content: '""',
      marginTop: "20px",
      position: "absolute",
      left: 0,
      top: "8%",
      height: "50%",
      width: "1.5px",
      backgroundColor: "#3A5202",
      [theme.breakpoints.down("sm")]: {
        top: "2%",
      },
    },
    // The Bottom-Right Line
    "&::before": {
      content: '""',
      marginBottom: "20px", // Mirrors your top margin
      position: "absolute",
      right: 0,
      bottom: "5%",
      height: "50%", // Matches the height of the top line
      width: "1.5px",
      backgroundColor: "#3A5202",
      [theme.breakpoints.down("sm")]: {
        bottom: "2%",
      },
    },
  },
}));

const HandleArrowNext = (props) => {
  const { classes } = useStyles();
  const { clickHandler, hasNext } = props || {};

  return (
    hasNext && (
      <ChevronRightIcon
        onClick={clickHandler}
        className={classes.arrowIcons}
        style={{
          background: "rgba(255, 255, 255, 0.50)",
          right: 0,
          width: "40px",
          height: "40px",
          borderRadius: "40px",
        }}
      />
    )
  );
};

const HandleArrowPrev = (props) => {
  const { classes } = useStyles();
  const { clickHandler, hasPrev } = props || {};

  return (
    hasPrev && (
      <ChevronLeftIcon
        onClick={clickHandler}
        className={classes.arrowIcons}
        style={{
          background: "rgba(255, 255, 255, 0.50)",
          left: 0,
          width: "40px",
          height: "40px",
          borderRadius: "40px",
        }}
      />
    )
  );
};

const Recommendations = () => {
  const { classes } = useStyles();

  return (
    <Box sx={{ width: "100%", margin: "6rem 0rem 3rem" }}>
      <ContentSize id="Feedback">
        <Grid container direction="row" alignItems="center">
          <Grid item sm={12}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                className={classes.sectionHeader}
                sx={{
                  color: "#3A5202",
                }}
              >
                💬 LinkedIn Recommendations
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "'Patrick Hand', cursive",
                  color: "text.primary",
                }}
              >
                Read the full endorsements and see what else I've been up to on
                <span
                  style={{
                    color: "#3A5202",
                    marginLeft: 5,
                    textDecoration: "underline",
                    cursor: "pointer",
                    whiteSpace: "nowrap", // This prevents LinkedIn and the icon from splitting
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/umairatul-asyiqin-1b43271a8/",
                      "_blank",
                    )
                  }
                >
                  LinkedIn
                  <LaunchIcon
                    style={{
                      fontSize: "0.8rem",
                      verticalAlign: "middle",
                      marginLeft: "2px",
                      marginBottom: "7px", // Fine-tunes the "float" of the icon
                    }}
                  />
                </span>
              </Typography>
            </Box>
          </Grid>

          <Grid item sm={12} width="100%" className={classes.wrapCarouselGrid}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={11}>
                <Divider sx={{ border: "1px solid #3A5202", width: "98%" }} />
              </Grid>
              <Grid item xs={1}>
                <img alt="quote right" src={QR} className={classes.quoteImg} />
              </Grid>
            </Grid>

            <Grid container justifyContent="flex-end" p={3}>
              <Grid item xs={12}>
                <Carousel
                  className={classes.carouselContainer}
                  transitionTime="2000"
                  showThumbs={false}
                  emulateTouch
                  preventMovementUntilSwipeScrollTolerance
                  renderArrowPrev={(clickHandler, hasPrev) => (
                    <HandleArrowPrev
                      clickHandler={clickHandler}
                      hasPrev={hasPrev}
                    />
                  )}
                  renderArrowNext={(clickHandler, hasNext) => (
                    <HandleArrowNext
                      clickHandler={clickHandler}
                      hasNext={hasNext}
                    />
                  )}
                >
                  {feedback.map((res, index) => (
                    <Grid container key={index} rowGap={3}>
                      <Grid item xs={12}>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          columnGap={2}
                        >
                          <Grid item height="100%">
                            <img
                              alt="profile pic"
                              src={res.img}
                              width={60}
                              height={60}
                              className={classes.img}
                            />
                          </Grid>
                          <Grid item>
                            <Stack direction="column" textAlign="left">
                              <Typography
                                variant="subtitle1"
                                sx={{ fontFamily: "'Patrick Hand', cursive" }}
                              >
                                {res.name}
                              </Typography>
                              <Typography
                                color="#595959"
                                variant="subtitle2"
                                sx={{ fontFamily: "'Patrick Hand', cursive" }}
                              >
                                {res.position}
                              </Typography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} className={classes.wrapItemFeedback}>
                        <Typography
                          variant="subtitle1"
                          textAlign="left"
                          sx={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          "{res.feedback}"
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Carousel>
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              marginTop={0}
              columnGap={1}
            >
              <Grid item xs={1}>
                <img src={QL} className={classes.quoteImg} alt="quote left" />
              </Grid>
              <Grid item xs={10.5}>
                <Divider sx={{ border: "1px solid #3A5202", width: "98%" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContentSize>
    </Box>
  );
};

export default Recommendations;
