import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  images: {
    width: "120%",
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
  },
}));
