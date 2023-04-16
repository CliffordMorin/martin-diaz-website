import { React, useState, useEffect, useCallback } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Divider,
  Link,
} from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import useTheme from "@mui/material/styles/useTheme";
import { Helmet } from "react-helmet-async";
import { SiBandsintown } from "react-icons/si";
import EventCard from "./EventCard";
import EmptyCalendar from "./EmptyCalendar";
import LoadingPage from "./LoadingPage";

const API_KEY = process.env.REACT_APP_BANDSINTOWN_API_KEY;
const ARTIST_ID = "12667113";

const API_URL = `https://rest.bandsintown.com/artists/martin%20diaz/events?app_id=${API_KEY}&date=upcoming`;

const CalendarV2 = () => {
  const theme = useTheme();
  const [visibleEvents, setVisibleEvents] = useState(5);
  const [events, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLoadMore = () => {
    setVisibleEvents(visibleEvents + 5);
  };

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <div>
      <Helmet>
        <title>Martin Diaz | Calendar</title>
        <meta
          name="description"
          content="Martin Diaz Calendar with dates of upcoming shows, concerts and public events."
        />
        <link rel="canonical" href="/calendar" />
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
      <Container sx={{ mt: 7, mb: 7 }}>
        <Grid container spacing={{ xs: 3, md: 3 }}>
          {isLoading ? (
            <LoadingPage />
          ) : events.length > 0 ? (
            events?.slice(0, visibleEvents).map((event) => (
              <Grid key={event.id} item xs={12}>
                <EventCard event={event} />
              </Grid>
            ))
          ) : (
            <EmptyCalendar />
          )}
          {visibleEvents < events.length && (
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 2 }}
                onClick={handleLoadMore}
              >
                Show More Events ({events.length - visibleEvents})
              </Button>
            </Grid>
          )}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              href={`https://bandsintown.com/artist-subscribe/${ARTIST_ID}?app_id=${API_KEY}&came_from=267&utm_source=public_api&utm_medium=api&utm_campaign=track`}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  backgroundColor: "#00B4B3",
                  color: "background.paper",
                  "&:hover": {
                    backgroundColor: "#00d9d8",
                  },
                }}
              >
                <SiBandsintown size="1.5em" style={{ marginRight: "25px" }} />
                Track On Bandsintown
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CalendarV2;
