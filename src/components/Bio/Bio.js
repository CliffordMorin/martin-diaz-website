import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import {
  Container,
  Grow,
  Typography,
  Grid,
  useMediaQuery,
  Divider,
} from "@mui/material";

import { Bounce } from "react-awesome-reveal";
import makeStyles from "./styles";
import martin6 from "../../images/martin6.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet-async";

const Bio = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Helmet>
        <title>Martin Diaz | Biography</title>
        <meta
          name="description"
          content="The Catalan saxophonist and composer Martín Díaz is at the
                forefront of his generation of jazz musicians. Residing in
                Amsterdam he leads Martin Diaz Quintet project."
        />
        <link rel="canonical" href="/bio" />
      </Helmet>
      <Grow in>
        <Container maxWidth="xl" style={{ backgroundColor: "#040404" }}>
          <Typography variant="h2" align="center" pt={5} gutterBottom>
            <Bounce>BIOGRAPHY</Bounce>
          </Typography>
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
          <Grid
            container
            rowSpacing={2}
            columnSpacing={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12} md={6}>
              <LazyLoadImage
                className={classes.images}
                src={martin6}
                effect="blur"
                alt="martin"
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
              <Typography
                variant="body1"
                align="center"
                className={classes.text}
                py={isSmallScreen ? 0 : 2}
                px={2}
              >
                {" "}
                The Catalan saxophonist and composer Martín Díaz is at the
                forefront of his generation of jazz musicians. Residing in
                Amsterdam he leads his own Martin Diaz Quintet project which won
                one of the most prestigious awards in the American Jazz scene,
                Downbeat Award 2020, with a special mention as an outstanding
                soloist and the first prize of the Leiden Jazz Awards. His first
                album as a leader Identities, landed signing a contract with the
                famous Catalan record label Fresh Sound, with which other
                international artists began their musical careers, such as
                Ambrose Akimusire, Giulia Valle and others.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.text}
                p={2}
              >
                {" "}
                He is also part of the Barcelona Jazz Orchestra, a legendary big
                band that recorded with Phill Woods, John Fadis and Jesse Davis
                in New York.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.text}
                p={2}
              >
                {" "}
                Martin Diaz joined the Jong Metropole Orchestra for the 2019 and
                2021 with which he played with international figures such as
                Michael League and Michelle Davis. He also toured with the NJJO
                (Nationaal Jeugt Jazz Orkest) as leader of the saxophone
                section. He continues this tour with the NJJO through the
                Netherlands, Germany and in November through Indonesia
                participating in major Jazz festivals in Jakarta and Yogyakarta.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.text}
                p={2}
              >
                {" "}
                At the age of 26, he has recorded eight albums and played all
                over the peninsula, and now he is beginning to leave his print
                in the Netherlands, where he has already recorded and played
                with the best musicians of the country, such as Gideon Tazelaar,
                Ben Van Gelder, Jasper Blom, Benjamin Herman and Simon Rigter.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.text}
                p={2}
              >
                {" "}
                During the 2020 pandemic lockdown he developed Parker For All, a
                series of videos that he shot in his apartment in Amsterdam
                dedicated to the music of Charlie Parker. These episodes, which
                are starting to take hold in the Amsterdam atmosphere, receive a
                guest from the Dutch Jazz scene every time and have been
                attended by great jazz musicians.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.text}
                p={2}
              >
                {" "}
                His last project the Dam Jawn arises from his stay in
                Philadelphia and New York for half a year where he received
                classes from the best figures in the world jazz scene, such as
                Joe Magnarelli, David Wong, Dick Oatts, Tim Warfield and Terell
                Stafford.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.text}
                p={2}
              >
                {" "}
                The Dam Jawn recorded an album named Master St. with the
                legendary Dick Oatts. It will be released soon in 2023 with a
                very renowned Dutch recording label.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.text}
                p={2}
              >
                {" "}
                In his last year he has also toured the Netherlands and
                Catalonia with a unique project featuring two important Dutch
                jazz figures such as Jasper Blom and Benjamin Herman. They
                presented their program in venues such as the Bimhuis in
                Amsterdam and at renowned festivals in Catalonia such as Nits de
                Jazz in Platja d'Aro, the Mas i Mas del Jamboree festival and at
                the Jazz Cava in Vic
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.text}
                p={2}
              >
                {" "}
                With all this experience and his love for this music, Martín
                Díaz transmits to the public that great respect for traditional
                jazz by applying the language, the sound and the melodies to his
                own sound. He is able to maintain this essence in his
                compositions, but always looking for originality and innovation
                using different rhythmic atmospheres and warm colors in the
                harmonies.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Bio;
