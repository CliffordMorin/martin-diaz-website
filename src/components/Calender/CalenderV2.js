import { React } from "react";
import { Container, Typography, Grid, Paper, Divider } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import useTheme from "@mui/material/styles/useTheme";
import { Helmet } from "react-helmet-async";
import EventCard from "./EventCard";

let ids = Array.from({ length: 15 }, (_, i) => i + 1);
let citys = Array.from({ length: 15 }, (_, i) => "Amsterdam, NL");
let band = [
  "Philip Lassiter",
  "Philip Lassiter",
  "Ton Felices Quartet",
  "NJJO last concert",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "Ernesto Montenegro & Martin Diaz quintet",
  "Oscar Ployart and friends",
  "Martin Diaz plays Charlie Parker with Strings feat. Arts Simfònica Jove",
  "Martin Diaz plays Charlie Parker with Strings feat. Arts Simfònica Jove",
];
let date = [
  "FEB 25",
  "MAR 23",
  "MAR 24",
  "APR 17",
  "MAY 13",
  "MAY 14",
  "MAY 17",
  "MAY 18",
  "MAY 19",
  "MAY 20",
  "MAY 21",
  "JUN 15",
  "JUL 27",
  "JUL 29",
  "AUG 4",
];
let location = [
  "S’Hertogenbosch (Live Soul Festival)",
  "Germany",
  "Jazz Cafe Alto (Amsterdam)",
  "Cinetol (Amsterdam)",
  "Venue (Rotterdam) ",
  "Fizi Theatre (Zierikzee)",
  "ZonaJazz (Torre de Fontaubella)",
  "Auditori Caló del Soli (Sant Josep de Sa Talaia, Ibiza)",
  "Jamboree (Barcelona)",
  "La Mar de Jazz (Cambrils)",
  "Ultramar (L’Escala)",
  "The WolfHound (Haarlem)",
  "Robadors23 (Barcelona)",
  "Jamboree (Barcelona)",
  "Nits de Jazz (Platja d’Aro)",
];

const CalenderV2 = () => {
  const theme = useTheme();
  let events = ids.map((id, i) => {
    return {
      id,
      band: band[i],
      date: date[i],
      location: location[i],
    };
  });

  let events2 = citys.map((city, i) => {
    return {
      id: ids[i],
      city,
      band: band[i],
      date: date[i],
      location: location[i],
    };
  });

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
      <Container sx={{ mt: 7, mb: 7 }}>
        <Grid container spacing={{ xs: 3, md: 3 }}>
          {events2.map((event) => (
            <Grid key={event.id} item xs={12}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CalenderV2;
