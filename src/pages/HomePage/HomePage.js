import React from 'react';

import './HomePage.scss';

import BgVideo from './../../components/BgVideo/BgVideo';
import HeroBox from './../../components/HeroBox/HeroBox';
import SponsoredBy from './../../components/SponsoredBy/SponsoredBy';

function HomePage() {
  return (
    <div className="home-page">
      <BgVideo></BgVideo>
      <HeroBox></HeroBox>
      <div className="home-page__sponsors container">
        <SponsoredBy></SponsoredBy>
      </div>
    </div>
  );
}

export default HomePage;
