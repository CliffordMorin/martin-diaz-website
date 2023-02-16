import React, { useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

import song from "../../audio/come-out.wav";
import { Link } from "react-router-dom";

//icons
import { PlayCircle, PauseCircle } from "@mui/icons-material";

//animation

import useStyles from "./styles";

const navlinks = [
  { page: "Home", link: "/", id: 0 },
  { page: "Bio", link: "/bio", id: 1 },
  { page: "Teaching", link: "/teaching", id: 2 },
  { page: "Media", link: "/media", id: 3 },
  { page: "Calender", link: "/calender", id: 4 },
  { page: "Contact", link: "/contact", id: 5 },
];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(song);
  const audioRef = useRef(audio);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const classes = useStyles();

  const playPause = (e) => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AppBar className={classes.appBar} color="secondary" position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none", color: "unset" }}>
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              GLENNDON GIFFORD
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
              onClick={handleOpenNavMenu}
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navlinks.map((item) => (
                <Link
                  to={item.link}
                  style={{ textDecoration: "none", color: "unset" }}
                  key={item.id}
                >
                  <MenuItem key={item.page} onClick={handleCloseNavMenu}>
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
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            GLENNDON GIFFORD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navlinks.map((item) => (
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "unset" }}
                key={item.id}
              >
                <Button
                  key={item.page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Typography variant="h7">{item.page}</Typography>
                </Button>
              </Link>
            ))}
          </Box>
          <IconButton
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
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
