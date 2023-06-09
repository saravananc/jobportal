import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import '../src/styles/Resume.scss';

const ResumeSignup = (props) => {
  return (
    <div className='resume' id='resume'>
      <LeftContent data={props.data} color={props.color} />
      <RightContent data={props.data} color={props.color} />
    </div>
  );
};

export default ResumeSignup;
