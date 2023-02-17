import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  video: {
    width: "100%",
  },

  iframe: {
    width: "100%",
    paddingBottom: "56.25%",
  },
  [theme.breakpoints.down("sm")]: {
    video: {},
    iframe: {
      width: "100%",
    },
  },
}));
