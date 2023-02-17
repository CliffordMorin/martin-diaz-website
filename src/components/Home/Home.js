import React from "react";
import { Container, Typography } from "@mui/material";

import Roll from "react-reveal/Roll";
import makeStyles from "./styles";

const Home = () => {
  const classes = makeStyles();
  return (
    <div className={classes.container}>
      <Container className={classes.textContainer}>
        <Typography variant="h1">
          <Roll left cascade>
            MARTIN
          </Roll>
        </Typography>
        <Typography variant="h1" sx={{ marginBottom: "20px" }}>
          <Roll delay={500} left cascade>
            DIAZ
          </Roll>
        </Typography>
        <Typography variant="h3">
          <Roll delay={1000} left cascade>
            Saxophonist, Flutist, Clarinetist
          </Roll>
        </Typography>
        <Typography variant="h3">
          <Roll delay={1500} left cascade>
            Composer and Arranger
          </Roll>
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
