import React from "react";
import { Container, Typography } from "@mui/material";

import { Bounce } from "react-awesome-reveal";
import makeStyles from "./styles";

const Home = () => {
  const classes = makeStyles();
  return (
    <div className={classes.container}>
      <Container className={classes.textContainer}>
        <Typography variant="h1">
          <Bounce>MARTIN</Bounce>
        </Typography>
        <Typography variant="h1" sx={{ marginBottom: "20px" }}>
          <Bounce delay={500}>DIAZ</Bounce>
        </Typography>
        <Typography variant="h3">
          <Bounce delay={1000}>Saxophonist, Flutist, Clarinetist</Bounce>
        </Typography>
        <Typography variant="h3">
          <Bounce delay={1500}>Composer and Arranger</Bounce>
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
