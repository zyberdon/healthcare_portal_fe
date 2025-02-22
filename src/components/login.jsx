import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Container, Box, Link } from "@mui/material";
import { endpoints } from "../constants/endpoints";
import { postLogin } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  // const { loginStats } = useSelector((state) => state.login);
  const { data, loading, error, loginStats } = useSelector((state) => state.dataReducer);
  const navigate = useNavigate();

  const toggleAuthMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault()
    let req = {}
    if (isLogin) {
      req = {
        url: endpoints.LOGIN,
        reqBody: {
          method: 'POST',
          body: {
            email: e.target.email.value,
            password: e.target.pass.value
          }
        }
      } 
      }
    else {
         req = {
            url: endpoints.REGISTER,
            reqBody: {
              method: 'POST',
              body: {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                password: e.target.password.value,
                confirmpassword: e.target.confirmpassword.value
              }
            }
          } 
    }
      dispatch(postLogin(req));
    }
  

  useEffect(() => {
    if (loginStats && loginStats.message === 'User logged in successfully') {
      navigate("/profile")
    }
    if (loginStats && loginStats.message === 'User registered successfully') {
      navigate("/login")
    }

  }, [loginStats]);


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

        {/* If Login Page */}
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <TextField fullWidth label="Email" id='email' margin="normal" />
              <TextField fullWidth label="Password" id='pass' type="password" margin="normal" />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
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
              <TextField fullWidth label="Name" id="name" margin="normal" />
              <TextField fullWidth label="Email" id="email" margin="normal" />
              <TextField fullWidth label="Phone Number" id="phone" margin="normal" />
              <TextField fullWidth label="Password" type="password" id="password" margin="normal" />
              <TextField fullWidth label="Confirm Password" type="password" id="confirmpassword" margin="normal" />
              <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
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
        </form>
      </Box>
    </Container>
  );
};

export default Login;
