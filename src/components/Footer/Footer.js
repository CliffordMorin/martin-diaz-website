import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { YouTube, Facebook, Favorite } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import makeStyles from "./styles";
import "./style.css";

const Footer = () => {
  const classes = makeStyles();
  let date = new Date();
  return (
    <div>
      <footer>
        <Box>
          <Container
            align="center"
            sx={{
              backgroundColor: "secondary.main",
            }}
            maxWidth
          >
            <Box mb={1} pt={2}>
              <a
                href="https://www.instagram.com/glenndon.gifford/?hl=en"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#ffffff" }}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="fa-2xl insta"
                  style={{ margin: "5px 10px 16px 10px" }}
                />
              </a>

              <a
                href="https://www.youtube.com/user/TheGiffswing"
                target="_blank"
                rel="noreferrer"
              >
                <YouTube
                  htmlColor="#FF0000"
                  fontSize="large"
                  style={{ margin: "5px 10px" }}
                />
              </a>

              <a
                href="https://www.facebook.com/Glenn.Gifford"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook
                  htmlColor="#4267B2"
                  fontSize="large"
                  style={{ margin: "5px 10px" }}
                />
              </a>

              <a
                href="https://soundcloud.com/glenndon-gifford"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faSoundcloud}
                  className="fa-2x"
                  style={{ color: "#FF7700", margin: "5px 10px" }}
                />
              </a>
            </Box>
            <Box>
              <Typography variant="h9">
                Made with <Favorite fontSize="small" color="error" /> by{" "}
                <a
                  href="https://www.cliffordmorinmusic.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.link}
                >
                  Clifford Morin
                </a>
                {` ${date.getFullYear()}`}
              </Typography>
            </Box>
          </Container>
        </Box>
      </footer>
    </div>
  );
};

export default Footer;
