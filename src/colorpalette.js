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
      main: colorPalette["--caf-noir-2"],
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
      fontFamily: ["Montserrat", "serif"].join(","),
    },
    h7: {
      fontFamily: ["Montserrat", "serif"].join(","),
    },
    h6: {
      fontFamily: ["Montserrat", "serif"].join(","),
    },
    h5: {
      fontFamily: ["Montserrat", "serif"].join(","),
    },
    h4: {
      fontFamily: ["Merriweather", "serif"].join(","),
    },
    h3: {
      fontFamily: ["Poppins", "serif"].join(","),
    },
    h2: {
      fontFamily: ["Poppins", "serif"].join(","),
    },
    h1: {
      fontFamily: ["Montserrat Subrayada", "serif"].join(","),
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
