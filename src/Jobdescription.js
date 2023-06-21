import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Stack } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import { useParams } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

const Jobdescription = () => {
  const urlParams = useParams();
  const id = urlParams.id;
  const [cardData, setCardData] = useState([]);
  const [cardDataJobs, setCardDataJobs] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch(`https://localhost:7138/api/Jobs/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error occurred during the API call.");
          }
        })
        .then((data) => {
          console.log("Data fetched successfully:", data);
          const jobData = {
            id: data.id,
            title: data.title,
            companyName: data.companies[0]?.name || "",
            experience: data.openings[0]?.experience || "",
            salary: data.salary || "",
            workmode: data.workMode[0]?.name || "",
            locations: data.openings[0]?.location || "",
            description: data.description || "",
            timestamp: data.timestamp || "",
          };
          setCardData([jobData]);
          return data.openings[0]?.location || ""; // Pass location to the next then block
        })
        .then((location) => {
          return fetch(
            `https://localhost:7138/api/Jobs?locationOptions=${location}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error occurred during the API call.");
          }
        })
        .then((data) => {
          console.log("Location-based data fetched successfully:", data);
          setCardDataJobs(data);
        })
        .catch((error) => {
          console.error("Error occurred during the API call:", error);
        });
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          padding: { xs: 0, md: 5 },
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} md={8}>
            <Item>
              <div>
                {cardData && cardData.length > 0 ? (
                  cardData.map((data, index) => (
                    <Box key={index} sx={{ minWidth: 275 }}>
                      <Card
                        sx={{
                          borderRadius: "15px",
                          mt: 1,
                          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                        }}
                        variant="outlined"
                      >
                        <CardContent>
                          <CardActions>
                            <div>
                              <Typography sx={{ fontSize: 20 }} gutterBottom>
                                {data.title}
                              </Typography>
                              <Typography
                                sx={{ mb: 1.5, color: "text.secondary" }}
                              >
                                {data.companyName}
                              </Typography>
                            </div>
                            <div style={{ marginLeft: "auto" }}>
                              <Avatar
                                sx={{
                                  backgroundColor: "orange",
                                }}
                                aria-label="companyname"
                              >
                                {data.companyName.substring(0, 2).toUpperCase()}
                              </Avatar>
                            </div>
                          </CardActions>

                          <Stack direction="row" spacing={1}>
                            <Chip
                              sx={{ backgroundColor: "white" }}
                              icon={<WorkIcon style={{ color: "#478CF7" }} />}
                              label={data.experience}
                            />
                            <Chip
                              sx={{ backgroundColor: "white" }}
                              icon={
                                <CurrencyRupeeIcon
                                  style={{ color: "#FFB300" }}
                                />
                              }
                              label={data.salary}
                            />
                          </Stack>
                          <Stack direction="row" spacing={1}>
                            <Chip
                              sx={{ backgroundColor: "white" }}
                              icon={
                                <DescriptionIcon
                                  style={{ color: "lightblue" }}
                                />
                              }
                              label={data.description}
                            />
                          </Stack>
                          <Stack direction="row" spacing={1}>
                            <Chip
                              sx={{
                                backgroundColor: "white",
                                fontSize: "15px",
                              }}
                              icon={
                                <LocationOnIcon
                                  style={{ color: "blueviolet" }}
                                />
                              }
                              label={data.locations}
                            />
                          </Stack>
                        </CardContent>
                        <CardActions>
                          <Typography sx={{ fontSize: "12px" }}>
                            {data.timestamp}
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              marginLeft: "auto",
                              borderRadius: "15px",
                              color: "white",
                              backgroundColor: "#6936F5",
                            }}
                          >
                            Apply
                          </Button>
                        </CardActions>
                      </Card>
                    </Box>
                  ))
                ) : (
                  <Typography>No job data available</Typography>
                )}
              </div>
              <div>
                {cardData.map((data, index) => (
                  <Box
                    key={index}
                    sx={{ p: 2, mt: 1, border: "1px dashed grey" }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Job description
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {data.description}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      TO APPLY, PLEASE CLICK ON THE APPLY LINK
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Roles and Responsibilities
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Transforming complex PSD layouts into pixel-perfect
                      presentation-layer HTML5/CSS3 templates <br /> Creating
                      responsive website designs <br />
                      Building websites with WordPress/BigCommerce/Shopify{" "}
                      <br />
                      Working with Photoshop, Illustrator, and Fireworks to
                      create images optimized for the web <br />
                      Working with version control systems such as GIT / SVN
                      <br />
                      Working under tight deadlines <br />
                      Handling multiple projects at the same time <br />
                      Producing high-quality work with a strong focus on detail
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Desired Candidate Profile
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Transforming complex PSD layouts into pixel-perfect
                      presentation-layer HTML5/CSS3 templates <br /> Creating
                      responsive website designs <br />
                      Building websites with WordPress/BigCommerce/Shopify{" "}
                      <br />
                      Working with Photoshop, Illustrator, and Fireworks to
                      create images optimized for the web <br />
                      Working with version control systems such as GIT / SVN
                      <br />
                      Working under tight deadlines <br />
                      Handling multiple projects at the same time <br />
                      Producing high-quality work with a strong focus on detail
                    </Typography>
                  </Box>
                ))}
              </div>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ border: "1px solid #DBA6F7", borderRadius: "5px" }}
          >
            <Item>
              <Typography variant="h6" sx={{ color: "black" }} gutterBottom>
              Other Jobs in Same Location
              </Typography>

              <div>
                {cardDataJobs.length > 0 ? (
                  cardDataJobs.map((data, index) => (
                    <Box key={index} sx={{ minWidth: 275 }}>
                      <Card
                        sx={{
                          borderRadius: "15px",
                          mt: 1,
                        }}
                        variant="outlined"
                      >
                        <CardActionArea>
                          <CardContent>
                            <CardActions>
                              <div>
                                <Typography sx={{ fontSize: 16 }} gutterBottom>
                                  {data.title}
                                </Typography>
                                <Typography sx={{ color: "text.secondary" }}>
                                  {data.companies[0]?.name || ""}
                                </Typography>
                              </div>
                            </CardActions>

                            <Stack direction="row" spacing={1}>
                              <Chip
                                sx={{
                                  backgroundColor: "white",
                                  fontSize: "15px",
                                }}
                                icon={
                                  <LocationOnIcon
                                    style={{ color: "blueviolet" }}
                                  />
                                }
                                label={data.openings[0]?.location || ""}
                              />
                            </Stack>

                            <Typography sx={{ fontSize: "12px" }}>
                              {data.timestamp}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>
                  ))
                ) : (
                  <Typography>No job data available</Typography>
                )}
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Jobdescription;
