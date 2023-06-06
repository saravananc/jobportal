import React, { useState } from 'react';
import '../src/App.css';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';


import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  TextField,

} from '@mui/material';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; // Define the steps of the form
const Signup=()=>
{

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Initial form data state
    firstName: '',
    lastName: '',
    companyName: '',
    designation: '',
    yearsOfExperience: '',
    qualification: '',
    email: '',
    phoneNumber: '',
    websiteLink: '',
    language: '',
    careerObjective: '',
    fathersName: '',
    mothersName: '',
    dateOfBirth: '',
    address: '',
    maritalStatus: '',
    gender: '',
    religion: '',
    bloodGroup: '',
    specialSkills: '',
    screen4Field1: '',
    screen4Field2: '',
    screen4Field3: '',
    screen5Field1: '',
    screen5Field2: '',
  });
 
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmit(); // Call handleSubmit function when reaching the last step
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    // Perform the POST API action here using the form data (formData)
    // Example code for performing a POST request using fetch:
    fetch('your-api-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('API response:', data);
        
      })
      .catch((error) => {
        console.error('API error:', error);
        // Handle any error that occurs during the API request
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Typography variant="h6">Step 1</Typography>
            <TextField name="firstName" label="First Name" value={formData.firstName} onChange={handleChange} />
            <TextField name="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} />
            <TextField name="companyName" label="Company Name" value={formData.companyName} onChange={handleChange} />
            <TextField name="designation" label="Designation" value={formData.designation} onChange={handleChange} />
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h6">Step 2</Typography>
            <TextField name="fathersName" label="Father's Name" value={formData.fathersName} onChange={handleChange} />
            <TextField name="mothersName" label="Mother's Name" value={formData.mothersName} onChange={handleChange} />
            <TextField name="dateOfBirth" label="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} />
            <TextField name="address" label="Address" value={formData.address} onChange={handleChange} />
            <TextField name="maritalStatus" label="Marital Status" value={formData.maritalStatus} onChange={handleChange} />
            <TextField name="gender" label="Gender" value={formData.gender} onChange={handleChange} />
            <TextField name="religion" label="Religion" value={formData.religion} onChange={handleChange} />
            <TextField name="bloodGroup" label="Blood Group" value={formData.bloodGroup} onChange={handleChange} />
            <TextField name="specialSkills" label="Special Skills" value={formData.specialSkills} onChange={handleChange} />
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h6">Step 3</Typography>
            <TextField
              name="yearsOfExperience"
              label="Years of Experience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
            />
            <TextField name="qualification" label="Qualification" value={formData.qualification} onChange={handleChange} />
            <TextField name="email" label="Email" value={formData.email} onChange={handleChange} />
            <TextField
              name="phoneNumber"
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <TextField name="websiteLink" label="Website Link" value={formData.websiteLink} onChange={handleChange} />
            <TextField name="language" label="Language" value={formData.language} onChange={handleChange} />
            <TextField
              name="careerObjective"
              label="Career Objective"
              value={formData.careerObjective}
              onChange={handleChange}
            />
          </>
        );
      case 3:
        return (
          <>
            <Typography variant="h6">Step 4</Typography>
            <TextField
              name="screen4Field1"
              label="Screen 4 Field 1"
              value={formData.screen4Field1}
              onChange={handleChange}
            />
            <TextField
              name="screen4Field2"
              label="Screen 4 Field 2"
              value={formData.screen4Field2}
              onChange={handleChange}
            />
            <TextField
              name="screen4Field3"
              label="Screen 4 Field 3"
              value={formData.screen4Field3}
              onChange={handleChange}
            />
          </>
        );
      case 4:
        return (
          <>
            <Typography variant="h6">Step 5</Typography>
            <TextField
              name="screen5Field1"
              label="Screen 5 Field 1"
              value={formData.screen5Field1}
              onChange={handleChange}
            />
            <TextField
              name="screen5Field2"
              label="Screen 5 Field 2"
              value={formData.screen5Field2}
              onChange={handleChange}
            />
          </>
        );
      default:
        return null;
    }
  };



 

  return(
    <>
      <Box >
      <Grid container spacing={1}>
        <Grid xs={6} md={6}>
          <Paper>
          <Container maxWidth="sm">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5">Thank you for signing up!</Typography>
          </>
        ) : (
          <>
            {renderStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Finish
                </Button>
              ) : (
                <Button variant="contained" color="primary" onClick={handleNext}>
                  Next
                </Button>
              )}
             
            </div>
          </>
        )}
      </div>

     
    </Container>
          </Paper>
        </Grid>
        <Grid xs={6} md={6}>
        <Paper>
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>

<div class="container">
  <div class="header">
    <div class="full-name">
      <span class="first-name">{formData.firstName} </span> 
      <span class="last-name">{formData.lastName}</span>
    </div>
    <div class="contact-info">
      <span class="email">Email: </span>
      <span class="email-val">john.doe@gmail.com</span>
      <span class="separator"></span>
      <span class="phone">Phone: </span>
      <span class="phone-val">111-222-3333</span>
    </div>
    
    <div class="about">
      <span class="position">Front-End Developer </span>
      <span class="desc">
        I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. 
      </span>
    </div>
  </div>
   <div class="details">
    <div class="section">
      <div class="section__title">Experience</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">KlowdBox</div>
            <div class="addr">San Fr, CA</div>
            <div class="duration">Jan 2011 - Feb 2015</div>
          </div>
          <div class="right">
            <div class="name">Fr developer</div>
            <div class="desc">did This and that</div>
          </div>
        </div>
                <div class="section__list-item">
          <div class="left">
            <div class="name">Akount</div>
            <div class="addr">San Monica, CA</div>
            <div class="duration">Jan 2011 - Feb 2015</div>
          </div>
          <div class="right">
            <div class="name">Fr developer</div>
            <div class="desc">did This and that</div>
          </div>
        </div>

      </div>
    </div>
    <div class="section">
      <div class="section__title">Education</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">Sample Institute of technology</div>
            <div class="addr">San Fr, CA</div>
            <div class="duration">Jan 2011 - Feb 2015</div>
          </div>
          <div class="right">
            <div class="name">Fr developer</div>
            <div class="desc">did This and that</div>
          </div>
        </div>
        <div class="section__list-item">
          <div class="left">
            <div class="name">Akount</div>
            <div class="addr">San Monica, CA</div>
            <div class="duration">Jan 2011 - Feb 2015</div>
          </div>
          <div class="right">
            <div class="name">Fr developer</div>
            <div class="desc">did This and that</div>
          </div>
        </div>

      </div>
      
  </div>
     <div class="section">
      <div class="section__title">Projects</div> 
       <div class="section__list">
         <div class="section__list-item">
           <div class="name">DSP</div>
           <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
         </div>
         
         <div class="section__list-item">
                    <div class="name">DSP</div>
           <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
           </div>
         </div>
       </div>
    </div>
     <div class="section">
       <div class="section__title">Skills</div>
       <div class="skills">
         <div class="skills__item">
           <div class="left"><div class="name">
             Javascript
             </div></div>
          
         </div>
         
       </div>
       <div class="skills__item">
           <div class="left"><div class="name">
             CSS</div></div>
          
         </div>
         
       </div>
     <div class="section">
     <div class="section__title">
       Interests
       </div>
       <div class="section__list">
         <div class="section__list-item">
                  Football, programming.
          </div>
       </div>
     </div>
     </div>
  </div>

          </Paper>
        </Grid>
        
      </Grid>
    </Box>
    </>
  );
}
export default Signup;