import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Typography,
  Menu,
  MenuItem,
  Box,
  IconButton,
} from "@mui/material";
import navLinks from "./navLinks";

const NavTabsDesktop = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [mediaMenuOpen, setMediaMenuOpen] = useState(false);
  const aboutRef = useRef(null);
  const mediaRef = useRef(null);

  const handleAboutMenuOpen = () => {
    setAboutMenuOpen(true);
  };

  const handleAboutMenuClose = () => {
    setAboutMenuOpen(false);
  };

  const handleMediaMenuOpen = () => {
    setMediaMenuOpen(true);
  };

  const handleMediaMenuClose = () => {
    setMediaMenuOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElNav(false);
  };

  return (
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
        {navLinks.map((item) => {
          if (item.children) {
            return (
              <div>
                <Button
                  ref={item.page === "About" ? aboutRef : mediaRef}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                  onClick={() => {
                    if (item.page === "About") {
                      handleAboutMenuOpen();
                    } else if (item.page === "Media") {
                      handleMediaMenuOpen();
                    }
                  }}
                >
                  <Typography variant="h7">{item.page}</Typography>
                </Button>
                {item.page === "About" && (
                  <Menu
                    anchorEl={aboutRef.current}
                    keepMounted
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(aboutMenuOpen)}
                    onClose={handleAboutMenuClose}
                  >
                    {item.children.map((childItem) => (
                      <Link
                        to={childItem.link}
                        style={{
                          textDecoration: "none",
                          color: "unset",
                          display: "block",
                        }}
                        key={childItem.id}
                      >
                        <MenuItem onClick={handleAboutMenuClose}>
                          {childItem.page}
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                )}
                {item.page === "Media" && (
                  <Menu
                    anchorEl={mediaRef.current}
                    keepMounted
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(mediaMenuOpen)}
                    onClose={handleMediaMenuClose}
                  >
                    {item.children.map((childItem) => (
                      <Link
                        to={childItem.link}
                        style={{
                          textDecoration: "none",
                          color: "unset",
                          display: "block",
                        }}
                        key={childItem.id}
                      >
                        <MenuItem onClick={handleMediaMenuClose}>
                          {childItem.page}
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                )}
              </div>
            );
          } else {
            return (
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "unset" }}
                key={item.id}
              >
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  <Typography variant="h7">{item.page}</Typography>
                </Button>
              </Link>
            );
          }
        })}
      </Menu>
    </Box>
  );
};

export default NavTabsDesktop;
