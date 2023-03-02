import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const colorPalette = {
  "--caf-noir": "#583923ff",
  "--licorice": "#160d09ff",
  "--timberwolf": "#d8cdcfff",
  "--caf-noir-2": "#49301dff",
  "--buff": "#dea284ff",
};

let fonts = {
  header1: "Cantarell, serif",
  header2: "Bodoni Moda, serif",
  header3: "Montserrat Subrayada, serif",
  body1: "PT Sans Narrow, sans-serif",
  body2: "Labrada, serif",
  body3: "Montserrat, serif",
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
      fontFamily: fonts.body1,
    },
    h7: {
      fontFamily: fonts.body1,
    },
    h6: {
      fontFamily: fonts.body1,
    },
    h5: {
      fontFamily: fonts.body2,
    },
    h4: {
      fontFamily: fonts.body3,
    },
    h3: {
      fontFamily: fonts.header2,
    },
    h2: {
      fontFamily: fonts.header2,
    },
    h1: {
      fontFamily: fonts.header2,
    },
    body1: {
      fontFamily: fonts.body1,
    },
    body2: {
      fontFamily: fonts.body2,
    },
    body3: {
      fontFamily: fonts.body3,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
