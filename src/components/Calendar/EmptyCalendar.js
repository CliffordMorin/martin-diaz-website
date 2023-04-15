import React from "react";
import { Paper, Typography, Grid, Box } from "@mui/material";

const EmptyCalendar = () => {
  return (
    <Grid container spacing={{ xs: 3, md: 3 }}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "50%", my: 7 }}>
          <Paper sx={{ p: 8 }}>
            <Typography variant="h3" sx={{ mb: 2, textAlign: "center" }}>
              No shows scheduled
            </Typography>
            <Typography variant="h6">
              There are currently shows scheduled. Please check back later! Or
              you can track Martin on Bandsintown to get notified when new shows
              are announced.
            </Typography>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EmptyCalendar;
