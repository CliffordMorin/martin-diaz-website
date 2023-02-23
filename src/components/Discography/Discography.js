import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import {
  Container,
  Grow,
  Paper,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Bounce } from "react-awesome-reveal";
import makeStyles from "./styles";
import band from "../../images/compressed/Album-pics/band.jpg";

const Discography = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Grow in>
        <Container sx={{ mt: 5 }} maxWidth="xl">
          <Paper
            elevation={16}
            sx={{ pb: 5 }}
            style={{ backgroundColor: "#040404" }}
          >
            <Typography
              variant="h2"
              align="center"
              pt={5}
              my={isSmallScreen ? 2 : 10}
              gutterBottom
            >
              <Bounce>Discography</Bounce>
            </Typography>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item xs={12} md={6}>
                <LazyLoadImage
                  className={classes.images}
                  src={band}
                  effect="blur"
                  alt="martin"
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
                <iframe
                  title="Spotify"
                  style={{ borderRadius: "10px", margin: "0px 10px" }}
                  src="https://open.spotify.com/embed/album/4lqu02Opk6iEkJlSQlRSgh?utm_source=generator"
                  width="95%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grow>
    </div>
  );
};

export default Discography;
