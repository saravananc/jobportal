import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import WorkIcon from "@mui/icons-material/Work";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NavigationIcon from "@mui/icons-material/Navigation";
import DescriptionIcon from "@mui/icons-material/Description";
import Stack from "@mui/material/Stack";

const AppliedJobs = () => {
  

  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    fetch(`https://localhost:7138/api/AppliedJobs/${userId}`, {
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
        console.log("Applied job data:", data);
        setAppliedJobs(data);
      })
      .catch((error) => {
        console.error("Error occurred during the API call:", error);
      });
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1, padding:"20px" }} >
        <Grid container spacing={2}>
          <Grid item xs={6}>
           
              {appliedJobs.length > 0 ? (
                appliedJobs.map((data) => (
                  <Card key={data.appliedJobId} sx={{ mb: 2 }}>
                    <CardActionArea>
                      <CardContent>
                        <CardActions>
                          <div>
                            <Typography sx={{ fontSize: 20 }} gutterBottom>
                              {data.jobTitle}
                            </Typography>
                            <Typography
                              sx={{ mb: 1.5, color: "text.secondary" }}
                            >
                              {data.companies[0].name}
                            </Typography>
                          </div>
                          <div style={{ marginLeft: "auto" }}>
                            <Avatar
                              sx={{
                                backgroundColor: "orange",
                              }}
                              aria-label="companyname"
                            >
                              {data.companies[0].name
                                .substring(0, 2)
                                .toUpperCase()}
                            </Avatar>
                          </div>
                        </CardActions>

                        <Stack direction="row" spacing={1}>
                          <Chip
                            sx={{ backgroundColor: "white" }}
                            icon={<WorkIcon style={{ color: "#478CF7" }} />}
                            label={data.openings[0].experience}
                          />
                          <Chip
                            sx={{ backgroundColor: "white" }}
                            icon={
                              <CurrencyRupeeIcon style={{ color: "#FFB300" }} />
                            }
                            label={data.salary}
                          />
                          <Chip
                            sx={{ backgroundColor: "white" }}
                            icon={
                              <LocationOnIcon
                                style={{ color: "blueviolet" }}
                              />
                            }
                            label={data.openings[0].location}
                          />
                          <Chip
                            sx={{ backgroundColor: "white" }}
                            icon={
                              <NavigationIcon style={{ color: "pink" }} />
                            }
                            label={data.workMode[0].name}
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
                        <Typography sx={{ mt: 1 }} color="text.secondary">
                          {data.skills.map((skill) => skill.name).join(", ")}
                        </Typography>
                      </CardContent>
                      {/* <CardActions>
                        <Typography sx={{ fontSize: "12px" }}>
                          {data.timestamp}
                        </Typography>
                      </CardActions> */}
                    </CardActionArea>
                  </Card>
                ))
              ) : (
                <Typography>No applied jobs found</Typography>
              )}
           
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AppliedJobs;
