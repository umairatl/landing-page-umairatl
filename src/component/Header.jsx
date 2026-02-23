import { useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Img from "../asset/img/header8.png";
import MobileImg from "../asset/img/mobileHeaderBanner.png";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  btn: {
    width: "100%",
    padding: "8px 0px",
    [theme.breakpoints.down("md")]: {
      padding: "11px 0px",
    },
  },
  wrapGridHeader: {
    flexDirection: "row",
    marginTop: 25,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      marginTop: 0,
    },
  },

  stackBtn: {
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  // Reserves rough space before the image loads, then expands to natural size
  imgContainer: {
    position: "relative", // needed for the overlay to anchor to
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(208, 222, 199, 0.2)",
    borderRadius: "16px",
    border: "1.5px dashed rgba(105, 126, 80, 0.35)",
    [theme.breakpoints.down("md")]: {
      overflow: "hidden",
      marginBottom: "40px",
    },
  },

  // Transparent layer that sits above the image.
  // Right-clicking it shows the generic page menu (no "Save image as").
  imgOverlay: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    WebkitUserSelect: "none",
  },

  img: {
    // Desktop: full natural size, no crop
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "14px",
    filter: "blur(12px)",
    transition: "filter 0.5s ease",
    // Mobile: fixed height with cover so the banner fills the box
    [theme.breakpoints.down("md")]: {
      height: "100%",
      objectFit: "cover",
      objectPosition: "top",
      borderRadius: 0,
    },
  },

  imgVisible: {
    filter: "blur(0)",
  },
}));

const Header = () => {
  const { classes, cx } = useStyles();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <ContentSize>
      <Grid
        container
        justifyContent="space-between"
        className={classes.wrapGridHeader}
      >
        {/* Text content */}
        <Grid item md={6} xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            rowGap={2}
            sx={{ height: "100%" }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#A10142" }}
              data-aos="fade-right"
              data-aos-duration={500}
            >
              About me 🎀:
            </Typography>

            <Typography
              variant="subtitle1"
              data-aos="fade-right"
              data-aos-duration={500}
              data-aos-delay={100}
            >
              Hi I'm Umaira. People call me Begum too (but in any pronunciation
              they prefer) I'm passionate about building frontend web and mobile
              apps with React, React Native, and Next.js. Currently exploring
              java spring boot and native mobile (mostly learning,
              experimenting, and occasionally confusing myself).
            </Typography>

            <Typography
              variant="subtitle1"
              color="#595959"
              data-aos="fade-right"
              data-aos-duration={500}
              data-aos-delay={200}
            >
              Outside of code, I write, I enjoy 8oz matcha a lot 🍵, and I like
              to wander malls with parks or rooftops just for the fun of it.
            </Typography>
            <Stack
              className={classes.stackBtn}
              columnGap={1}
              rowGap={3}
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-delay={300}
            >
              <Button
                href="#Projects"
                variant="contained"
                className={classes.btn}
              >
                See my projects
              </Button>
              <Button
                href="#Connect"
                variant="outlined"
                className={classes.btn}
              >
                Let's Connect
              </Button>
            </Stack>
          </Grid>
        </Grid>

        {/* Image — always takes up space, sharpens in once loaded */}
        <Grid item xs={12} md={5} data-aos="fade-left" data-aos-duration={600}>
          <Box className={classes.imgContainer}>
            <picture>
              <source media="(min-width: 768px)" srcSet={Img} />
              <img
                src={MobileImg}
                className={cx(classes.img, imgLoaded && classes.imgVisible)}
                alt="profile banner"
                loading="eager"
                fetchPriority="high"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onLoad={() => setImgLoaded(true)}
              />
            </picture>

            {/* Transparent overlay — intercepts right-click so browser shows the
                generic page menu instead of the image "Save image as" option */}
            <Box
              className={classes.imgOverlay}
              onContextMenu={(e) => e.preventDefault()}
            />
          </Box>
        </Grid>
      </Grid>
    </ContentSize>
  );
};

export default Header;
