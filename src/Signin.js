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
import { Player } from "@lottiefiles/react-lottie-player";
import { Imagesfile } from "./Images/Images";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Link as RouterLink,
  useNavigate,
} from "react-router-dom";

const schema = yup.object().shape({
  Email: yup
    .string()
    .required("Email is required.")
    .email("Please enter a valid email."),
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters long.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      "Password must contain at least one number."
    ),
});

const Signin = ({ onLogin }) => {
  const [errorMessage, setErrorMessage] = useState("");
  

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit = (signInData) => {
    console.log(signInData);
    fetch("https://localhost:7138/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInData),
    })
    .then((response) => {
      if (response.ok) {
        console.log("Signin successful", response);
        onLogin();
        navigate("/jobsearch");
      } else {
        throw new Error("Signin failed");
      }
    })
    
      .catch((error) => {
        console.error("Error occurred during Signin", error);
        setErrorMessage("An error occurred during Signin");
      });
  };

  return (
    <>
      <Grid container spacing={1} sx={{ mt: 1, height: "455px" }}>
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
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              margin: "auto",
              height: "400px",
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
                <Typography variant="h5" sx={{ fontWeight: "bold", mt: 3 }}>
                  Log In Here!
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Email"
                    {...register("Email")}
                  />
                </Grid>
                <Grid item xs={12}>
                  {errors.Email && (
                    <span style={{ color: "red" }}>{errors.Email.message}</span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Password"
                    type="password"
                    {...register("password")}
                  />
                </Grid>
                <Grid item xs={12}>
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      {errors.password.message}
                    </span>
                  )}
                </Grid>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ backgroundColor: "#6936F5" }}
                    type="submit"
                    disabled={isDirty && !isValid}
                    onClick={handleSubmit(onSubmit)}
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
                    <RouterLink to="/signup" color="inherit">
                      Sign Up
                    </RouterLink>
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
