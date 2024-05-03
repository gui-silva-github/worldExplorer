import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "hsl(209, 23%, 22%)",
    },
    secondary: {
      main: "hsl(209, 23%, 22%)",
    },
    text: {
      primary: "hsl(200, 15%, 8%)",
      secondary: "hsl(0, 0%, 52%)",
    },
    background: {
      default: "hsl(0, 0%, 98%)",
      paper: "hsl(0, 0%, 100%)",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(209, 23%, 22%)",
    },
    secondary: {
      main: "hsl(0, 0%, 100%)",
    },
    text: {
      primary: "hsl(0, 0%, 100%)",
      secondary: "hsl(0, 0%, 52%)",
    },
    background: {
      default: "hsl(207, 26%, 17%)",
      paper: "hsl(209, 23%, 22%)",
    },
  },
});

export { lightTheme, darkTheme };