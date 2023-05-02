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
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
  avatar: {
    width: 180,
    height: 180,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("sm")]: {
      width: 120,
      height: 120,
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
