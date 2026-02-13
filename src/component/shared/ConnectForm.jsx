import {
  Box,
  TextField,
  Button,
  Stack,
  Grid,
  Typography,
  Alert,
  Fade,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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
  btn: {
    background: "#A10142",
    color: "white",
    fontSize: "0.8rem",
    transition: "all 0.3s ease",

    "&:hover": {
      background: "#697E50",
    },

    "&:disabled": {
      background: "#ccc",
      color: "#666",
    },

    width: "100%",
    padding: "12px 0px",
  },
  box: {
    "& .MuiInputLabel-root": {
      color: "#A10142",
      fontFamily: "'Patrick Hand', cursive",
    },
    "& .MuiInputBase-root": {
      fontFamily: "'Patrick Hand', cursive",
    },
    "& .MuiInputBase-formControl": {
      background: "white",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#3A5202",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-disabled": {
        background: "#f5f5f5",
      },
      "& fieldset": {
        borderColor: "#A10142",
      },
      "&:hover fieldset": {
        borderColor: "#3A5202",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3A5202",
      },
      "&.Mui-disabled fieldset": {
        borderColor: "#ddd",
      },
    },
  },
  successAlert: {
    marginBottom: "1rem",
    borderRadius: "12px",
    fontFamily: "'Patrick Hand', cursive",
    fontSize: "1rem",

    "& .MuiAlert-icon": {
      fontSize: "1.5rem",
    },
  },
  hidden: {
    display: "none",
  },
}));

const ConnectForm = () => {
  const { classes } = useStyles();
  const [state, handleSubmit] = useForm("xaqdqakz");
  const [touched, setTouched] = useState({});
  const [charCount, setCharCount] = useState(0);

  const markTouched = (field) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleMessageChange = (e) => {
    setCharCount(e.target.value.length);
  };

  return (
    <Grid
      container
      rowGap={3}
      id="Connect"
      mt={4}
      justifyContent="space-around"
      alignItems="flex-start"
    >
      {/* Left Side - Description */}
      <Grid item md={4} xs={12}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h6"
            className={classes.sectionHeader}
            sx={{
              color: "#A10142",
            }}
          >
            💌 Let's Connect!
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.primary",
            }}
          >
            I'm always down to talk about frontend, cool ideas, or what you're
            building. If you want to collaborate, chat tech, or hire me, feel
            free to drop me a message. I promise I'm friendlier than my code
            errors.
          </Typography>
        </Box>
      </Grid>

      {/* Right Side - Form */}
      <Grid item xs={12} md={6}>
        {/* Success Message */}
        {!state.succeeded && (
          <Fade in={state.succeeded}>
            <Alert
              severity="success"
              icon={<CheckCircleOutlineIcon />}
              className={classes.successAlert}
            >
              <strong>Message sent successfully!</strong> 🎉
              <br />
              I'll get back to you soon. Thanks for reaching out!
            </Alert>
          </Fade>
        )}

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <Stack spacing={2}>
            {/* Honeypot field for spam bots */}
            <input
              type="text"
              name="_gotcha"
              className={classes.hidden}
              tabIndex={-1}
              autoComplete="off"
            />

            <TextField
              name="name"
              label="Your Name"
              fullWidth
              required
              disabled={state.succeeded}
              className={classes.box}
              onBlur={() => markTouched("name")}
              error={touched.name && !state.fields?.name}
            />

            <TextField
              name="email"
              label="Your Email"
              type="email"
              fullWidth
              required
              disabled={state.succeeded}
              className={classes.box}
              onBlur={() => markTouched("email")}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <Box sx={{ position: "relative" }}>
              <TextField
                name="message"
                label="Your Message"
                multiline
                rows={4}
                fullWidth
                required
                disabled={state.succeeded}
                className={classes.box}
                onBlur={() => markTouched("message")}
                onChange={handleMessageChange}
                inputProps={{ maxLength: 500 }}
              />
              <Typography
                variant="caption"
                sx={{
                  position: "absolute",
                  bottom: 8,
                  right: 12,
                  color: charCount > 450 ? "#A10142" : "text.secondary",
                  fontFamily: "'Patrick Hand', cursive",
                  pointerEvents: "none",
                }}
              >
                {charCount}/500
              </Typography>
            </Box>

            <Button
              type="submit"
              variant="contained"
              className={classes.btn}
              disabled={state.submitting || state.succeeded}
            >
              {state.submitting
                ? "Sending... ✈️"
                : state.succeeded
                  ? "Message Sent ✓"
                  : "Send Message"}
            </Button>

            {/* {state.succeeded && (
              <Typography
                variant="caption"
                sx={{
                  textAlign: "center",
                  color: "text.secondary",
                  fontFamily: "'Patrick Hand', cursive",
                  fontStyle: "italic",
                }}
              >
                Want to send another message? Refresh the page!
              </Typography>
            )} */}
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ConnectForm;
