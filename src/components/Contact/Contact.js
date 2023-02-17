import React from "react";
import { Typography, Container } from "@mui/material";
import martin1 from "../../images/compressed/martin1.png";
import { Bounce } from "react-awesome-reveal";
import makeStyles from "./styles";

const Contact = () => {
  const classes = makeStyles();
  return (
    <div>
      {/* <Container align="center" sx={{ mt: 5 }}>
        <Paper elevation={16} sx={{ py: 5, px: 1 }}>
          <Typography sx={{ pb: 5 }} variant="h2" align="center">
            <Bounce>Contact</Bounce>
          </Typography>
          <Typography variant="body1">
            is available as a lead trumpet player, soloist, sideman, and trumpet
            player of The Morning After Band, Available for both public and
            private engagements. Commercial and church music. He is also
            available as a clinician, educator, and guest lecturer. Virtual
            lessons and in person lessons now available! Customizable learning
            topics. Personalized experience. Flexible scheduling.
          </Typography>
          <Typography variant="body1" sx={{ pt: 5 }}>
            For all inquiries contact Glenndon at{" "}
            <a
              className={classes.mail}
              href="mailto:glenndon.gifford@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              glenndon.gifford@gmail.com
            </a>
          </Typography>
          <Container align="center" sx={{ mt: 7 }}>
            <img className={classes.image} src={martin1} alt="glenn" />
          </Container>
        </Paper>
      </Container> */}

      <Container align="center" sx={{ mb: 0 }}>
        <Typography sx={{ pb: 5 }} variant="h2" align="center">
          <Bounce>Contact</Bounce>
        </Typography>
        <img className={classes.image} src={martin1} alt="glenn" />
      </Container>
    </div>
  );
};

export default Contact;
