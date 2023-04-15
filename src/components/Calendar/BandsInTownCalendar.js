import { useEffect } from "react";
import { Typography, Container, Divider } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import useTheme from "@mui/material/styles/useTheme";
import { Helmet } from "react-helmet-async";

const BandsInTownCalendar = () => {
  const theme = useTheme();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.bandsintown.com/main.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Martin Diaz | Calender</title>
        <meta
          name="description"
          content="Martin Diaz Calender with dates of upcoming shows, concerts and public events."
        />
        <link rel="canonical" href="/calender" />
      </Helmet>
      <Typography variant="h2" align="center" sx={{ pt: 5, pb: 2 }}>
        <Bounce>UPCOMING SHOWS</Bounce>
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
      <Container sx={{ mt: 7 }}>
        <a
          className="bit-widget-initializer"
          data-artist-name="id_12667113"
          data-background-color={theme.palette.background.paper}
          data-separator-color="#DDDDDD"
          data-text-color="#424242"
          data-font="Helvetica"
          data-auto-style="true"
          data-button-label-capitalization="capitalize"
          data-header-capitalization=""
          data-location-capitalization="capitalize"
          data-venue-capitalization="capitalize"
          data-display-local-dates="true"
          data-local-dates-position="tab"
          data-display-past-dates="true"
          data-display-details="true"
          data-display-lineup=""
          data-display-start-time="true"
          data-social-share-icon="true"
          data-display-limit="all"
          data-date-format="MMM. D, YYYY"
          data-date-orientation="horizontal"
          data-date-border-color="#4A4A4A"
          data-date-border-width="1px"
          data-date-capitalization=""
          data-date-border-radius="10px"
          data-event-ticket-cta-size="medium"
          data-event-custom-ticket-text=""
          data-event-ticket-text="TICKETS"
          data-event-ticket-icon=""
          data-event-ticket-cta-text-color="#FFFFFF"
          data-event-ticket-cta-bg-color="#4A4A4A"
          data-event-ticket-cta-border-color="#4A4A4A"
          data-event-ticket-cta-border-width="0px"
          data-event-ticket-cta-border-radius="4px"
          data-sold-out-button-text-color="#FFFFFF"
          data-sold-out-button-background-color="#4A4A4A"
          data-sold-out-button-border-color="#4A4A4A"
          data-sold-out-button-clickable="true"
          data-event-rsvp-position="left"
          data-event-rsvp-cta-size="medium"
          data-event-rsvp-only-show-icon=""
          data-event-rsvp-text="REMIND ME"
          data-event-rsvp-icon=""
          data-event-rsvp-cta-text-color="#4A4A4A"
          data-event-rsvp-cta-bg-color="#FFFFFF"
          data-event-rsvp-cta-border-color="#4A4A4A"
          data-event-rsvp-cta-border-width="1px"
          data-event-rsvp-cta-border-radius="4px"
          data-follow-section-position="top"
          data-follow-section-alignment="center"
          data-follow-section-header-text="Get updates on new shows, new music, and more."
          data-follow-section-cta-size="medium"
          data-follow-section-cta-text="FOLLOW"
          data-follow-section-cta-icon="true"
          data-follow-section-cta-text-color="#FFFFFF"
          data-follow-section-cta-bg-color="#4A4A4A"
          data-follow-section-cta-border-color="#4A4A4A"
          data-follow-section-cta-border-width="0px"
          data-follow-section-cta-border-radius="4px"
          data-play-my-city-position="bottom"
          data-play-my-city-alignment="Center"
          data-play-my-city-header-text="Don’t see a show near you?"
          data-play-my-city-cta-size="medium"
          data-play-my-city-cta-text="REQUEST A SHOW"
          data-play-my-city-cta-icon="true"
          data-play-my-city-cta-text-color="#FFFFFF"
          data-play-my-city-cta-bg-color="#4A4A4A"
          data-play-my-city-cta-border-color="#4A4A4A"
          data-play-my-city-cta-border-width="0px"
          data-play-my-city-cta-border-radius="4px"
          data-optin-font=""
          data-optin-text-color=""
          data-optin-bg-color=""
          data-optin-cta-text-color=""
          data-optin-cta-bg-color=""
          data-optin-cta-border-width=""
          data-optin-cta-border-radius=""
          data-optin-cta-border-color=""
          data-language="en"
          data-layout-breakpoint="900"
          data-app-id=""
          data-affil-code=""
          data-bit-logo-position="bottomRight"
          data-bit-logo-color="#CCCCCC"
          href="https://widget.bandsintown.com/id_12667113"
          title="Martin Diaz Calender"
        ></a>
      </Container>
    </div>
  );
};

export default BandsInTownCalendar;
