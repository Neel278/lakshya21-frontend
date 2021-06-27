import React from 'react';
import { Link } from 'react-router-dom';

import img from './../../Images/Logo - With doodles.png';
import './About.scss';

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__left">
          <h1 className="about__heading">About Us</h1>

          <p className="about__text--1">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt
          </p>

          <p className="about__text--2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi
            ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            inpeku culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="about__text--3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium poeyi doloremque laudantium, totam rem aperiam, eaque
            ipsa quae apsb illo inventore veritatis et quasi architecto beiatae
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, seprid quia non numquam eius modi tempora incidunt
            ut labore et dolore magnam aliqueam quaerat voluptatem.
          </p>
          <div className="about__btn">
            <Link className="about__events" to="/">
              See Events
            </Link>

            <Link className="about__contact" to="/">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="about__right">
          <img src={img} alt="" className="about__logo" />
        </div>
      </div>
    </div>
  );
}

export default About;
