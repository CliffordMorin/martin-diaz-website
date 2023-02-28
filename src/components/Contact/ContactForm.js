import React, { useState, useRef } from "react";
import { Grid, TextField, Button, useTheme } from "@mui/material";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_YOUR_USER_ID;

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const theme = useTheme();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        toast.success(
          "Message sent successfully! Thank you, we will get back to you as soon as possible!",
          { theme: "colored", position: "bottom-left" }
        );
        console.log(result.text);
      },
      (error) => {
        toast.error("Message failed to send, sorry. Please try again later.", {
          theme: "colored",
          position: "bottom-left",
        });
        console.log(error.text);
      }
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <ToastContainer />
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
