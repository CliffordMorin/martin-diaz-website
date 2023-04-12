import { makeStyles } from "@mui/styles";
import martin1 from "../../images/compressed/martin1.jpg";
import martin4 from "../../images/compressed/martin4.jpg";

export default makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${martin1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${martin4})`,
      backgroundPosition: "0%",
      paddingTop: theme.spacing(4),
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  heading: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  paperContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));
