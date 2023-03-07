import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  images: {
    width: "120%",
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
    [theme.breakpoints.down("sm")]: {
      padding: "10px 10px",
    },
  },
}));
