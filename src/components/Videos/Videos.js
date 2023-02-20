import makeStyles from "./styles";
import { Container, Typography } from "@mui/material";
import { Bounce } from "react-awesome-reveal";

const Videos = () => {
  const classes = makeStyles();
  return (
    <Container sx={{ mt: 5 }}>
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
  );
};

export default Videos;
