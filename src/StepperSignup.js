import React, { useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Grid,
  Box,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

import Files from "react-files";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import PropTypes from "prop-types";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";

import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

import "../src/styles/Form.scss";
import { Typography } from "@material-ui/core";

const StepperSignup = ({ data, setData, preset, setColor, color }) => {
  const [pickerColor, setPickerColor] = useState();
  let {
    name,
    photoUrl,
    location,
    phone,
    email,
    linkedin,
    github,
    password,
    confirmPassword,
  } = data.contact;
  let languages = data.languages;
  // let references = data.references;
  let objective = data.objective;
  let education = data.education;
  let experience = data.experience;
  let certifications = data.certifications;
  let projects = data.projects;
  // let projects_link = data.projects_link;
  let workshops = data.workshops;

  // Handle photo upload
  const handlePhotoUpload = (files) => {
    setData({
      ...data,
      contact: {
        ...data.contact,
        photoUrl: URL.createObjectURL(files[files.length - 1]),
      },
    });
  };

  const [skills, setSkills] = useState("");
  
  useEffect(() => {
    let temp = "";
    data.skills.map((item) => (temp = temp + item + ","));
    temp = temp.slice(0, -1);
    setSkills(temp);
  }, [data]);

  // Contact
  const handleContactChange = (e) => {
    setData({
      ...data,
      contact: {
        ...data.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Skills
  const handleSkillsUpdate = () => {
    var array = skills.split(",");
    setData({
      ...data,
      skills: array,
    });
  };

  // Add Row
  const addRow = (section, structure) => {
    let temp = section;
    temp.push(structure);
    setData({
      ...data,
      section: temp,
    });
  };

  // Remove Row
  const removeRow = (section, index) => {
    let temp = section;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      section: temp,
    });
  };

  // Handle Change
  const handleChange = (e, index, section, type) => {
    let temp = section;
    temp[index][type] = e.target.value;

    if (section === languages && type === "level") {
      if (e.target.value > 5) {
        temp[index][type] = 5;
      } else if (e.target.value < 1) {
        temp[index][type] = 1;
      } else {
        temp[index][type] = e.target.value;
      }
    }

    setData({
      ...data,
      section: temp,
    });
  };

  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleColorChange = (color) => {
    const backgroundWithReducedOpacity = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.2)`;
    console.log(color);
    setPickerColor(color);
    setColor({
      primary: color.hex,
      background: backgroundWithReducedOpacity,
      skills: backgroundWithReducedOpacity,
    });
    // setColor(newColor.rgb);
  };

  const styles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: color.primary,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  // State for current step
  const [activeStep, setActiveStep] = useState(0);

  const icons = {
    1: <AccountCircleIcon />,
    2: <LanguageIcon />,
    3: <SchoolIcon />,
    4: <BusinessCenterIcon />,
    5: <CardMembershipIcon />,
  };

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "primary" ? theme.palette.grey[800] : "#eaeaf0", //change dark to primary
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "primary" ? theme.palette.grey[700] : "#ccc", //change dark to primary
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  const steps = [
    "Basic Info",
    "Skills",
    "Education",
    "Experience",
    "Certifications",
  ];
  // Function to handle next step
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  // Function to handle previous step
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const isLastStep = activeStep === steps.length - 1;

 

  const handleRegister = () => {
    data.skills = [{ Skill: skills }];
   data.objective=[{Objectives: objective}];
  //  data.contact = [data.contact];
  data.name = name;
  data.photoUrl = photoUrl;
  data.location = location;
  data.phone = phone;
  data.email = email;
  data.linkedin = linkedin;
  data.github = github;
  data.password = password;
  
    console.log(data, "datadata");
    fetch("https://localhost:7138/api/Contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("Registration successful", response);
      })
      .catch((error) => {
        console.error("Error occurred during registration:", error);
      });
  };

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  function handlePasswordValidation(event) {
    const { name, value } = event.target;
    let passwordError = "";
    let confirmPasswordError = "";

    if (name === "password") {
      if (value.length < 8) {
        passwordError = "Password should be at least 8 characters long";
      }

      if (!/\d/.test(value)) {
        passwordError =
          "Password should contain at  least 8 characters & one number";
      }
    } else if (name === "confirmPassword") {
      if (value !== password) {
        confirmPasswordError = "Confirm password does not match the password";
      }
    }

    // Update the component state with the error messages
    setPasswordError(passwordError);
    setConfirmPasswordError(confirmPasswordError);
  }

  return (
    <Box className="form-container">
      <Paper elevation={0}>
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          <Grid item xs={4}>
            <div className="colorSchemeContainer">
              <p>Select Resume Color : </p>
              <div className="colorContainer">
                {preset.map((item, key) => (
                  <div
                    key={key}
                    className="colorScheme"
                    style={{ backgroundColor: `${item.primary}` }}
                  ></div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <div style={styles.swatch} onClick={handleClick}>
                <div style={styles.color} />
              </div>
              {displayColorPicker && (
                <div style={styles.popover}>
                  <div style={styles.cover} onClick={handleClose} />
                  <SketchPicker
                    color={pickerColor}
                    onChange={handleColorChange}
                  />
                </div>
              )}
            </div>
          </Grid>
          <Grid item xs={5}>
            <div style={{ display: "flex" }}>
              <div>
                <Files
                  className="files-dropzone file-btn"
                  onChange={(files) => handlePhotoUpload(files)}
                  onError={(err) => console.log(err)}
                  accepts={[
                    "image/jpeg",
                    "image/jpg",
                    "image/png",
                    "image/svg",
                  ]}
                  multiple
                  maxFiles={100}
                  maxFileSize={10000000}
                  minFileSize={0}
                  clickable
                >
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    sx={{ m: 2 }}
                  >
                    Upload Photo
                  </Button>
                </Files>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Stack sx={{ width: "90%", mt: 1 }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon} icon={index + 1}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>

      {activeStep === 0 && (
      

       

        <div className="section contact">
          <Typography
            style={{ marginTop: "20px", marginBottom: "20px" }}
            variant="h5"
            className="heading"
          >
            Contact
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                type="text"
                name="name"
                value={name}
                label="Name"
                size="small"
                onChange={handleContactChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                name="photoUrl"
                value={photoUrl}
                label="Photo URL"
                size="small"
                onChange={handleContactChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={6}>
              <TextField
                type="text"
                name="location"
                value={location}
                label="Location"
                size="small"
                onChange={handleContactChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                name="phone"
                label="Phone"
                size="small"
                value={phone}
                onChange={handleContactChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={6}>
              <TextField
                type="text"
                name="email"
                label="Email"
                size="small"
                value={email}
                onChange={handleContactChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                name="linkedin"
                label="Linkedin"
                size="small"
                value={linkedin}
                onChange={handleContactChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={6}>
              <TextField
                type="text"
                name="github"
                label="Github"
                size="small"
                value={github}
                onChange={handleContactChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="password"
                name="password"
                label="Password"
                size="small"
                value={password}
                onChange={handleContactChange}
                onKeyUp={handlePasswordValidation}
              />
              {/* Render password error message if needed */}
              {passwordError && (
                <Typography
                  // variant="p"
                  style={{ color: "red" }}
                  className="error"
                >
                  {passwordError}
                </Typography>
              )}
            </Grid>
          </Grid>

          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={6}>
              <TextField
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                size="small"
                value={confirmPassword}
                onChange={handleContactChange}
                onKeyUp={handlePasswordValidation}
              />
              {/* Render confirm password error message if needed */}
              {confirmPasswordError && (
                <Typography
                  // variant="p"
                  style={{ color: "red" }}
                  className="error"
                >
                  {confirmPasswordError}
                </Typography>
              )}
            </Grid>
          </Grid>
        </div>
      )}

      {activeStep === 1 && (
      
        <div className="section skills">
          <Box
            sx={{ display: "flex", marginBottom: "10px", marginTop: "10px" }}
          >
            <Typography variant="h5" sx={{ marginRight: "20px" }}>
              Skills
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={11}>
              <TextField
                name="skills"
                multiline
                rows={3}
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="small"
                onClick={handleSkillsUpdate}
              >
                Done
              </Button>
            </Grid>
          </Grid>

          <Box
            sx={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}
          >
            <Typography variant="h5" sx={{ marginRight: "20px" }}>
              Languages
            </Typography>
          </Box>

          {languages.map((item, index) => (
            <div key={index}>
              <Box className="row" sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="language"
                      label="Language"
                      value={item.language}
                      size="small"
                      onChange={(e) =>
                        handleChange(e, index, languages, "language")
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="number"
                      name="level"
                      label="Level"
                      value={item.level}
                      size="small"
                      onChange={(e) =>
                        handleChange(e, index, languages, "level")
                      }
                    />
                  </Grid>
                </Grid>
              </Box>

              <Button
                variant="contained"
                size="small"
                color="error"
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                onClick={() => removeRow(languages, index)}
              >
                Remove
              </Button>
            </div>
          ))}

          <Button
            variant="contained"
            size="small"
            color="primary"
            sx={{ marginTop: "10px" }}
            onClick={() => addRow(languages, { language: "", level: "" })}
          >
            Add
          </Button>
        </div>
      )}

      {activeStep === 2 && (
        
        <div className="section objective">
          <Typography
            style={{ marginTop: "20px", marginBottom: "20px" }}
            variant="h5"
            className="heading"
          >
            Objective
          </Typography>
          <TextField
            name="objective"
            multiline
            rows={5}
            fullWidth
            value={data.objective}
            onChange={(e) => setData({ ...data, objective: e.target.value })}
          />

          <Typography
            style={{ marginTop: "20px", marginBottom: "20px" }}
            variant="h5"
            className="heading"
          >
            Education
          </Typography>
          {data.education.map((item, index) => (
            <div className="row" key={index}>
              <Box className="item">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="year"
                      label="Year"
                      size="small"
                      value={item.year}
                      onChange={(e) =>
                        handleChange(e, index, data.education, "year")
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="course"
                      label="Course/Degree"
                      size="small"
                      value={item.course}
                      // style={{ marginTop: "10px", marginBottom: "10px" }}
                      onChange={(e) =>
                        handleChange(e, index, data.education, "course")
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="institution"
                      label="School/College"
                      size="small"
                      value={item.institution}
                      onChange={(e) =>
                        handleChange(e, index, data.education, "institution")
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="university"
                      label="Board/University"
                      size="small"
                      value={item.university}
                      // style={{ marginTop: "10px", marginBottom: "10px" }}
                      onChange={(e) =>
                        handleChange(e, index, data.education, "university")
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="number"
                      name="percentage"
                      label="Percentage/GPA"
                      size="small"
                      value={item.percentage}
                      onChange={(e) =>
                        handleChange(e, index, data.education, "percentage")
                      }
                    />
                  </Grid>
                </Grid>
              </Box>

              <Button
                variant="contained"
                size="small"
                color="error"
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                onClick={() => removeRow(data.education, index)}
              >
                Remove
              </Button>
            </div>
          ))}

          <Button
            variant="contained"
            size="small"
            color="primary"
            sx={{ marginTop: "10px" }}
            onClick={() =>
              addRow(education, {
                year: "",
                course: "",
                institution: "",
                university: "",
                percentage: "",
              })
            }
          >
            Add
          </Button>
        </div>
      )}

      {activeStep === 3 && (
      
        <div className="section experience">
          <Typography
            style={{ marginTop: "20px", marginBottom: "20px" }}
            variant="h5"
            className="heading"
          >
            Experience
          </Typography>
          {data.experience.map((item, index) => (
            <div className="row" key={index}>
              <Box className="item">
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="year"
                      label="Year"
                      size="small"
                      value={item.year}
                      onChange={(e) =>
                        handleChange(e, index, data.experience, "year")
                      }
                    />

                    <TextField
                      type="text"
                      name="position"
                      label="Role/Position"
                      value={item.position}
                      size="small"
                      style={{ marginTop: "10px" }}
                      onChange={(e) =>
                        handleChange(e, index, data.experience, "position")
                      }
                    />

                    <TextField
                      type="text"
                      name="company"
                      label="Company"
                      value={item.company}
                      size="small"
                      style={{ marginTop: "10px" }}
                      onChange={(e) =>
                        handleChange(e, index, data.experience, "company")
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="description"
                      multiline
                      rows={5}
                      label="Description"
                      size="small"
                      value={item.description}
                      onChange={(e) =>
                        handleChange(e, index, data.experience, "description")
                      }
                    />
                  </Grid>
                </Grid>
              </Box>

              <Button
                variant="contained"
                size="small"
                color="error"
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                onClick={() => removeRow(data.experience, index)}
              >
                Remove
              </Button>
            </div>
          ))}

          <Button
            variant="contained"
            size="small"
            color="primary"
            sx={{ marginTop: "10px" }}
            onClick={() =>
              addRow(data.experience, {
                year: "",
                company: "",
                position: "",
                description: "",
              })
            }
          >
            Add
          </Button>

          <Typography
            style={{ marginTop: "20px", marginBottom: "20px" }}
            variant="h5"
            className="heading"
          >
            Workshops
          </Typography>
          {data.workshops.map((item, index) => (
            <div className="row" key={index}>
              <Box className="item">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="year"
                      label="Year"
                      value={item.year}
                      size="small"
                      // style={{ marginTop: "10px", marginBottom: "10px" }}
                      onChange={(e) =>
                        handleChange(e, index, data.workshops, "year")
                      }
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      name="description"
                      multiline
                      rows={5}
                      label="Description"
                      value={item.description}
                      fullWidth
                      onChange={(e) =>
                        handleChange(e, index, data.workshops, "description")
                      }
                    />
                  </Grid>
                </Grid>
              </Box>

              <Button
                variant="contained"
                size="small"
                color="error"
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                onClick={() => removeRow(data.workshops, index)}
              >
                Remove
              </Button>
            </div>
          ))}

          <Button
            variant="contained"
            size="small"
            color="primary"
            sx={{ marginTop: "10px" }}
            onClick={() =>
              addRow(data.workshops, { year: "", description: "" })
            }
          >
            Add
          </Button>
        </div>
      )}

      {activeStep === 4 && (
       
        <div className="section certifications">
          <Typography
            style={{ marginTop: "20px", marginBottom: "20px" }}
            variant="h5"
            className="heading"
          >
            Certifications
          </Typography>
          {data.certifications.map((item, index) => (
            <div className="row" key={index}>
              <Box className="item">
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="year"
                      label="Year"
                      value={item.year}
                      size="small"
                      onChange={(e) =>
                        handleChange(e, index, data.certifications, "year")
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="course"
                      label="Course"
                      value={item.course}
                      size="small"
                      onChange={(e) =>
                        handleChange(e, index, data.certifications, "course")
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="institution"
                      label="Institution"
                      value={item.institution}
                      size="small"
                      onChange={(e) =>
                        handleChange(
                          e,
                          index,
                          data.certifications,
                          "institution"
                        )
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="score"
                      label="Score"
                      value={item.score}
                      size="small"
                      onChange={(e) =>
                        handleChange(e, index, data.certifications, "score")
                      }
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      name="description"
                      multiline
                      rows={5}
                      fullWidth
                      label="Description"
                      value={item.description}
                      onChange={(e) =>
                        handleChange(
                          e,
                          index,
                          data.certifications,
                          "description"
                        )
                      }
                    />
                  </Grid>
                </Grid>
              </Box>

              <Button
                variant="contained"
                size="small"
                color="error"
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                onClick={() => removeRow(data.certifications, index)}
              >
                Remove
              </Button>
            </div>
          ))}

          <Button
            variant="contained"
            size="small"
            color="primary"
            sx={{ marginTop: "10px", marginBottom: "10px" }}
            onClick={() =>
              addRow(data.certifications, {
                year: "",
                institution: "",
                course: "",
                score: "",
                description: "",
              })
            }
          >
            Add
          </Button>

          <Typography
            style={{ marginTop: "20px", marginBottom: "20px" }}
            variant="h5"
            className="heading"
          >
            Projects
          </Typography>
          {data.projects.map((item, index) => (
            <div className="row" key={index}>
              <Box className="item">
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="title"
                      label="Title"
                      value={item.title}
                      size="small"
                      onChange={(e) =>
                        handleChange(e, index, data.projects, "title")
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="link"
                      label="Project URL"
                      value={item.link}
                      size="small"
                      onChange={(e) =>
                        handleChange(e, index, data.projects, "link")
                      }
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      name="description"
                      multiline
                      rows={5}
                      fullWidth
                      label="Description"
                      value={item.description}
                      onChange={(e) =>
                        handleChange(e, index, data.projects, "description")
                      }
                    />
                  </Grid>
                </Grid>
              </Box>

              <Button
                variant="contained"
                size="small"
                color="error"
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                onClick={() => removeRow(data.projects, index)}
              >
                Remove
              </Button>
            </div>
          ))}

          <Button
            variant="contained"
            size="small"
            color="primary"
            // sx={{ marginTop: "10px", marginBottom: "10px" }}
            onClick={() =>
              addRow(data.projects, {
                title: "",
                link: "",
                description: "",
              })
            }
          >
            Add
          </Button>
        </div>
      )}

      {/* Step navigation buttons */}

      <Stack
        direction="row"
        justifyContent="center"
        mt={4}
        alignItems="center"
        spacing={2}
      >
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="contained"
        >
          Back
        </Button>
        {isLastStep ? (
          <Button variant="contained" color="primary" onClick={handleRegister}>
            Register
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default StepperSignup;
