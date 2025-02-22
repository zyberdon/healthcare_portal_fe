import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button color="inherit" component={Link} to="/healthtopics">Health Topics</Button>
            <Button color="inherit" component={Link} to="/services">Services</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
          </Box>

          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4">Welcome to the Home Page</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }} component={Link} to="/login">
          Go to Login
        </Button>
      </Box>
    </div>
  );
}

export default Home;
