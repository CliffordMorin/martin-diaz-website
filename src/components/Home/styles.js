import { makeStyles } from "@mui/styles";
import martin1 from "../../images/compressed/martin1.png";

export default makeStyles((theme) => ({
  images: {
    width: "100%",
    height: "auto",
  },
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
    flexDirection: "column",
    alignItems: "center",
    marginRight: "45%",
    width: "40%",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "5%",
      width: "56%",
    },
  },
}));
