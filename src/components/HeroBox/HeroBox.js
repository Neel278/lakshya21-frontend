import React from 'react';

import './HeroBox.scss';

function HeroBox() {
  return (
    <div className="hero-box">
      <button className="hero-box__button hero-box__button--1">Get Started</button>
      <button className="hero-box__button hero-box__button--2">About Us</button>
    </div>
  );
}

export default HeroBox;
