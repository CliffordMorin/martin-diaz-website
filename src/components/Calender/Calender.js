import { React } from "react";
import { Typography, Container, Grid, Paper, Divider } from "@mui/material";
import Roll from "react-reveal/Roll";

let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let band = [
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
];
let date = [
  "Saturday, March 19, 2022 @ 9:00PM",
  "Friday, March 25, 2022 @ 9:00PM",
  "Saturday, March 26, 2022 @ 9:00PM",
  "Friday, April 8, 2022 @ 9:00PM",
  "Sunday, May 29, 2022 @ 9:00PM",
  "Friday, June 3, 2022 @ 9:00PM",
  "Thursday, June 16, 2022 @ 9:00PM",
  "Friday, July 8, 2022 @ 9:00PM",
  "Saturday, July 16, 2022 @ 9:00PM",
  "Thursday, August 4, 2022 @ 9:00PM",
  "Saturday, September 3, 2022 @ 9:00PM",
  "Friday, September 16, 2022 @ 9:00PM",
];
let location = [
  "Live! Casino, Philadelphia, PA",
  "Hard Rock Cafe, Atlantic City, NJ",
  "Rivers Casino, Philadelphia, PA",
  "Hard Rock Cafe, Atlantic City, NJ",
  "Windrift Hotel Resort, Avalon, NJ",
  "Hard Rock Cafe, Atlantic City, NJ",
  "Live! Casino, Philadelphia, PA",
  "Hard Rock Cafe, Atlantic City, NJ",
  "Windrift Hotel Resort, Avalon, NJ",
  "Hard Rock Cafe, Atlantic City, NJ",
  "Windrift Hotel Resort, Avalon, NJ",
  "Hard Rock Cafe, Atlantic City, NJ",
];

const Calender = () => {
  let events = ids.map((id, i) => {
    return {
      id: id,
      band: band[i],
      date: date[i],
      location: location[i],
    };
  });

  return (
    <div>
      <Typography variant="h2" align="center" sx={{ mt: 5 }}>
        <Roll left cascade>
          Upcoming Shows
        </Roll>
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
