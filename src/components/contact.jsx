import React from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

function Contact() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>

        <TextField fullWidth label="Name" margin="normal" />
        <TextField fullWidth label="Email" type="email" margin="normal" />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}   
          margin="normal"
        />

        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;


// create a page for user profile using mui with - side drawer having route options for different pages, name of user at top , and page will have some information with cards