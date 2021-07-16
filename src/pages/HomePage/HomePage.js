import React from 'react';

import './HomePage.scss';

import BgVideo from './../../components/BgVideo/BgVideo';
import HeroBox from './../../components/HeroBox/HeroBox';
import SponsoredBy from './../../components/SponsoredBy/SponsoredBy';
import GradientBox from './../../components/GradientBox/GradientBox';

function HomePage() {
  return (
    <div className="home-page__container">
      <div className="home-page__gradient gradient gradient--1">
        <GradientBox></GradientBox>
      </div>
      <div className="home-page__gradient gradient gradient--2">
        <GradientBox></GradientBox>
      </div>
      <div className="home-page">
        <BgVideo></BgVideo>
        <HeroBox></HeroBox>
        {/* <div className="home-page__sponsors container">
          <SponsoredBy></SponsoredBy>
        </div> */}
      </div>
    </div>
  );
}

export default HomePage;
