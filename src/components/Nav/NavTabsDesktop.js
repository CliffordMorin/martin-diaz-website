import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { Button, Typography, Menu, MenuItem, Box } from "@mui/material";
import navLinks from "./navLinks";

const NavTabsDesktop = () => {
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

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-end",
        alignItems: "center",
        flexGrow: 1,
        flexBasis: "auto",
      }}
    >
      {navLinks.map((item) => {
        if (item.children) {
          return (
            <div key={item.id}>
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
                key={item.id}
              >
                <Typography variant="h7">{item.page}</Typography>
              </Button>
              {item.page === "About" && (
                <Menu
                  anchorEl={aboutRef.current}
                  keepMounted
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
                  open={Boolean(mediaMenuOpen)}
                  onClose={handleMediaMenuClose}
                >
                  {item.children.map((childItem) =>
                    childItem.page === "EPK" ? (
                      <a
                        href={childItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
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
                      </a>
                    ) : (
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
                    )
                  )}
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
    </Box>
  );
};

export default NavTabsDesktop;
