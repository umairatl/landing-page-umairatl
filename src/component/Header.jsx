import { useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Img from "../asset/img/header8.png";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  btn: {
    width: "100%",
    padding: "8px 0px",
    [theme.breakpoints.down("sm")]: {
      padding: "11px 0px",
    },
  },
  wrapGridHeader: {
    flexDirection: "row",
    marginTop: 25,
    [theme.breakpoints.down("sm")]: {
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

  imgContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(105, 126, 80, 0.08)",
    borderRadius: "16px",
    border: "1.5px dashed #697e50",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "40px",
    },
  },

  imgOverlay: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    cursor: "default",
    userSelect: "none",
    WebkitUserSelect: "none",
  },

  img: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "14px",
    filter: "blur(12px)",
    transition: "filter 0.5s ease",
    [theme.breakpoints.down("sm")]: {
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
        <Grid item sm={6} xs={12}>
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
              Hi, I'm Umaira. Some call me Begum. I build web and mobile apps
              with React, React Native, and Next.js. Lately I've been exploring
              and diving deeper into mobile dev (mostly learning, experimenting,
              and occasionally confusing myself).
            </Typography>

            <Typography
              variant="subtitle1"
              color="#595959"
              data-aos="fade-right"
              data-aos-duration={500}
              data-aos-delay={200}
            >
              Outside of code, I write, drink an embarrassing amount of matcha,
              and and lately been trying to get more active (still figuring out
              which version of that sticks.)
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

        {/* Image */}
        <Grid item xs={12} sm={5} data-aos="fade-left" data-aos-duration={600}>
          <Box className={classes.imgContainer}>
            <img
              src={Img}
              className={cx(classes.img, imgLoaded && classes.imgVisible)}
              alt="profile banner"
              loading="eager"
              fetchpriority="high"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onLoad={() => setImgLoaded(true)}
            />
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
