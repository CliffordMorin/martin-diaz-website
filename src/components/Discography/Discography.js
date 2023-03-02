import React from "react";

import { Container, Grow, Typography, Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Bounce } from "react-awesome-reveal";
import makeStyles from "./styles";
import band from "../../images/compressed/Album-pics/band.jpg";

const Discography = () => {
  const classes = makeStyles();
  return (
    <div>
      <Grow in>
        <Container maxWidth="xl" style={{ backgroundColor: "#040404" }}>
          <Typography variant="h2" align="center" py={5} gutterBottom>
            <Bounce>DISCOGRAPHY</Bounce>
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
        </Container>
      </Grow>
    </div>
  );
};

export default Discography;
