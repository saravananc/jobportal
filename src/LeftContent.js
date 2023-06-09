import React from 'react';
import Contact from '../src/components/sections/Contact';
import Skills from '../src/components/sections/Skills';
import Languages from '../src/components/sections/Languages';
// import References from '../src/components/sections/References';

const LeftContent = ({ data, color }) => {

  console.log(color);

  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='left-content' style={{ backgroundColor: `${color.background}` }}>
      <Contact data={data} color={color} />
      {check(data.skills) && <Skills data={data} color={color} />}
      {check(data.languages) && <Languages data={data} color={color} />}
      {/* {check(data.references) && <References data={data} color={color} />} */}
    </div>
  );
};

export default LeftContent;
