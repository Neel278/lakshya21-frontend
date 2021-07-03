import React, { useState } from 'react';
import './OurTeam.scss';
import Particle from 'react-particles-js';
import TeamCategory from '../../components/TeamCategory/TeamCategory';
import particlesConfig from '../../SiteData/particlesConfig.json';

function OurTeam() {
  return (
    <>
      <div className="container">
        <div className="page-wrapper">
          <div className="page-title">
            <div className="title-text">Our Team</div>
            {/* <div className="underline"></div> */}
          </div>
          <TeamCategory className="carousel" />
        </div>
      </div>
      {/* <Particle params={particlesConfig} className="particles-container" /> */}
    </>
  );
}

export default OurTeam;
