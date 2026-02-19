import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#697e50", // your matcha green
    },
    secondary: {
      main: "#A10142", // your button hover color
    },
  },
  typography: {
    fontFamily: "'Patrick Hand', cursive",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.2rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.9rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(208, 222, 199, 0.25)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#9CAF88",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#7E8F6A",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontSize: 12,
            padding: "6px 24px",
            borderColor: "#A10142",
            color: "#A10142",
            fontWeight: 600,
            background: "white",
            backdropFilter: "blur(10px)",
            "&:hover": {
              color: "rgba(255, 255, 255, 0.8)",
              background: "#A10142",
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontSize: 12,
            padding: "6px 24px",
            fontWeight: 600,
            backgroundColor: "#697e50",
            "&:hover": {
              background: "#fff",
              color: "#697e50",
              border: "1px solid #697e50",
            },
          },
        },
      ],
    },
  },
});

export default theme;
