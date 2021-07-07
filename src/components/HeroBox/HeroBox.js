import React from 'react';

import './HeroBox.scss';

function HeroBox() {
  return (
    <div id="hero" className="hero-box">
      <h1 className="hero-box__title">Lakshya Fest 2021</h1>
      <h2 className="hero-box__sub-title">03-08-2021 To 08-08-2021</h2>
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
