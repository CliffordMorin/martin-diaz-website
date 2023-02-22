import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  images: {
    width: "7%",
    padding: "0px",
    margin: "0px",
    [theme.breakpoints.down("sm")]: {
      width: "11%",
    },
  },
}));
