import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Imagesfile } from "./Images/Images";

const Signin = () => {
    return (
        <>
            <Box sx={{ width: "100%", textAlign: "center", mt: 5, fw: 10 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Log In Here!
                </Typography>
            </Box>
            <Grid container spacing={1} sx={{ mt: 5 }}>
                <Grid item xs={6}>
                    <Paper
                        style={{ backgroundImage: `url(${Imagesfile.Signinpic})`, backgroundSize: "100% 100%" }}
                        sx={{ height: "80vh", width: "100%" }}
                    ></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ mt: 20 }}>
                        <Grid container spacing={3} direction={"column"} justify={"center"} alignItems={"center"}>
                            <Grid item xs={12}>
                                <TextField size="small" label="Email"></TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField size="small" label="Password" type={"password"}></TextField>
                            </Grid>

                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" color="secondary">
                                    Signin
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};
export default Signin;
