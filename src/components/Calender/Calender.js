import { React } from "react";
import { Typography, Container, Grid, Paper, Divider } from "@mui/material";
import { Bounce } from "react-awesome-reveal";

let ids = Array.from({ length: 10 }, (_, i) => i + 1);
let band = [
  "Philip Lassiter",
  "Philip Lassiter",
  "NJJO last concert",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
  "The Dam Jawn feat. Dick Oatts",
];
let date = [
  "Saturday, February 25, 2023 @ 15:00pm",
  "Thursday, March 23, 2023 @ 20:00pm",
  "Monday, April 17, 2023 @ 20:00pm",
  "Saturday, May 13, 2023 @ 20:00pm",
  "Sunday, May 14, 2023 @ 20:00pm",
  "Wednesday, May 17, 2023 @ 20:00pm",
  "Thursday, May 18, 2023 @ 20:00pm",
  "Friday, May 19 2023 @ 20:00pm",
  "Saturday, May 20, 2023 @ 20:00pm",
  "Saturday, May 21, 2023 @ 20:00pm",
];
let location = [
  "S’Hertogenbosch (Live Soul Festival)",
  "Germany",
  "Cinetol (Amsterdam)",
  "Venue (Rotterdam) ",
  "Fizi Theatre (Zierikzee)",
  "ZonaJazz (Torre de Fontaubella)",
  "Auditori Caló del Soli (Sant Josep de Sa Talaia, Ibiza)",
  "Jamboree (Barcelona)",
  "La Mar de Jazz (Cambrils)",
  "Ultramar (L’Escala)",
];

const Calender = () => {
  let events = ids.map((id, i) => {
    return {
      id,
      band: band[i],
      date: date[i],
      location: location[i],
    };
  });

  return (
    <div>
      <Typography variant="h2" align="center" sx={{ mt: 5 }}>
        <Bounce>Upcoming Shows</Bounce>
      </Typography>
      <Container sx={{ mt: 7 }}>
        <Paper elevation={16}>
          <Grid container spacing={{ xs: 2, md: 3 }} sx={{ pb: 2, pl: 5 }}>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="h5"> Event </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="h5"> Date </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography
                variant="h5"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
                {" "}
                Location{" "}
              </Typography>
            </Grid>
          </Grid>
          <Divider style={{ backgroundColor: "white" }} />

          {events.map((i) => {
            let currDate = new Date();
            let date = new Date(i.date.split("@")[0]);
            let lineThrough;
            if (currDate > date) {
              lineThrough = { textDecoration: "line-through" };
            } else {
              lineThrough = null;
            }
            return (
              <div key={i.id}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  sx={{ py: 3, pl: 5, pr: 5 }}
                  style={lineThrough}
                >
                  <Grid item xs={6} sm={6} md={4}>
                    <Typography variant="h8">{i.band}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                    <Typography variant="h8">{i.date}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                    <Typography variant="h8">{i.location}</Typography>
                  </Grid>
                </Grid>
                <Divider
                  variant="middle"
                  style={{ backgroundColor: "white" }}
                />
              </div>
            );
          })}

          <Divider />
        </Paper>
      </Container>
    </div>
  );
};

export default Calender;
