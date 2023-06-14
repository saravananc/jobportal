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
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
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
  // Function to handle register button click
  const handleRegister = () => {
    console.log(data);
  };


 
   
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
    
  
    function handlePasswordValidation(event) {
      const { name, value } = event.target;
      let passwordError = '';
      let confirmPasswordError = '';
  
      if (name === 'password') {
        if (value.length < 8) {
          passwordError = 'Password should be at least 8 characters long';
        }
  
        // Perform additional password validation checks
        // Example: Check if the password contains at least one number
        if (!/\d/.test(value)) {
          passwordError = 'Password should contain at least 8 characters & one number';
        }
      } else if (name === 'confirmPassword') {
        if (value !== password) {
          confirmPasswordError = 'Confirm password does not match the password';
        }
      }
  
      // Update the component state with the error messages
      setPasswordError(passwordError);
      setConfirmPasswordError(confirmPasswordError);
    }
  return (
    <Paper elevation={2} className="form-container">
      <Paper elevation={0}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={5}>
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
          <Grid item xs={2}>
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
          <h3 className="heading">Contact</h3>
          <p className="label">Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleContactChange}
          />
          <p className="label">Photo URL</p>
          <input
            type="text"
            name="photoUrl"
            value={photoUrl}
            onChange={handleContactChange}
          />
          <p className="label">Location</p>
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleContactChange}
          />
          <p className="label">Phone</p>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleContactChange}
          />
          <p className="label">Email</p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleContactChange}
          />
          <p className="label">LinkedIn</p>
          <input
            type="text"
            name="linkedin"
            value={linkedin}
            onChange={handleContactChange}
          />
          <p className="label">Github</p>
          <input
            type="text"
            name="github"
            value={github}
            onChange={handleContactChange}
          />
         
          <p className="label">Password</p>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleContactChange}
        onKeyUp={handlePasswordValidation}
      />
      {passwordError && <p style={{color:"red"}} className="error">{passwordError}</p>}

      <p className="label">Confirm Password</p>
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleContactChange}
        onKeyUp={handlePasswordValidation}
      />
      {confirmPasswordError && <p style={{color:"red"}} className="error">{confirmPasswordError}</p>}
    </div>
      )}

      {activeStep === 1 && (
        <div className="section skills">
          <div style={{ display: "flex" }}>
            <h3 className="heading">Skills</h3>
          </div>
          <textarea
            name="skills"
            cols="50"
            rows="5"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          ></textarea>

          <button
            className="btn btn-sm btn-primary"
            onClick={handleSkillsUpdate}
          >
            Done
          </button>

          <h3 className="heading">Languages</h3>
          {languages.map((item, index) => {
            return (
              <div>
                <Box className="row" key={index} sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <input
                        type="text"
                        name="language"
                        placeholder="Language"
                        value={item.language}
                        onChange={(e) =>
                          handleChange(e, index, languages, "language")
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <input
                        type="number"
                        name="level"
                        placeholder="Level"
                        value={item.level}
                        onChange={(e) =>
                          handleChange(e, index, languages, "level")
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>

                <button
                  className="btn btn-sm btn-danger"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  onClick={() => removeRow(languages, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-sm btn-dark"
            style={{ marginTop: "10px" }}
            onClick={() => addRow(languages, { language: "", level: "" })}
          >
            Add
          </button>
        </div>
      )}

      {activeStep === 2 && (
        <div className="section objective">
          <h3 className="heading">Objective</h3>
          <textarea
            name="objective"
            cols="50"
            rows="5"
            value={objective}
            onChange={(e) => setData({ ...data, objective: e.target.value })}
          ></textarea>

          <h3 className="heading">Education</h3>
          {education.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="item">
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    onChange={(e) => handleChange(e, index, education, "year")}
                  />
                  <input
                    type="text"
                    name="course"
                    placeholder="Course/Degree"
                    value={item.course}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    onChange={(e) =>
                      handleChange(e, index, education, "course")
                    }
                  />
                  <input
                    type="text"
                    name="institution"
                    placeholder="School/College"
                    value={item.institution}
                    onChange={(e) =>
                      handleChange(e, index, education, "institution")
                    }
                  />
                  <input
                    type="text"
                    name="university"
                    placeholder="Board/University"
                    value={item.university}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    onChange={(e) =>
                      handleChange(e, index, education, "university")
                    }
                  />
                  <input
                    type="number"
                    name="percentage"
                    placeholder="Percentage/GPA"
                    value={item.percentage}
                    onChange={(e) =>
                      handleChange(e, index, education, "percentage")
                    }
                  />
                </div>

                <button
                  className="btn btn-sm btn-danger"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  onClick={() => removeRow(education, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-sm btn-dark"
            style={{ marginTop: "10px", marginBottom: "10px" }}
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
          </button>
        </div>
      )}

      {activeStep === 3 && (
        <div className="section experience">
          <h3 className="heading">Experience</h3>
          {experience.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="item">
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    onChange={(e) => handleChange(e, index, experience, "year")}
                  />
                  <input
                    type="text"
                    name="position"
                    placeholder="Role/Position"
                    value={item.position}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    onChange={(e) =>
                      handleChange(e, index, experience, "position")
                    }
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={item.company}
                    onChange={(e) =>
                      handleChange(e, index, experience, "company")
                    }
                  />
                  <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Description"
                    value={item.description}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    onChange={(e) =>
                      handleChange(e, index, experience, "description")
                    }
                  />
                </div>

                <button
                  className="btn btn-sm btn-danger"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  onClick={() => removeRow(experience, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-sm btn-dark"
            style={{ marginTop: "10px" }}
            onClick={() =>
              addRow(experience, {
                year: "",
                company: "",
                position: "",
                description: "",
              })
            }
          >
            Add
          </button>

          <h3 className="heading">Workshops</h3>
          {workshops.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="item">
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    onChange={(e) => handleChange(e, index, workshops, "year")}
                  />
                  <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) =>
                      handleChange(e, index, workshops, "description")
                    }
                  />
                </div>

                <button
                  className="btn btn-sm btn-danger"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  onClick={() => removeRow(workshops, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-sm btn-dark"
            onClick={() => addRow(workshops, { year: "", description: "" })}
          >
            Add
          </button>
        </div>
      )}

      {activeStep === 4 && (
        <div className="section certifications">
          <h3 className="heading">Certifications</h3>
          {certifications.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="item">
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "year")
                    }
                  />
                  <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={item.course}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "course")
                    }
                  />
                  <input
                    type="text"
                    name="institution"
                    placeholder="Institution"
                    value={item.institution}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "institution")
                    }
                  />
                  <input
                    type="text"
                    name="score"
                    placeholder="Score"
                    value={item.score}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "score")
                    }
                  />
                  <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "description")
                    }
                  />
                </div>

                <button
                  className="btn btn-sm btn-danger"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  onClick={(e) => removeRow(certifications, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-sm btn-dark"
            style={{ marginTop: "10px", marginBottom: "10px" }}
            onClick={() =>
              addRow(certifications, {
                year: "",
                institution: "",
                course: "",
                description: "",
              })
            }
          >
            Add
          </button>
          <h3 className="heading">Projects</h3>

          {projects.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="item">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={item.title}
                    onChange={(e) => handleChange(e, index, projects, "title")}
                  />
                  <input
                    type="text"
                    name="link"
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    placeholder="Project URL"
                    value={item.link}
                    onChange={(e) => handleChange(e, index, projects, "link")}
                  />
                  <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) =>
                      handleChange(e, index, projects, "description")
                    }
                  />
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                  onClick={() => removeRow(projects, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-sm btn-dark"
            style={{ marginTop: "10px", marginBottom: "10px" }}
            onClick={() =>
              addRow(projects, { title: "", link: "", description: "" })
            }
          >
            Add
          </button>
          {/* <input
            type="text"
            name="projects_link"
            placeholder="URL of More Projects"
            value={projects_link}
            onChange={(e) =>
              setData({ ...data, projects_link: e.target.value })
            }
          /> */}
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
    </Paper>
  );
};

export default StepperSignup;
