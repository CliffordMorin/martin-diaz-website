import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "100%",
  },
  mail: {
    textDecoration: "none",
    color: "#ffffff",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
