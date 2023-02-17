import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  image: {
    width: "115%",
    height: "auto",
  },
  mail: {
    textDecoration: "none",
    color: "#ffffff",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
