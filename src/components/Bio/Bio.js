import React from "react";
import { Container, Grow, Paper, Typography, Grid } from "@mui/material";

import Roll from "react-reveal/Roll";
import makeStyles from "./styles";
import glenn2 from "../../images/glenn2.jpg";

const Bio = () => {
  const classes = makeStyles();
  return (
    <div>
      <Grow in>
        <Container sx={{ mt: 5 }}>
          <Paper elevation={16} sx={{ pb: 5 }}>
            <Typography
              variant="h2"
              align="center"
              className={classes.text}
              py={4}
              pt={5}
              gutterBottom
            >
              <Roll left cascade>
                Biography
              </Roll>
            </Typography>
            <Grid container rowSpacing={2} columnSpacing={3}>
              <Grid item xs={12} md={6}>
                <img className={classes.images} src={glenn2} alt="glenn" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.text}
                  p={2}
                >
                  {" "}
                  Glenndon Gifford is a musician, composer, producer, and
                  educator from Long Island, New York. He performs in various
                  styles of music across the Northeast, from Salsa and event
                  bands to brass quartets and Jazz trios. Though his primary
                  instrument is trumpet, he also performs on piano and vocals. 
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.text}
                  p={2}
                >
                  {" "}
                  Glenndon holds a Bachelors of Music in Jazz Studies from
                  Temple University's Boyer College of Music and Dance. He has
                  been fortunate enough to have been mentored by some of the
                  great trumpet players and musicians of our time, including
                  Terell Stafford, John Swana, Rodney Marsalis, Nick Marchione,
                  Tanya Darby, Mike Natale, and Leon Petruzzi. 
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.text}
                  p={2}
                >
                  {" "}
                  He currently performs regularly with The Morning After (event
                  band based in South NJ), The Latin Express (salsa band based
                  in Philadelphia), and his solo project under his own name. 
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grow>
    </div>
  );
};

export default Bio;
