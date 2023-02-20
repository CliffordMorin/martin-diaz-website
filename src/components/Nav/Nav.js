import React from "react";

import NavTabsDesktop from "./NavTabsDesktop";
import NavTabsMobile from "./NavTabsMobile";

import {
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

// import song from "../../audio/come-out.wav";
import { Link } from "react-router-dom";

//icons
// import { PlayCircle, PauseCircle } from "@mui/icons-material";

//animation

// import useStyles from "./styles";

const Nav = () => {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const audio = new Audio(song);
  // const audioRef = useRef(audio);

  // const classes = useStyles();
  const theme = useTheme();

  // const playPause = (e) => {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //     setIsPlaying(!isPlaying);
  //   } else {
  //     audioRef.current.play();
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  return (
    <AppBar color="primary" position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none", color: "unset" }}>
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Montserrat Subrayada",
              }}
            >
              <strong>MARTIN</strong>
              <span style={{ color: theme.palette.secondary.main }}>DIAZ</span>
            </Typography>
          </Link>
          <NavTabsMobile />
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: "Montserrat Subrayada",
            }}
          >
            <strong>MARTIN</strong>
            <span style={{ color: theme.palette.secondary.main }}>DIAZ</span>
          </Typography>

          <NavTabsDesktop />

          {/* <IconButton
            color="warning"
            size="medium"
            variant="contained"
            aria-label="play/ pause"
            onClick={(e) => playPause()}
          >
            {isPlaying ? (
              <PauseCircle fontSize="large" />
            ) : (
              <PlayCircle fontSize="large" />
            )}
          </IconButton> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
