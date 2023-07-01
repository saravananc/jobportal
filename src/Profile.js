import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={20} ref={ref} variant="filled" {...props} />;
});


const Profile = () => {
  const id = localStorage.getItem("userId");

  const [profileData, setProfileData] = useState({});
  const [updateData, setUpdateData] = useState({});
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    education: [],
    certifications: [],
    experience: [],
    languages: [],
    objective: [],
    projects: [],
    skills: [],
    workshops: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setProfileData(profile);
  }, [profile]);

  const fetchData = () => {
    fetch(`https://localhost:7138/api/Contacts/${id}`, {
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
        setProfile(data);
      })
      .catch((error) => {
        console.error("Error occurred during the API call:", error);
      });
  };

  const handlePut = () => {
    fetch(`https://localhost:7138/api/Contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error occurred during the API call.");
        }
      })
      .then((data) => {
        setUpdateData(data);
        fetchData();
       handleClick();
      })
      .catch((error) => {
        console.error("Error occurred during the API call:", error);
      });
  };

  const handleNameChange = (e) => {
    setProfileData({
      ...profileData,
      name: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setProfileData({
      ...profileData,
      email: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    setProfileData({
      ...profileData,
      phone: e.target.value,
    });
  };
  const handleLocationChange = (e) => {
    setProfileData({
      ...profileData,
      location: e.target.value,
    });
  };
  const handleLinkedinChange = (e) => {
    setProfileData({
      ...profileData,
      linkedin: e.target.value,
    });
  };
  const handleGithubChange = (e) => {
    setProfileData({
      ...profileData,
      github: e.target.value,
    });
  };

  const handleChange = (e, index, field, section) => {
    const updatedSection = [...profileData[section]];
    updatedSection[index][field] = e.target.value;
  
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [section]: updatedSection,
    }));
  };
  
  console.log(updateData.message,"update");

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{ top: '10%', transform: 'translateY(-10%)' }}
        >
        <Alert  severity="success" sx={{ width: '100%', }}>
          Data Modified successfully!
        </Alert>
      </Snackbar>

      <Box
        component="form"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          padding: "20px",
        }}
      >
        <Player
          autoplay
          loop
          // src="https://assets5.lottiefiles.com/packages/lf20_91DQOE.json"
          // src="https://assets5.lottiefiles.com/packages/lf20_x3qekjm3.json"
          src="https://assets6.lottiefiles.com/packages/lf20_nwfrjcrb.json"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom>
              Personal Details
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  // focused
                  size="small"
                  label="Name"
                  name="name"
                  value={profileData?.name}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleNameChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Email"
                  name="email"
                  value={profileData?.email}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleEmailChange}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Phone"
                  name="phone"
                  value={profileData?.phone}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handlePhoneChange}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Location"
                  name="location"
                  value={profileData?.location}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleLocationChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  variant="outlined"
                  size="small"
                  label="LinkedIn"
                  name="linkedin"
                  value={profileData?.linkedin}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleLinkedinChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Github"
                  name="github"
                  value={profileData?.github}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleGithubChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom>
              Objectives
            </Typography>
            {profileData?.objective?.map((objectiveItem, index) => (
              <Grid container spacing={1} key={index}>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Objective"
                    name="objective"
                    value={objectiveItem.objectives}
                    fullWidth
                    multiline
                    maxRows={4}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "objectives", "objective")}


                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom>
              Education
            </Typography>
            {profileData?.education?.map((educationItem, index) => (
              <Grid container spacing={1} key={index}>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Course"
                    name="course"
                    value={educationItem.course}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "course", "education")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Year"
                    name="year"
                    value={educationItem.year}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "year", "education")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Institution"
                    name="institution"
                    value={educationItem.institution}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "institution", "education")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="University"
                    name="university"
                    value={educationItem.university}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "university", "education")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Percentage"
                    name="percentage"
                    value={educationItem.percentage}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "percentage", "education")}
                    style={{ marginBottom: "10px" }}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom>
              Certifications
            </Typography>
            {profileData?.certifications?.map((certificationItem, index) => (
              <Grid container spacing={1} key={index}>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Course"
                    name="course"
                    value={certificationItem.course}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "course", "certifications")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Year"
                    name="year"
                    value={certificationItem.year}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "year", "certifications")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Institution"
                    name="institution"
                    value={certificationItem.institution}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "institution", "certifications")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Score"
                    name="score"
                    value={certificationItem.score}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "score", "certifications")}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Description"
                    name="description"
                    value={certificationItem.description}
                    fullWidth
                    multiline
                    maxRows={4}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "description", "certifications")}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom>
              Experience
            </Typography>
            {profileData?.experience?.map((experienceItem, index) => (
              <Grid container spacing={1} key={index}>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Company"
                    name="company"
                    value={experienceItem.company}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "company", "experience")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Year"
                    name="year"
                    value={experienceItem.year}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Position"
                    name="position"
                    value={experienceItem.position}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "position", "experience")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Description"
                    name="description"
                    value={experienceItem.description}
                    fullWidth
                    multiline
                    maxRows={4}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "description", "experience")}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom>
              Languages
            </Typography>
            {profileData?.languages?.map((languagesItem, index) => (
              <Grid container spacing={1} key={index}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  style={{ marginBottom: "10px" }}
                >
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Language"
                    name="language"
                    value={languagesItem.language}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "language", "languages")}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  style={{ marginBottom: "10px" }}
                >
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Level"
                    name="level"
                    value={languagesItem.level}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "level", "languages")}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            {profileData?.skills?.map((skillsItem, index) => (
              <Grid container spacing={1} key={index}>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Skills"
                    name="skills"
                    value={skillsItem.skill}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "skills", "skills")}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom>
              Projects
            </Typography>
            {profileData?.projects?.map((projectsItem, index) => (
              <Grid container spacing={1} key={index}>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Title"
                    name="title"
                    value={projectsItem.title}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "title", "projects")}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Link"
                    name="link"
                    value={projectsItem.link}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "link", "projects")}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Description"
                    name="description"
                    value={projectsItem.description}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "description", "projects")}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom>
              Workshops
            </Typography>
            {profileData?.workshops?.map((workshopsItem, index) => (
              <Grid container spacing={1} key={index}>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Year"
                    name="year"
                    value={workshopsItem.year}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "year", "workshops")}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Description"
                    name="description"
                    value={workshopsItem.description}
                    fullWidth
                    multiline
                    maxRows={4}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, index, "description", "workshops")}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                ml: 2,
                borderRadius: "10px",
                fontWeight: "bold",
                color: "white",
                border: "none",
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                fontSize: "12px",
              }}
              onClick={handlePut}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
