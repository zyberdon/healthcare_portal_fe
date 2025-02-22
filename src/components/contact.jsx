import React from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

function Contact() {


    const handleSubmit = (e) => {
        e.preventDefault()
        let req = {}
        if (isLogin) {
          req = {
            url: endpoints.LOGIN,
            reqBody: {
              method: 'POST',
              body: {
                email: e.target.name.value,
                password: e.target.email.value,
                email: e.target.message.value,
              }
            }
          } 
          }
          dispatch(postLogin(req));
        };

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
        <form onSubmit={handleSubmit}>
        <TextField fullWidth id="name" label="Name" margin="normal" />
        <TextField fullWidth id="email" label="Email" type="email" margin="normal" />
        <TextField
          fullWidth
          id="message"
          label="Message"
          multiline
          rows={4}   
          margin="normal"
        />

        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Contact;


// create a page for user profile using mui with - side drawer having route options for different pages, name of user at top , and page will have some information with cards