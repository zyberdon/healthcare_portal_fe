import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box, Link } from "@mui/material";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <Container maxWidth="xs">
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
          {isLogin ? "Login" : "Register"}
        </Typography>

        {isLogin ? (
          <>
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Password" type="password" margin="normal" />
            <Button fullWidth variant="contained" sx={{ mt: 2 }}>
              Login
            </Button>
            <Typography variant="body2" sx={{ mt: 2 }}>
              New User?{" "}
              <Link component="button" onClick={toggleAuthMode}>
                Register
              </Link>
            </Typography>
          </>
        ) : (
          <>
            <TextField fullWidth label="Name" margin="normal" />
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Phone Number" margin="normal" />
            <TextField fullWidth label="Password" type="password" margin="normal" />
            <TextField fullWidth label="Confirm Password" type="password" margin="normal" />
            <Button fullWidth variant="contained" sx={{ mt: 2 }}>
              Register
            </Button>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Already have an account?{" "}
              <Link component="button" onClick={toggleAuthMode}>
                Login
              </Link>
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
}

export default Login;
