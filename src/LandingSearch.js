import React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LandingSearch = () => {
  const [Years, setYears] = React.useState("");

  const handleChange = (event) => {
    setYears(event.target.value);
  };
  const jobcategory = ["Remote","Fresher", "MNC", "Data Science","Startup","HR","Sales","Software Development","Project Manager"];
  const companycategory = ["MNCs","Product", "Banking & Finance", "Hospitality","Fintech","Startups","Edtech","Internet","B2C"];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval to 3 seconds
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };


  return (
    <>
      <Box sx={{ width: "100%", textAlign: "center", mt: 5, fw: 10 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Find your dream job now
        </Typography>
        <Typography variant="h6">Jobs for you to explore</Typography>
      </Box>

     
       <Box sx={{ mx: 2 }}>
      <Paper
        elevation={4}
        component="form"
        sx={{
          p: '2px 4px',
          mt: 7,
         
        }}
      >
        <Grid container spacing={2}  alignItems="center"
            justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={3} display="flex">
            <IconButton sx={{ p: '10px' }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <TextField
              fullWidth
              size="small"
              id="outlined-search"
              variant="outlined"
              label="Enter Skills/Designations/Companies"
              type="search"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} display="flex">
            <Divider orientation="vertical" sx={{ height: 28, m: 0.5 ,ml:2 }} />
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-small-label">Experience</InputLabel>
              <Select
              sx={{ ml: 1 }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={Years}
                label="Experience"
                onChange={handleChange}
              >
                <MenuItem value="Fresher">
                  <em>Fresher</em>
                </MenuItem>
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
                <MenuItem value={4}>Four</MenuItem>
                <MenuItem value={5}>Five</MenuItem>
                <MenuItem value={6}>Six</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} display="flex">
            <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
            <TextField
            sx={{ ml: 2 }}
              fullWidth
              size="small"
              id="outlined-search"
              variant="outlined"
              label="Enter Location"
              type="search"
              
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} display="flex" >
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
              <Button variant="contained" style={{ borderRadius: '25px' }}>
                Search
              </Button>
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Box>
     
      <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap', '& > *': { m: 1 } }}>
  {jobcategory.map((job, index) => (
    <Button key={index} variant="outlined" size="large" sx={{ m: 1 }}>
      {job}
    </Button>
  ))}
</Box>

<Box sx={{ mt: 5 }}>
      <Slider {...settings}>
        {companycategory.map((company, index) => (
          <Box key={index} sx={{ p: 1 }}>
            <Button variant="text" size="large" sx={{ height: '100px', width: '200px', backgroundColor:"#ff80ab" ,color:"white"}}>
              {company}
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>


    </>
  );
};

export default LandingSearch;
