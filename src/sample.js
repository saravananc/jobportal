import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: ownerState.active ? '#fff' : '#888',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: ownerState.active
    ? 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
    : '',
  boxShadow: ownerState.active ? '0 4px 10px 0 rgba(0,0,0,.25)' : '',
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <AccountCircleIcon />,
    2: <LanguageIcon />,
    3: <SchoolIcon />,
    4: <BusinessCenterIcon />,
    5: <CardMembershipIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = ['Basic Info', 'Skills', 'Education', 'Experience', 'Certifications'];

export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Stack sx={{ width: '90%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              optional={index === activeStep ? (
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    {/* <Button onClick={handleNext} variant="contained" color="primary">
                      Next
                    </Button> */}
                  </Grid>
                </Grid>
              ) : null}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Button disabled={activeStep === 0} onClick={handleBack} variant="contained">
            Back
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={handleNext} variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
