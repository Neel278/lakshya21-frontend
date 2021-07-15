import React from 'react';
import { Link } from 'react-router-dom';
import GradientBox from './../../components/GradientBox/GradientBox';
import img from './../../Images/Logo - With doodles.png';
import './About.scss';

function About() {
  return (
    <div className="about">
      <div className="gradient gradient--1">
        <GradientBox></GradientBox>
      </div>
      <div className="gradient gradient--2">
        <GradientBox></GradientBox>
      </div>
      <div className="about__container">
        <div className="about__left">
          <h1 className="about__heading">About Us</h1>

          <p className="about__text--1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lakshya
            is an only National level Edu-Technical festival of L.D. College of
            Engineering which is held every year since 2014. Every year the fest
            is based on unique and different theme and a main event is organised
            in accordance to it. Through our theme we try to bring out something
            unique that creates a change in assertive and constructive manner.
          </p>

          <p className="about__text--2">
            This year Lakshya 2021 is based on the theme named "PERCEPTION". The
            fest is scheduled from 3rd August to 7th August.
          </p>

          <p className="about__text--3">
            Our theme aims to show the evolution in the industries and
            technologies, which is a result of critical thinking. We have
            witnessed some of the revolutionary changes in all the sectors like
            technology, automation, industrial, research, etc, which was the
            outcome of brainstorming over the years. Even small changes in the
            prospect of any ideology can bring unprecedented advancement and
            could contribute towards futuristic development.
          </p>

          <p className="about__text--4">
            Innovation is achieved by overcoming the conventional thought
            process which has helped us in the past. Having said that, it will
            help us to accelerate in the future as well. To persist in this
            advancing world, we need to shape our thoughts progressively.
          </p>
          <div className="about__btn">
            <Link className="about__events" to="/events">
              See Events
            </Link>

            <Link className="about__contact" to="/contact">
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
