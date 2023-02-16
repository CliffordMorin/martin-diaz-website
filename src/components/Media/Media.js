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
import Roll from "react-reveal/Roll";
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
        <Roll left cascade>
          Media
        </Roll>
      </Typography>
      <Container sx={{ mt: 5 }}>
        <ImageGallery items={images} />
        <Container sx={{ mt: 5, mb: 5 }}>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            title="Glenndon Gifford"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1214053780&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: "100",
            }}
          >
            <a
              href="https://soundcloud.com/glenndon-gifford"
              title="Glenndon Gifford"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Glenndon Gifford
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/glenndon-gifford/come-out-and-play"
              title="come out and play"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              come out and play
            </a>
          </div>
        </Container>
        <Container align="center" className={classes.video}>
          <iframe
            className={classes.iframe}
            src="https://www.youtube.com/embed/AWLtrXLRwRw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
      </Container>
    </div>
  );
};

export default Media;
