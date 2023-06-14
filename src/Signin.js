import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../src/App.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { Imagesfile } from "./Images/Images";

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
     
      <Grid container spacing={1} sx={{ mt: 1, height:"455px"}} >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Paper elevation={0}>
            <Player
              autoplay
              loop
              src={Imagesfile.loginLeft}
              style={{ height: "400px", width: "500px" }}
            ></Player>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          // sx={{
          //   background: "linear-gradient(45deg, #6936f599 10%, #f7d8ffb5 90%)",
          // }}

          // style={{
          //   backgroundImage: `url(${Imagesfile.Signinbg})`,
          //   backgroundSize: "100% 100%",
          // }}
        >
          <Paper
            elevation={4}
            sx={{
              margin: "auto",
              height: "380px",
              width: "320px",
              background:
                "radial-gradient(circle at center, rgba(216, 216, 216, 0.5) 0%, rgba(227, 228, 229, 0.2) 50%, rgba(227, 228, 229, 0) 100%)",
            }}
          >
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Grid
                container
                spacing={3}
                direction={"column"}
                justify={"center"}
                alignItems={"center"}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", mt: 5 }}>
                  Log In Here!
                </Typography>
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
                    sx={{backgroundColor:"#6936F5"}}
                    onClick={handleSignIn}
                    href="/"
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
                    <Link href="/signup" color="inherit">
                      Sign Up
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
       
        </Grid>
      </Grid>



    </>
  );
};

export default Signin;
