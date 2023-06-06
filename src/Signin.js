import {
  AppBar,
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Imagesfile } from "./Images/Images";
import { Player } from "@lottiefiles/react-lottie-player";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "" || password.trim() === "") {
      setError("Email and password are required.");
    } else if (!emailRegex.test(email)) {
      setError("Invalid email format.");
    } else {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      if (!passwordRegex.test(password)) {
        setError(
          "Password must be at least 6 characters long and contain at least one number."
        );
      } else {
        // Call the login API with the email and password
        // Replace the following code with your actual API call
        console.log("Email:", email);
        console.log("Password:", password);
        // Your API call here
      }
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img
              src={Imagesfile.Signinlogo}
              alt="Logo"
              style={{ height: "60px", marginRight: "10px" }}
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              fontWeight: "bold",
            }}
          >
            Explore Jobs
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={1} sx={{ mt: 5 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Paper
            elevation={0}
            // style={{
            //   backgroundImage: `url(${Imagesfile.Signinani})`,
            //   backgroundSize: "100% 100%",
            // }}
            // sx={{ height: "80vh", width: "100%" }}
          >
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_g96md7ur.json"
              style={{ height: "500px", width: "500px" }}
            >
              
            </Player>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            backgroundImage: `url(${Imagesfile.Signinbg})`,
            backgroundSize: "100% 100%",
          }}
        >
          <Box sx={{ width: "100%", textAlign: "center", mt: 5, fw: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Log In Here!
            </Typography>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Grid
              container
              spacing={3}
              direction={"column"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid item xs={12}>
                <TextField
                  size="small"
                  label="Email"
                  value={email}
                  onChange={handleEmailChange}
                  error={
                    error !== "" &&
                    (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
                  }
                  helperText={
                    error !== "" &&
                    (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
                      ? "Invalid email format."
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={error !== "" && !password}
                  helperText={
                    error !== "" && !password ? "Password is required." : ""
                  }
                />
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Typography color="error">{error}</Typography>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleSignIn}
                >
                  Signin
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  <Link href="#" color="inherit">
                    Forgot password?
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Don't have an account?{" "}
                  <Link href="#" color="inherit">
                    Sign Up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Signin;
