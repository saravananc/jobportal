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
  Tooltip,
} from "@mui/material";
import { Stack } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavigate, useParams } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Jobdescription = () => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const id = urlParams.id;

  const [cardData, setCardData] = useState([]);
  const [cardDataJobs, setCardDataJobs] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:7138/api/Jobs/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Data fetched successfully:", data);
          const jobData = {
            id: data.jobId,
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

          const location = data.openings[0]?.location || "";
          const locationResponse = await fetch(
            `https://localhost:7138/api/Jobs?locationOptions=${location}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (locationResponse.ok) {
            const locationData = await locationResponse.json();
            console.log("Location-based data fetched successfully:", locationData);
            setCardDataJobs(locationData);
          } else {
            throw new Error("Error occurred during the location API call.");
          }
        } else {
          throw new Error("Error occurred during the main API call.");
        }
      } catch (error) {
        console.error("Error occurred during the API call:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleApply = () => {
    if (!isLogged) {
      setShowTooltip(true);
      return;
    }

    const jobId = cardData[0].id;
    // Apply logic here
  };

  return (
    <div>
      {cardData.map((card) => (
        <div key={card.id}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <WorkIcon fontSize="small" />
                      {card.companyName}
                    </Stack>
                  </Typography>
                  <Typography variant="body2">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CurrencyRupeeIcon fontSize="small" />
                      {card.salary}
                    </Stack>
                  </Typography>
                  <Typography variant="body2">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <LocationOnIcon fontSize="small" />
                      {card.locations}
                    </Stack>
                  </Typography>
                  <Typography variant="body2">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <DescriptionIcon fontSize="small" />
                      {card.experience}
                    </Stack>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={handleApply}>
                    Apply
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Item>
                <Typography variant="h6">Job Description</Typography>
                <Typography variant="body1">{card.description}</Typography>
              </Item>
            </Grid>
          </Grid>
        </div>
      ))}
      <Tooltip
        open={showTooltip}
        title="Please log in to apply for the job"
        onClose={() => setShowTooltip(false)}
        placement="bottom"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/login")}
        >
          Log In
        </Button>
      </Tooltip>
      {cardDataJobs.length > 0 && (
        <Box mt={4}>
          <Typography variant="h6">Similar Jobs</Typography>
          <Grid container spacing={2}>
            {cardDataJobs.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.jobId}>
                <CardActionArea
                  onClick={() => navigate(`/jobdescription/${job.jobId}`)}
                >
                  <Card>
                    <CardContent>
                      <Typography variant="body1">{job.title}</Typography>
                      <Typography variant="body2">
                        {job.companies[0]?.name || ""}
                      </Typography>
                      <Typography variant="body2">{job.salary}</Typography>
                      <Typography variant="body2">{job.openings[0]?.location}</Typography>
                      <Typography variant="body2">{job.openings[0]?.experience}</Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default Jobdescription;
