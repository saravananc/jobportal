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

import { styled } from "@mui/material/styles";
const WallPaper = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "500px", // Adjust the width as needed
  height: "500px ", // Adjust the height as needed
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  overflow: "hidden",
  background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&:before": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    top: "-50%",
    right: "-50%",
    background:
      "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)",
  },
  "&:after": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    bottom: "-50%",
    left: "-30%",
    background:
      "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",
    transform: "rotate(30deg)",
  },
}));

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));
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
      <Grid container spacing={1} sx={{ mt: 1 }}>
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
              src="https://assets3.lottiefiles.com/packages/lf20_g96md7ur.json"
              style={{ height: "500px", width: "500px" }}
            ></Player>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: "linear-gradient(45deg, #B2EBF2 10%, #E1F5FE 90%)",
          }}

          // style={{
          //   backgroundImage: `url(${Imagesfile.Signinbg})`,
          //   backgroundSize: "100% 100%",
          // }}
        >
          <Paper
            elevation={4}
            sx={{
              height: "500px",
              width: "400px",
              background:
                "radial-gradient(circle at center, rgba(216, 216, 216, 0.5) 0%, rgba(227, 228, 229, 0.2) 50%, rgba(227, 228, 229, 0) 100%)",
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
                    color="primary"
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
          </Paper>
          {/* <Box sx={{ width: '100%', overflow: 'hidden'}}>
      <WallPaper >
        <Widget sx={{marginTop:"50px"}}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}
          >
            <Box>
              <Box
                sx={{
                  width: '100%',
                  textAlign: 'center',
                  justifyContent: 'center',
                  mt: 5,
                  fontWeight: 'bold',
                }}
              >
                <Typography variant="h4">Log In Here!</Typography>
              </Box>
              <Grid
                sx={{ mt: 5 }}
                container
                spacing={3}
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <TextField size="small" label="Email"
                  
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
                  } />
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
                  <Button fullWidth variant="contained"
                   color="primary"
                   onClick={handleSignIn}>
                    Sign In
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
                    Don't have an account?{' '}
                    <Link href="#" color="inherit">
                      Sign Up
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Widget>
      </WallPaper>
    </Box> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Signin;
