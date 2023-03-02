import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Divider,
  useMediaQuery,
  Snackbar,
  Alert,
  IconButton,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useTheme from "@mui/material/styles/useTheme";
import { Fade } from "react-awesome-reveal";
import makeStyles from "./styles";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = makeStyles();
  const [open, setOpen] = useState(true);

  const TransitionDown = (props) => {
    return <Slide {...props} direction="down" />;
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

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
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={TransitionDown}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity="info"
          action={
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        >
          New album "The Dam Jawn" coming soon!{" "}
        </Alert>
      </Snackbar>
      <Container
        className={classes.textContainer}
        sx={{
          ml: 0,
          [theme.breakpoints.down("sm")]: {
            width: "60%",
            pt: "20%",
            ml: 3,
            pl: 0,
          },
        }}
        maxWidth={isSmallScreen ? "sm" : "lg"}
      >
        <Fade delay="50">
          <Typography
            component="span"
            variant="h1"
            sx={{
              display: "inline",
              [theme.breakpoints.down("sm")]: {
                pb: 10,
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
              }}
            >
              DIAZ
            </Typography>
          </Typography>
        </Fade>
        {/* <Fade effect="tada" delay="100">
          <Typography variant="h5">
            Saxophonist, Flutist, Clarinetist
          </Typography>
        </Fade>
        <Fade effect="tada" delay="150">
          <Typography variant="h5">Composer and Arranger</Typography>
        </Fade> */}

        <Divider
          sx={{
            backgroundColor: theme.palette.secondary.main,
            width: "20%",
            height: "2px",
            margin: "20px auto",
            display: "block",
            [theme.breakpoints.down("sm")]: {
              width: "40%",
              ml: 0,
            },
          }}
        />

        <Fade delay="100">
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
        </Fade>
      </Container>
    </Container>
  );
};

export default Home;
