import React, { useState } from "react";
import { Grid, TextField, Button, useTheme } from "@mui/material";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your code to handle form submission goes here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            color="primary"
            InputProps={{
              style: { color: theme.palette.primary.main },
            }}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            color="primary"
            InputProps={{
              style: { color: theme.palette.primary.main },
            }}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={email}
            color="primary"
            InputProps={{
              style: { color: theme.palette.primary.main },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={message}
            color="primary"
            InputProps={{
              style: { color: theme.palette.primary.main },
            }}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
