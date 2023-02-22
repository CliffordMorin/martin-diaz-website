import React from "react";
import { Container, Typography, Divider, useMediaQuery } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { AttentionSeeker } from "react-awesome-reveal";
import makeStyles from "./styles";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = makeStyles();
  return (
    <Container
      className={classes.container}
      sx={{
        [theme.breakpoints.down("sm")]: {
          ml: 0,
          pl: 0,
        },
      }}
      maxWidth={isSmallScreen ? "sm" : "xl"}
    >
      <Container
        className={classes.textContainer}
        sx={{
          ml: 0,
          [theme.breakpoints.down("sm")]: {
            width: "60%",
            pt: "50%",
            ml: 3,
            pl: 0,
          },
        }}
        maxWidth={isSmallScreen ? "sm" : "lg"}
      >
        <AttentionSeeker effect="rubberBand">
          <Typography
            component="span"
            variant="h1"
            sx={{
              display: "inline",
              [theme.breakpoints.down("sm")]: {
                display: "block",
                wordWrap: "break-word",
                pb: 18,
              },
            }}
          >
            MARTIN
            <Typography
              variant="h1"
              component="span"
              sx={{
                display: "inline",
                color: theme.palette.secondary.main,
                [theme.breakpoints.down("sm")]: {
                  pl: 5,
                },
              }}
            >
              DIAZ
            </Typography>
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
            [theme.breakpoints.down("sm")]: {
              width: "40%",
              ml: 0,
            },
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
    </Container>
  );
};

export default Home;
