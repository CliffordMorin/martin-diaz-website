import React from "react";
import { Container, Typography, Divider } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { Bounce } from "react-awesome-reveal";
import makeStyles from "./styles";

const Home = () => {
  const theme = useTheme();
  const classes = makeStyles();
  return (
    <div className={classes.container}>
      <Container className={classes.textContainer}>
        <Typography variant="h1">
          <Bounce>
            <span style={{ display: "inline" }}>
              MARTIN
              <span style={{ color: theme.palette.secondary.main }}>DIAZ</span>
            </span>
          </Bounce>
        </Typography>

        <Typography variant="h5">
          <Bounce delay={1000}>Saxophonist, Flutist, Clarinetist</Bounce>
        </Typography>
        <Typography variant="h5">
          <Bounce delay={1500}>Composer and Arranger</Bounce>
        </Typography>
        <Divider
          sx={{
            backgroundColor: theme.palette.secondary.main,
            width: "20%",
            height: "2px",
            margin: "20px auto",
          }}
        />
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
      </Container>
    </div>
  );
};

export default Home;
