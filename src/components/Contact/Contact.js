import React from "react";
import { Typography, Container, Paper, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Fade } from "react-awesome-reveal";
import makeStyles from "./styles";
import ContactForm from "./ContactForm";

const Contact = () => {
  const classes = makeStyles();
  const theme = useTheme();

  return (
    <div>
      <Container className={classes.container} maxWidth="xl">
        <Fade>
          <Typography
            sx={{
              pt: 5,
              mr: 45,
              [theme.breakpoints.down("sm")]: {
                mr: 0,
                pt: 4,
              },
            }}
            variant="h3"
            align="center"
          >
            CONTACT
          </Typography>
        </Fade>

        <Container align="center" sx={{ mt: 5 }}>
          <Paper
            elevation={16}
            sx={{
              py: 5,
              px: 5,
              mr: 45,
              backgroundColor: alpha(theme.palette.secondary.main, 0.8),
              [theme.breakpoints.down("sm")]: {
                backgroundColor: alpha(theme.palette.secondary.main, 0.8),
                mr: 0,
                mt: 5,
                px: 1,
                py: 1,
              },
            }}
          >
            <ContactForm />
          </Paper>
        </Container>
      </Container>
    </div>
  );
};

export default Contact;
