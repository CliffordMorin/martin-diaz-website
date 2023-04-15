import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  images: {
    width: "100%",
    height: "auto",
    padding: "0px",
    margin: "0px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "98%",
    },
  },
  text: {
    color: "#fff",
    textAlign: "justify",
    textJustify: "inter-word",
    padding: "10px 40px",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 10px",
    },
  },
  button: {
    color: "#fff",
    marginBottom: "25px",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#000",
    },
  },
}));
