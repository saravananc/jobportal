
import { Box, Typography, Container, Link, Grid, Stack, Chip } from "@mui/material";

const Footer = () => {
  const handleClick = () => {
    console.log('You clicked the Chip.');
  };

  return (
    <>
      <Box
        sx={{
          py: 3,
          mt: "auto",
          backgroundColor: "#6936F5",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={8}>
                <Typography variant="body1" color="white">
                  Find Your Dream Jobs Right Here
                </Typography>
                <Typography variant="body2" color="white">
                  {"Copyright © "}
                  <Link color="inherit" href="https://google.com/">
                    CIDC JOBS
                  </Link>{" "}
                  {new Date().getFullYear()}
                  {"."}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                  <Chip
                    label="Jobs"
                    variant="outlined"
                    sx={{ color: "white" }}
                    onClick={handleClick}
                  />
                  <Chip
                    label="Companies"
                    variant="outlined"
                    sx={{ color: "white" }}
                    onClick={handleClick}
                  />
                  <Chip
                    label="Services"
                    variant="outlined"
                    sx={{ color: "white" }}
                    onClick={handleClick}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
