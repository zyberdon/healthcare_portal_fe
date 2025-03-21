import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { defaultConstant } from '../constants/commonComponent';

function Header(props) {
  console.log(props)
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {defaultConstant.HEALTHCAREPORTAL}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button color="inherit" component={Link} to="/">{defaultConstant.HOME}</Button>
            <Button color="inherit" component={Link} to="/healthtopics">{defaultConstant.HEALTHTOPICS}</Button>
            <Button color="inherit" component={Link} to="/services">{defaultConstant.SERVICES}</Button>
            <Button color="inherit" component={Link} to="/contact">{defaultConstant.CONTACT}</Button>
          </Box>
          <Button color="inherit" component={Link} to="/login">
            {defaultConstant.LOGIN}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
