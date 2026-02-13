import { Button, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Img from "../asset/img/header8.png";
// import MobileImg from "../asset/img/mobileBanner.svg";
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
  img: {
    width: "100%",
    height: "100%",
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
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    <ContentSize>
      <Grid
        container
        justifyContent="space-between"
        className={classes.wrapGridHeader}
      >
        <Grid item md={6} xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            rowGap={2}
            sx={{ height: "100%" }}
          >
            <Typography variant="h6" sx={{ color: "#A10142" }}>
              About me 🎀:
            </Typography>
            <Typography variant="subtitle1">
              People called me Begum...ofcourse in any pronunciation they
              prefer. Passionate about building frontend web and mobile apps
              with React, React Native, and Next.js. Currently learning &
              exploring native mobile and java backend (mostly learning,
              experimenting, and occasionally confusing myself for sure).
            </Typography>
            <Typography variant="subtitle1" color="#595959">
              Outside of code, I write, I enjoy 8oz matcha a lot 🍵, and I roam
              malls for no particular reason especially the ones with rooftops.
            </Typography>
            <Stack className={classes.stackBtn} columnGap={1} rowGap={3}>
              <Button
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
                href="#Projects"
                variant="contained"
                className={classes.btn}
              >
                See my projects
              </Button>
              <Button
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
                // onClick={downloadPDF}
                href="#Connect"
                variant="outlined"
                className={classes.btn}
              >
                Let's Connect
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <picture>
            <source media="(min-width: 768px)" srcSet={Img} />
            <img src={MobileImg} className={classes.img} alt="profile img" />
          </picture>
        </Grid>
      </Grid>
    </ContentSize>
  );
};

export default Header;
