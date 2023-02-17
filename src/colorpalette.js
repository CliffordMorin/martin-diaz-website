import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const colorPalette = {
  "--caf-noir": "#583923ff",
  "--licorice": "#160d09ff",
  "--timberwolf": "#d8cdcfff",
  "--caf-noir-2": "#49301dff",
  "--buff": "#dea284ff",
};

let theme = createTheme({
  palette: {
    text: {
      primary: colorPalette["--timberwolf"],
    },
    primary: {
      main: "#33383b",
    },
    secondary: {
      main: colorPalette["--buff"],
    },
    background: {
      paper: colorPalette["--licorice"],
      default: colorPalette["--caf-noir"],
    },
  },
  typography: {
    h8: {
      fontFamily: ["Merriweather", "serif"].join(","),
    },
    h7: {
      fontFamily: ["Roboto Serif", "serif"].join(","),
    },
    h6: {
      fontFamily: ["Merriweather", "serif"].join(","),
    },
    h5: {
      fontFamily: ["Amatic SC", "cursive"].join(","),
    },
    h4: {
      fontFamily: ["Merriweather", "serif"].join(","),
    },
    h3: {
      fontFamily: ["Amatic SC", "cursive"].join(","),
    },
    h2: {
      fontFamily: ["Amatic SC", "cursive"].join(","),
    },
    h1: {
      fontFamily: ["Amatic SC", "cursive"].join(","),
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
