import React from 'react';
import { Link } from 'react-router-dom';

import './HeroBox.scss';

function HeroBox() {
  return (
    <div id="hero" className="hero-box">
      <h1 className="hero-box__title">Lakshya Fest 2021</h1>
      <h3 className="hero-box__power">
        Powered By <br />
        <Link
          to={{
            pathname: 'https://allevents.in/',
          }}
          target="_blank"
          className="hero-box__link"
        >
          AllEvents.in
        </Link>
      </h3>
      <h2 className="hero-box__sub-title">10-08-2021 To 14-08-2021</h2>
      <h3 className="hero-box__power">
        <i>Powered By </i>
        <a
          href="https://allevents.in/"
          target="_blank"
          className="hero-box__link"
        >
          allevents.in
        </a>
      </h3>

      <div className="hero-box__button-box">
        <Link to="/events" className="hero-box__button hero-box__button--1">
          Participate Now
        </Link>
        <Link to="/about" className="hero-box__button hero-box__button--2">
          About Us
        </Link>
      </div>
    </div>
  );
}

export default HeroBox;
