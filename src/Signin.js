import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import {Images} from "../src/Images/Images"
const Signin = () => {
  return (
    <>
    <Box sx={{ width: "100%", textAlign: "center", mt: 5, fw: 10 }}>
    <Typography variant="h4" sx={{ fontWeight: "bold"  }}>
    Log In Here!
    </Typography>
    
  </Box>
    <Grid container spacing={2}>
  <Grid item xs={6} 
  sx={{backgroundImage: `url(${Images.Signinpic})`}}>
    
  
  </Grid>
  <Grid item xs={6}>
  <Box sx={{ mt: 5  }}>
        <Grid
          container
          spacing={3}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <TextField  size="small" label="Email"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField  size="small" label="Password" type={"password"}></TextField>
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
