import React from 'react';
import './OurTeam.scss';

import GradientBox from './../../components/GradientBox/GradientBox';

import TeamCategory from '../../components/TeamCategory/TeamCategory';

function OurTeam() {
  return (
    <div className="our-team__container">
      <div className="gradient  gradient--1 gradient-team">
        <GradientBox></GradientBox>
      </div>
      <div className="gradient gradient--2 gradient-team">
        <GradientBox></GradientBox>
      </div>
      <div className="page-wrapper">
        <div className="page-title">
          <div className="title-text">Our Team</div>
        </div>
        <div className="TC">
        <TeamCategory />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
