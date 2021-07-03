import React from 'react';
import './OurTeam.scss';

import GradientBox from './../../components/GradientBox/GradientBox';

import TeamCategory from '../../components/TeamCategory/TeamCategory';
import particlesConfig from '../../SiteData/particlesConfig.json';

function OurTeam() {
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
        <TeamCategory />
      </div>
      {/* <Particle params={particlesConfig} className="particles-container" /> */}
    </div>
  );
}

export default OurTeam;
