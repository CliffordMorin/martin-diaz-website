import React from "react";
import { Typography, Container, Paper, useTheme, Divider } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Bounce } from "react-awesome-reveal";
import makeStyles from "./styles";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const classes = makeStyles();
  const theme = useTheme();

  return (
    <div className={classes.wrapper}>
      <Helmet>
        <title>Martin Diaz | Contact</title>
        <meta
          name="description"
          content="Contact form to get in contact with Martin Diaz regarding any Inquiries."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Container className={classes.container} maxWidth="xl">
        <Bounce>
          <Typography variant="h2" align="center" className={classes.heading}>
            CONTACT
          </Typography>
        </Bounce>
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
        <div className={classes.paperContainer}>
          <Paper
            elevation={16}
            sx={{
              py: 5,
              px: 5,
              backgroundColor: alpha(theme.palette.secondary.main, 0.8),
              [theme.breakpoints.down("sm")]: {
                backgroundColor: alpha(theme.palette.secondary.main, 0.8),
                px: 1,
                py: 1,
              },
            }}
          >
            <ContactForm />
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
