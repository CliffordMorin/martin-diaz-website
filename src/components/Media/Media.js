import React from "react";
// import { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import martin2 from "../../images/martin2.jpg";
import martin3 from "../../images/martin3.jpg";
import martin4 from "../../images/martin4.jpg";
import martin5 from "../../images/martin5.jpg";
import martin6 from "../../images/martin6.jpg";
import martin7 from "../../images/martin7.jpg";
import martin8 from "../../images/martin8.jpg";
import makeStyles from "./styles";
import { Container, Typography } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import "./Media.css";

const images = [
  {
    original: martin5,
    thumbnail: martin5,
  },
  {
    original: martin6,
    thumbnail: martin6,
  },
  {
    original: martin7,
    thumbnail: martin7,
  },
  {
    original: martin8,
    thumbnail: martin8,
  },
  {
    original: martin2,
    thumbnail: martin2,
  },
  {
    original: martin3,
    thumbnail: martin3,
  },
  {
    original: martin4,
    thumbnail: martin4,
  },
];

const Media = () => {
  const classes = makeStyles();
  return (
    <div>
      <Typography align="center" variant="h2" sx={{ mt: 5 }}>
        <Bounce>Media</Bounce>
      </Typography>
      <Container sx={{ mt: 5 }}>
        <ImageGallery items={images} />
        <Typography align="center" variant="h2" sx={{ mt: 5, mb: 5 }}>
          <Bounce>Videos</Bounce>
        </Typography>
        <Container align="center" className={classes.video}>
          <iframe
            width="560"
            height="315"
            className={classes.iframe}
            src="https://www.youtube.com/embed/wuf-jbppOog"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Container>
        <Container align="center" className={classes.video}>
          <iframe
            width="560"
            height="315"
            className={classes.iframe}
            src="https://www.youtube.com/embed/0K4n30MFSwI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Container>
        <Container align="center" className={classes.video}>
          <iframe
            width="560"
            height="315"
            className={classes.iframe}
            src="https://www.youtube.com/embed/1rvO-lKaNiQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Container>
        <Container align="center" className={classes.video}>
          <iframe
            width="560"
            height="315"
            className={classes.iframe}
            src="https://www.youtube.com/embed/vCaA_aq3Trw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Container>
      </Container>
    </div>
  );
};

export default Media;
