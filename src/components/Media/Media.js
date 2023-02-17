import React from "react";
import ImageGallery from "react-image-gallery";
import glenn1 from "../../images/glenn1.jpeg";
import glenn2 from "../../images/glenn2.jpg";
import glenn3 from "../../images/glenn3.jpg";
import glennTMA from "../../images/glennTMA.jpg";
import group from "../../images/group.jpg";
import head from "../../images/head.jpg";
import head2 from "../../images/head2.jpg";
import head3 from "../../images/head3.jpg";
import head4 from "../../images/head4.jpg";
import makeStyles from "./styles";
import { Container, Typography } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import "./Media.css";

const images = [
  {
    original: glennTMA,
    thumbnail: glennTMA,
  },
  {
    original: group,
    thumbnail: group,
  },
  {
    original: head,
    thumbnail: head,
  },
  {
    original: head2,
    thumbnail: head2,
  },
  {
    original: head3,
    thumbnail: head3,
  },
  {
    original: head4,
    thumbnail: head4,
  },
  {
    original: glenn1,
    thumbnail: glenn1,
  },
  {
    original: glenn2,
    thumbnail: glenn2,
  },
  {
    original: glenn3,
    thumbnail: glenn3,
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
