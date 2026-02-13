import { Card, Typography, Grid, Stack } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import LJMU from "../asset/img/ljmu.png";
import { useTheme } from "@mui/material/styles";
import { ContentSize } from "./shared/ContentSize";

const useStyles = makeStyles()((theme) => ({
  wrapBox: {
    marginTop: 40,
  },
  img: {
    borderRadius: "50%",
  },
  wrapCard: {
    padding: "2rem",
    borderRadius: 5,
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
    },
  },
}));

const Education = () => {
  const { classes } = useStyles();
  const theme = useTheme();
  const work = [
    {
      img: LJMU,
      school: "Liverpool John Moores University, (3+0)",
      major: "e-Business Technology & Management",
      award: "Bachelor of Science with Honors Class 1 (73%)",
      period: "2018-2021",
    },
  ];

  return (
    <ContentSize>
      <Card sx={{ padding: 5, borderRadius: 5 }}>
        <Typography varaint="h5" textAlign="start" fontWeight="bold">
          Education
        </Typography>
        {work.map((res, index) => (
          <Grid
            container
            justifyContent="space-between"
            key={index}
            margin="10px 0px"
          >
            <Stack
              direction={{ md: "row", sm: "column" }}
              alignItems="center"
              columnGap={2}
            >
              <img
                alt="logo"
                src={res.img}
                width={40}
                height={40}
                className={`${classes.img} ${
                  theme.palette.mode === "dark"
                    ? "dark:border-zinc-700/50 dark:ring-zinc-900/5"
                    : ""
                }`}
              />
              <Stack direction="column">
                <Typography variant="subtitle1">{res.school}</Typography>
                <Typography variant="subtitle2">{res.major}</Typography>
                <Typography variant="subtitle2">{res.award}</Typography>
              </Stack>
            </Stack>
            <Typography variant="subtitle1">{res.period}</Typography>
          </Grid>
        ))}
      </Card>
    </ContentSize>
  );
};

export default Education;
