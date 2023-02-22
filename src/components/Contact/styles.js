import { makeStyles } from "@mui/styles";
import martin1 from "../../images/compressed/martin1.png";
import martin4 from "../../images/martin4.jpg";

export default makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${martin1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${martin4})`,
      backgroundPosition: "0%",
    },
  },
  mail: {
    textDecoration: "none",
    color: "#ffffff",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
