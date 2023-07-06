import React, { useState } from "react";

import {
  Box,
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Typography,
} from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
const JobPost = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    company: "",
    workMode: "",
    skill: "",
    location: "",
    experience: "",
    salary: "",
    timestamp: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedJobData = {
      jobId: 0,
      title: jobData.title,
      description: jobData.description,
      companies: [
        {
          id: 0,
          name: jobData.company,
        },
      ],
      skills: [
        {
          id: 0,
          name: jobData.skill,
        },
      ],
      workMode: [
        {
          id: 0,
          name: jobData.workMode,
        },
      ],
      openings: [
        {
          id: 0,
          location: jobData.location,
          experience: jobData.experience,
        },
      ],
      salary: jobData.salary,
      timestamp: jobData.timestamp,
    };

    try {
      const response = await fetch("https://localhost:7138/api/Jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedJobData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        // Handle successful response here
      } else {
        throw new Error("Error posting job");
      }
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  return (
    <>
      <Container >
        <Box
          component="form"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            padding:"20px"
          }}
          onSubmit={handleSubmit}
        >
          <Player
            autoplay
            loop
            // src="https://assets8.lottiefiles.com/packages/lf20_mGmUcR.json"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
           <Typography variant="h5" gutterBottom>
        Job Post
      </Typography>
          <Grid container spacing={5}>
         
            <Grid item xs={12} md={6}>
              <TextField
                color="secondary"
                sx={{ m: 2 }}
                fullWidth
                size="small"
                label="Job Role"
                name="title"
                value={jobData.title}
                onChange={handleInputChange}
              />
              <TextField
                color="secondary"
                sx={{ m: 2 }}
                fullWidth
                size="small"
                label="Description"
                name="description"
                value={jobData.description}
                onChange={handleInputChange}
              />

              <FormControl
                sx={{ m: 2 }}
                color="secondary"
                fullWidth
                size="small"
              >
                <InputLabel id="demo-select-small-label">Companies</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Companies"
                  name="company"
                  value={jobData.company}
                  onChange={handleInputChange}
                >
                  {[
                    { value: "Google", label: "Google" },
                    { value: "Apple", label: "Apple" },
                    { value: "CIDC", label: "CIDC" },
                  ].map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                color="secondary"
                sx={{ m: 2 }}
                fullWidth
                size="small"
              >
                <InputLabel id="demo-select-small-label">WorkMode</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="WorkMode"
                  name="workMode"
                  value={jobData.workMode}
                  onChange={handleInputChange}
                >
                  {[
                    { value: "WorkFromHome", label: "Work From Home" },
                    { value: "Remote", label: "Remote" },
                    { value: "Hybrid", label: "Hybrid" },
                  ].map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                color="secondary"
                sx={{ m: 2 }}
                fullWidth
                size="small"
              >
                <InputLabel id="demo-select-small-label">Skills</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Skills"
                  name="skill"
                  value={jobData.skill}
                  onChange={handleInputChange}
                >
                  {[
                    { value: "Reactjs", label: "React js" },
                    { value: ".NET", label: ".NET" },
                    { value: "Nodejs", label: "Node js" },
                    { value: "UXUI", label: "UX UI" },
                  ].map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                color="secondary"
                sx={{ m: 2 }}
                fullWidth
                size="small"
              >
                <InputLabel id="demo-select-small-label">Location</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Location"
                  name="location"
                  value={jobData.location}
                  onChange={handleInputChange}
                >
                  {["Chennai", "Bangalore", "Velur"].map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                color="secondary"
                sx={{ m: 2 }}
                fullWidth
                size="small"
                label="Experience"
                name="experience"
                value={jobData.experience}
                onChange={handleInputChange}
              />
              <TextField
                color="secondary"
                sx={{ m: 2 }}
                fullWidth
                size="small"
                label="Salary"
                name="salary"
                value={jobData.salary}
                onChange={handleInputChange}
              />
              <TextField
                color="secondary"
                sx={{ m: 2 }}
                fullWidth
                size="small"
                label="Timestamp"
                name="timestamp"
                value={jobData.timestamp}
                onChange={handleInputChange}
              />

              <Button
                type="submit"
                variant="outlined"
                sx={{
                  m: 2,
                  borderRadius: "10px",
                  fontWeight: "bold",
                  color: "white",
                  border: "none",
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                Post a Job
              </Button>
            </Grid>
            <Grid item xs={12} md={6} >
              <Box display={"flex"} justifyContent={"flex-end"}>
            <Button
                
                onClick={() => {
                  window.location.pathname = "/jobsearch";
                }}
                variant="outlined"
                sx={{
                  mt: 2,
                  borderRadius: "10px",
                  fontWeight: "bold",
                  color: "white",
                  border: "none",
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  fontSize: "12px",
                  height: "30px",
                }}
              >
                Job Search
              </Button>
              </Box>
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_s5dhjbui.json"
                style={{ height: "600px", width: "400px" }}
              >
             </Player>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default JobPost;
