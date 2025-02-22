import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Card,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Profile() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const userName = "User"; // Replace with dynamic user data

  // Toggle Drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar with User Name */}
      <AppBar position="fixed" sx={{ zIndex: 1300 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {userName}'s Profile
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          {/* This Toolbar pushes the list below the AppBar */}
          <Toolbar />
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            {/* <ListItem button component={Link} to="/profile">
              <ListItemText primary="Profile" />
            </ListItem> */}
            {/* <ListItem button component={Link} to="">
              <ListItemText primary="Settings" />
            </ListItem> */}
            <ListItem button component={Link} to="/">
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {userName}!
        </Typography>
        
        <Grid container spacing={3}>
          {/* Card 1 - Personal Info */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Personal Information</Typography>
                <Typography variant="body2">Email: johndoe@example.com</Typography>
                <Typography variant="body2">Phone: +123 456 7890</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2 - Account Details */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Account Details</Typography>
                <Typography variant="body2">Member Since: 2020</Typography>
                <Typography variant="body2">Subscription: Premium</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Accordion Section */}
        <Box sx={{ mt: 3 }}>
          {/* Accordion 1 - Additional User Info */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">More About {userName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                User is a software engineer with 5 years of experience in full-stack development. He loves coding, reading, and hiking.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion 2 - Reminders */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Reminders</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ✅ Complete React project by Friday  
                ✅ Renew Premium Subscription on March 15  
                ✅ Doctor's Appointment on February 28  
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
