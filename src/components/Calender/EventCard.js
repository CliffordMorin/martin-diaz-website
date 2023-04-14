import { Box, Typography, Button } from "@mui/material";

const EventCard = ({ event }) => {
  const { band, date, location, city } = event;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        backgroundColor: "background.paper",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 4,
        "&:not(:last-child)": {
          mb: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: 1,
          px: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "secondary.main",
            borderRadius: 2,
            px: 1,
            py: 0.5,
            mr: 1,
          }}
        >
          <Typography variant="body2">{date}</Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "warning.main",
            borderRadius: 2,
            px: 1,
            py: 0.5,
            mr: 1,
          }}
        >
          <Typography variant="body2">{city}</Typography>
        </Box>
        <Typography variant="body2">{location}</Typography>
      </Box>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ mr: 2 }}>
          {band}
        </Typography>
        <Button variant="contained" color="secondary" size="medium">
          RSVP
        </Button>
      </Box>
    </Box>
  );
};

export default EventCard;
