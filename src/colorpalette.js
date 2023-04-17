import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const colorPalette = {
  cafeNoir: "#583923ff",
  licorice: "#160d09ff",
  timberWolf: "#d8cdcfff",
  cafeNoir2: "#49301dff",
  buff: "#dea284ff",
  buffLight: "#f7e6daff",
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
      primary: colorPalette.timberWolf,
      default: colorPalette.timberWolf,
    },
    primary: {
      main: colorPalette.cafeNoir2,
    },
    secondary: {
      main: colorPalette.buff,
      light: colorPalette.buffLight,
    },
    background: {
      paper: colorPalette.licorice,
      default: colorPalette.cafeNoir,
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
      fontFamily: fonts.header2,
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
