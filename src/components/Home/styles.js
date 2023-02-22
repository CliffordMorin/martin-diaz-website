import { makeStyles } from "@mui/styles";
import martin1 from "../../images/compressed/martin1.png";

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
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    cursor: "pointer",
  },
  textContainer: {
    paddingTop: "15%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",

    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      "& span": {
        fontSize: "3.3rem",
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
