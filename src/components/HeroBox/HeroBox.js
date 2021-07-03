import React from 'react';

import './HeroBox.scss';

function HeroBox() {
  return (
    <div className="hero-box">
      <h1 className="hero-box__title">Lakshya 2021</h1>
      <div className="hero-box__button-box">
        <button className="hero-box__button hero-box__button--1">
          Get Started
        </button>
        <button className="hero-box__button hero-box__button--2">
          About Us
        </button>
      </div>
    </div>
  );
}

export default HeroBox;
