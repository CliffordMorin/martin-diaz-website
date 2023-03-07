import React from "react";

import { Container, Grow, Typography, Grid, Divider } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Bounce } from "react-awesome-reveal";
import makeStyles from "./styles";
import band from "../../images/compressed/Album-pics/band.jpg";
import useTheme from "@mui/material/styles/useTheme";
import { Helmet } from "react-helmet-async";

const Discography = () => {
  const classes = makeStyles();
  const theme = useTheme();
  return (
    <div>
      <Helmet>
        <title>Martin Diaz | Discography</title>
        <meta
          name="description"
          content="Martin Diaz's Discography containing martin's most recent projects and records that martin has recorded on."
        />
        <link rel="canonical" href="/discography" />
      </Helmet>
      <Grow in>
        <Container maxWidth="xl" style={{ backgroundColor: "#040404" }}>
          <Typography variant="h2" align="center" pt={5} gutterBottom>
            <Bounce>DISCOGRAPHY</Bounce>
          </Typography>
          <Divider
            sx={{
              zIndex: "100",
              backgroundColor: theme.palette.text.primary,
              height: "2px",
              width: "100px",
              margin: "auto",
              mb: 5,
            }}
          />
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
