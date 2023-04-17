import { makeStyles } from "@mui/styles";
import martin1 from "../../images/compressed/martin1.jpg";

export default makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${martin1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "80%",
    },
  },

  button: {
    color: theme.palette.text.primary,

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      "& $span": {
        color: theme.palette.text.primary,
      },
    },
  },

  span: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },

  textContainer: {
    paddingTop: "15%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "10%",
      display: "block",
      textAlign: "left",
      width: "40%",
      "& span": {
        fontSize: "3rem",
      },
      "& h5": {
        fontSize: "1.3rem",
      },
      "& h6": {
        fontSize: "1.3rem",
      },
    },
  },
}));
