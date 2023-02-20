import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import NavTabsDesktop from "./NavTabsDesktop";

import {
  Tabs,
  Tab,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Box,
} from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

// import song from "../../audio/come-out.wav";
import { Link } from "react-router-dom";

//icons
// import { PlayCircle, PauseCircle } from "@mui/icons-material";

//animation

// import useStyles from "./styles";

const navLinksMobile = [
  { page: "Home", link: "/", id: 0 },
  { page: "Bio", link: "/bio", id: 1 },
  { page: "Discography", link: "/discography", id: 2 },
  { page: "Teaching", link: "/teaching", id: 3 },
  { page: "Media", link: "/media", id: 4 },
  { page: "Calender", link: "/calender", id: 5 },
  { page: "Contact", link: "/contact", id: 6 },
];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  // const [isPlaying, setIsPlaying] = useState(false);
  // const audio = new Audio(song);
  // const audioRef = useRef(audio);

  const handleMenuOpen = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElNav(null);
  };

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

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleMenuClose}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navLinksMobile.map((item) => (
                <Link
                  to={item.link}
                  style={{ textDecoration: "none", color: "unset" }}
                  key={item.id}
                >
                  <MenuItem key={item.page} onClick={handleMenuClose}>
                    <Typography
                      variant="h5"
                      textAlign="center"
                      sx={{ color: "#fff" }}
                    >
                      {item.page}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

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
