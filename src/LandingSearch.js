import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/App.css";
import { Imagesfile } from "./Images/Images";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";

const LandingSearch = () => {
  const navigate = useNavigate();
  const [Years, setYears] = React.useState("");

  const handleChange = (event) => {
    setYears(event.target.value);
  };
  const jobcategory = [
    "Remote",
    "Fresher",
    "MNC",
    "Data Science",
    "Startup",
    "HR",
    "Sales",
    "Software Development",
    "Project Manager",
  ];

  const companycategory = [
    { category: "MNCs", image: Imagesfile.mnc },
    { category: "Product", image: Imagesfile.mnc },
    { category: "Banking & Finance", image: Imagesfile.Bank },
    { category: "Hospitality", image: Imagesfile.Edu },
    { category: "Fintech", image: Imagesfile.Fintech },
    { category: "Startups", image: Imagesfile.B2C },
    { category: "Edtech", image: Imagesfile.Edu },
    { category: "Internet", image: Imagesfile.Fintech },
    { category: "B2C", image: Imagesfile.B2C },
  ];

  const settings = {
    // dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true, // Enable autoplay
    // autoplaySpeed: 3000, // Set autoplay interval to 3 seconds
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const PrevArrow = (props) => (
    <button
      {...props}
      style={{
        position: "absolute",
        left: "23px",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <ChevronLeftIcon /> */}
    </button>
  );

  const NextArrow = (props) => (
    <button
      {...props}
      style={{
        position: "absolute",
        right: "30px",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <ChevronRightIcon /> */}
    </button>
  );

  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
  ];

  return (
    <>
      <Paper elevation={0}>
        <Box sx={{ width: "100%", textAlign: "center", my: 5, fw: 10 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Find your dream job now
          </Typography>
          <Typography variant="h6">Jobs for you to explore</Typography>
        </Box>

        <Box sx={{ mx: 2 }}>
          <Paper
            elevation={3}
            component="form"
            sx={{
              p: "2px 4px",
              mt: 7,
              width: "fit-content",
              margin: "auto",
            }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} sm={6} md={4} lg={4} display="flex">
                <IconButton sx={{ p: "10px" }} aria-label="menu">
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
              <Grid item xs={12} sm={6} md={3} lg={3} display="flex">
                <Divider
                  orientation="vertical"
                  sx={{ height: 28, m: 0.5, ml: 2 }}
                />
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-select-small-label">
                    Experience
                  </InputLabel>
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
              <Grid item xs={12} sm={6} md={3} lg={3} display="flex">
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
              <Grid item xs={12} sm={6} md={2} lg={2} display="flex">
                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                >
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "25px",
                      background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    }}
                  >
                    Search
                  </Button>
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Paper>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexWrap: "wrap",
          "& > *": { m: 1 },
          justifyContent: "center",
        }}
      >
        {jobcategory.map((job, index) => (
          <Button
            key={index}
            variant="outlined"
            endIcon={<ChevronRightIcon />}
            size="large"
            sx={{ m: 1, borderColor: "#895DA5", color: "#895DA5" }}
            onClick={()=>navigate("/jobsearch")}
          >
            {job}
          </Button>
        ))}
      </Box>

      {/* <Box sx={{ mt: 5 }}>
        <Slider {...settings}>
          {companycategory.map((company, index) => (
            <Box key={index} sx={{ pl: 4 }}>
              <Button
                variant="text"
                size="large"
                
                sx={{
                  height: "100px",
                  width: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#6936F5",
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "lightgray",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    height: "50%",
                    width: "100%",
                    backgroundImage: `url(${company.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  style={{
                    height: "50%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {company.category}
                </div>
              </Button>
            </Box>
          ))}
        </Slider>
      </Box> */}

      {/* <AppContainer> */}
      <Wrapper>
        <Note>Our customers have gotten offers from awesome companies.</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>

      {/* </AppContainer> */}
      <Box sx={{ mt: 5, my: 5 }}>
        <Slider
          {...settings}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {companycategory.map((company, index) => (
            <Box key={index} sx={{ pl: 5 }}>
              <Card
                variant="outlined"
                sx={{
                  height: "140px",
                  width: "250px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  borderColor: "lightgray",
                  cursor: "pointer",
                }}
              >
                

                <CardMedia
                  component="div"
                  sx={{
                    height: "50%",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      padding: "10px",
                      margin: "10px",
                      backgroundImage: `url(${company.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "inline-block",
                      border: "1px solid",
                      borderColor:"gray",
                      borderRadius: "10px",
                    }}
                  />
                   <div
                    style={{
                      height: "60px",
                      width: "60px",
                      padding: "10px",
                      margin: "10px",
                      backgroundImage: `url(${company.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "inline-block",
                      border: "1px solid",
                      borderColor:"gray",
                      borderRadius: "10px",
                    }}
                  />
                   <div
                    style={{
                      height: "60px",
                      width: "60px",
                      padding: "10px",
                      margin: "10px",
                      backgroundImage: `url(${company.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "inline-block",
                      border: "1px solid",
                      borderColor:"gray",
                      borderRadius: "10px",
                    }}
                  />
                </CardMedia>

                <CardContent
                  sx={{
                    height: "50%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#6936F5",
                  }}
                >
                  <Typography style={{ display: "flex", alignItems: "center" }} onClick={()=>navigate("/jobsearch")}>
                    {company.category} <ChevronRightIcon />
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default LandingSearch;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  /* margin-bottom: 40px;*/
  margin-top: 20px;
  color: black;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(8rem, 2rem + 40vmin, 1rem);
  padding: calc(clamp(1rem, 1rem + 30vmin, 1rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
