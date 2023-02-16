import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#33383b",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      paper: "#111111",
      default: "#371515",
    },
  },
  typography: {
    h8: {
      fontFamily: ["Merriweather", "serif"].join(","),
      color: "white",
    },
    h7: {
      fontFamily: ["Roboto Serif", "serif"].join(","),
      color: "white",
    },
    h6: {
      fontFamily: ["Merriweather", "serif"].join(","),
      color: "white",
    },
    h5: {
      fontFamily: ["Amatic SC", "cursive"].join(","),
      color: "white",
    },
    h4: {
      fontFamily: ["Merriweather", "serif"].join(","),
      color: "white",
    },
    h3: {
      fontFamily: ["Amatic SC", "cursive"].join(","),
      color: "white",
    },
    h2: {
      fontFamily: ["Amatic SC", "cursive"].join(","),
      color: "white",
    },
    h1: {
      fontFamily: ["Amatic SC", "cursive"].join(","),
      color: "white",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
