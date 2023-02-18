import React from "react";
import { Typography, Container, Paper, useTheme } from "@mui/material";
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
          <Typography sx={{ pt: 5, mr: 45 }} variant="h2" align="center">
            Contact
          </Typography>
        </Fade>
        <Container align="center" sx={{ mt: 5 }}>
          <Paper
            elevation={16}
            sx={{
              py: 5,
              px: 5,
              mr: 45,
              backgroundColor: theme.palette.secondary.main,
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
