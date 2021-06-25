import React from 'react';
import './OurTeam.scss';

import GradientBox from './../../components/GradientBox/GradientBox';

import TeamCategory from '../../components/TeamCategory/TeamCategory';

function OurTeam() {
  // const [button, setButton] = useState([]);

  // const handlePeople = (button) => {
  //   const filteredData = menuItem.filter((item) => item.team === button);
  //   setMenuItem(filteredData);
  // };

  return (
    <div className="container">
      <div className="gradient gradient--1">
        <GradientBox></GradientBox>
      </div>
      <div className="gradient gradient--2">
        <GradientBox></GradientBox>
      </div>
      <div className="page-wrapper">
        <div className="page-title">
          <div className="title-text">Our Team</div>
          {/* <div className="underline"></div> */}
        </div>
        <TeamCategory className="" />
      </div>
    </div>
  );
}

export default OurTeam;
