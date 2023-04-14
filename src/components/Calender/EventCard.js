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
            bgcolor: "warning.main",
            borderRadius: 2,
            px: 1,
            py: 0.5,
            mr: 1,
          }}
        >
          <Typography variant="body">{city}</Typography>
        </Box>
        <Typography variant="body">{location}</Typography>
      </Box>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "secondary.main",
            borderRadius: 2,
            px: 2.5,
            py: 2,
            mr: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" color="background.paper">
            {date.split(" ")[0].toUpperCase()}
          </Typography>
          <Typography variant="body1" color="background.paper">
            {date.split(" ")[1]}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{
            mr: 2,
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
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
