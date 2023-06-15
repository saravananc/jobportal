import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useReactToPrint } from 'react-to-print';

import '../src/styles/App.scss';


import jsonData from './data.json';
import StepperSignup from './StepperSignup';
import ResumeSignup from './ResumeSignup';
import { Box, Typography } from '@mui/material';

const Signup = () => {
  const componentRef = useRef();
  const [data, setData] = useState();
  const [preset, setPreset] = useState([
    { primary: '#009688', background: '#ebf5f4', skills: '#e5f4f3' },
    { primary: '#2196f3', background: '#e8f4fe', skills: '#e2f2ff' },
    { primary: '#263238', background: '#f0f0f0', skills: '#e0e0e0' },
    { primary: '#3f51b5', background: '#ebedf7', skills: '#e1e3f8' },
  ]);

  const [color, setColor] = useState({
    primary: '#009688',
    background: '#e5f4f3',
    skills: '#e5f4f3',
  });

  useEffect(() => {
    setData(jsonData);
  }, []);


  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='mainContent' >
     
<Typography sx={{ textAlign: "center",textDecoration: 'underline'}}>
  <Box sx={{ backgroundColor: "#E6E6FA", display: "inline", fontSize:"30px" }}>
    Signup and Resume Builder
  </Box>
</Typography>


      {data !== undefined && (
        <Fragment>
          <Box sx={{height:"100vh"}}>
          <div className='left'>
         
            <StepperSignup data={data} setData={setData} preset={preset} setColor={setColor} color={color}/>
          
          </div>
          <div className='right' ref={componentRef}>
            <ResumeSignup  data={data} color={color} />
          </div>

          <button className='printBtn' onClick={handlePrint}>
            Download / Print
          </button>
          </Box>
        </Fragment>
      )}
    </div>
  );
};

export default Signup;
