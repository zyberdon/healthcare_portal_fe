import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { endpoints } from "../constants/endpoints";
import { postContact } from "../actions";
import { defaultConstant } from "../constants/commonComponent";

function Contact() {
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault()
    let req = {}
    req = {
      url: endpoints.CONTACT,
      reqBody: {
        method: 'POST',
        body: {
          username: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }

      }
    }
    dispatch(postContact(req));
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
          {defaultConstant.CONTANTUS}
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

          <Button fullWidth type='submit' variant="contained" sx={{ mt: 2 }}>
            {defaultConstant.SUBMIT}
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Contact;


// create a page for user profile using mui with - side drawer having route options for different pages, name of user at top , and page will have some information with cards