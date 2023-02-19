import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Menu, MenuItem, Box } from "@mui/material";
import navLinks from "./navLinks";

// const navLinksDesktop = [
//   { page: "Home", link: "/", id: 0 },
//   {
//     page: "About",
//     id: 1,
//     children: [
//       { page: "Bio", link: "/bio", id: 2 },
//       { page: "Discography", link: "/discography", id: 3 },
//     ],
//   },
//   { page: "Teaching", link: "/teaching", id: 4 },
//   { page: "Media", link: "/media", id: 5 },
//   { page: "Calender", link: "/calender", id: 6 },
//   { page: "Contact", link: "/contact", id: 7 },
// ];

const NavTabsDesktop = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        flexWrap: "nowrap",
      }}
    >
      {navLinks.map((item) => {
        if (item.children) {
          return (
            <div key={item.id}>
              <Button
                onClick={handleMenuOpen}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography variant="h7">{item.page}</Typography>
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {item.children.map((child) => (
                  <MenuItem
                    key={child.id}
                    onClick={handleMenuClose}
                    component={Link}
                    to={child.link}
                  >
                    {child.page}
                  </MenuItem>
                ))}
              </Menu>
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
                key={item.page}
                sx={{ my: 2, color: "white", display: "block" }}
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
