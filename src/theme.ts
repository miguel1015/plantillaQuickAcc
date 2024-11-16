import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d44134",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#e9e1d7",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default theme;
