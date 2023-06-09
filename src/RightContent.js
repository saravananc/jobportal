import React from 'react';
import Objective from '../src/components/sections/Objective';
import Education from '../src/components/sections/Education';
import Experience from '../src/components/sections/Experience';
import Certifications from '../src/components/sections/Certifications';
import Projects from '../src/components/sections/Projects';
import Workshops from '../src/components/sections/Workshops';

const RightContent = ({ data, color }) => {
  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='right-content'>
      {check(data.objective) && <Objective data={data} color={color} />}
      {check(data.education) && <Education data={data} color={color} />}
      {check(data.experience) && <Experience data={data} color={color} />}
      {check(data.certifications) && <Certifications data={data} color={color} />}
      {check(data.projects) && <Projects data={data} color={color} />}
      {check(data.workshops) && <Workshops data={data} color={color} />}
    </div>
  );
};

export default RightContent;
