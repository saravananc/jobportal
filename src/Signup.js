import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; // Define the steps of the form

const Signup = () => {
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
  const [openDialog, setOpenDialog] = useState(false); // State for controlling the dialog

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
        // You can handle the API response here (e.g., display success message, redirect, etc.)
        // For now, we will display a "Thank you" message
        setOpenDialog(true); // Open the dialog to view the resume
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

  const handleViewResume = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    
    <>
   <Container maxWidth="sm" sx={{ bgcolor: '#cfe8fc', textAlign:"center",mt:5 }}>
   <Typography variant="h3" gutterBottom>
       Registration Form
      </Typography>
      </Container>


    <Container maxWidth="sm" sx={{mt:5}}>
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
              {activeStep === steps.length - 1 && (
                <Button variant="outlined" color="primary" onClick={handleViewResume}>
                  View Resume
                </Button>
              )}
            </div>
          </>
        )}
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md">
        <DialogTitle>Your Resume</DialogTitle>
        <DialogContent>
          {/* Display the form data as resume format */}
          <Typography variant="h6">Personal Information</Typography>
          <Typography>
            Name: {formData.firstName} {formData.lastName}
          </Typography>
          <Typography>Company: {formData.companyName}</Typography>
          <Typography>Designation: {formData.designation}</Typography>
          {/* Add more fields based on your resume format */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    </>
  );
};

export default Signup;
