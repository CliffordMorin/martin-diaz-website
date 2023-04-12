import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  navLinkText: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));
