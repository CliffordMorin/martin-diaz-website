import React from "react";
import { Container, Typography, Divider } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { AttentionSeeker } from "react-awesome-reveal";
import makeStyles from "./styles";

const Home = () => {
  const theme = useTheme();
  const classes = makeStyles();
  return (
    <div className={classes.container}>
      <Container className={classes.textContainer}>
        <AttentionSeeker effect="rubberBand">
          <Typography variant="h1">
            <span style={{ display: "inline" }}>
              MARTIN
              <span style={{ color: theme.palette.secondary.main }}>DIAZ</span>
            </span>
          </Typography>
        </AttentionSeeker>
        <AttentionSeeker effect="tada" delay="100">
          <Typography variant="h5">
            Saxophonist, Flutist, Clarinetist
          </Typography>
        </AttentionSeeker>
        <AttentionSeeker effect="tada" delay="150">
          <Typography variant="h5">Composer and Arranger</Typography>
        </AttentionSeeker>
        <Divider
          sx={{
            backgroundColor: theme.palette.secondary.main,
            width: "20%",
            height: "2px",
            margin: "20px auto",
          }}
        />
        <AttentionSeeker effect={"swing"} delay="200">
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            New Album{" "}
            <a
              href="https://open.spotify.com/album/4lqu02Opk6iEkJlSQlRSgh?si=z-dtIJeIT7mY2fuv5OrXaQ"
              className={classes.link}
              target="_blank"
              rel="noreferrer"
            >
              "IDENTITIES"
            </a>{" "}
            Available Now
          </Typography>
        </AttentionSeeker>
      </Container>
    </div>
  );
};

export default Home;
