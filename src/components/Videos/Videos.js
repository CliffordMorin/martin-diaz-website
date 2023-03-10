import makeStyles from "./styles";
import { Container, Typography, Divider } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import useTheme from "@mui/material/styles/useTheme";
import { Helmet } from "react-helmet-async";

const Videos = () => {
  const classes = makeStyles();
  const theme = useTheme();
  return (
    <Container>
      <Helmet>
        <title>Martin Diaz | Videos</title>
        <meta name="description" content="Videos of Martin Diaz" />
        <link rel="canonical" href="/videos" />
      </Helmet>
      <Typography align="center" variant="h2" sx={{ pt: 5, pb: 2 }}>
        <Bounce>VIDEOS</Bounce>
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
