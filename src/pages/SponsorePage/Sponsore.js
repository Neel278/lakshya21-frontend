import React from 'react';
import './Sponsore.scss';

import SponsoreCard from '../../components/Cards/SponsorCard';
import GradientBox from '../../components/GradientBox/GradientBox';

import bbc from './../../Images/logo-bbc.webp';
import bi from './../../Images/logo-bi.webp';
import forbes from './../../Images/logo-forbes.webp';

function Sponsore() {
  return (
    <div className="sponsor__container">
      <div className="gradient gradient--1">
        <GradientBox></GradientBox>
      </div>
      <div className="gradient gradient--2">
        <GradientBox></GradientBox>
      </div>
      <div className="sponsore">
        <div className="sponsore__heading">
          <h1>Meet Our Sponsors</h1>
        </div>
        <div className="sponsore__heading">
          <h1>To be added soon...</h1>
        </div>
        {/*<SponsoreCard
          img={bbc}
          headline="sample headline"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto est similique quod praesentium fugit nulla eius, aperiam placeat modi minus adipisci, expedita totam assumenda ad, facere voluptatibus provident earum perspiciatis?"
        />

        <SponsoreCard
          img={bi}
          headline="sample headline"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto est similique quod praesentium fugit nulla eius, aperiam placeat modi minus adipisci, expedita totam assumenda ad, facere voluptatibus provident earum perspiciatis?"
        />

        <SponsoreCard
          img={forbes}
          headline="sample headline"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto est similique quod praesentium fugit nulla eius, aperiam placeat modi minus adipisci, expedita totam assumenda ad, facere voluptatibus provident earum perspiciatis?"
        />

        <div className="otherSponsore">
          <h1>Other Sponsors</h1>

          <div className="otherSponsore__logo">
            <img src={bbc} alt="" className="otherSponsore__img" />
            <img src={bi} alt="" className="otherSponsore__img" />
            <img src={forbes} alt="" className="otherSponsore__img" />
            <img src={bbc} alt="" className="otherSponsore__img" />
          </div>

          <div className="otherSponsore__logo">
            <img src={bi} alt="" className="otherSponsore__img" />
            <img src={forbes} alt="" className="otherSponsore__img" />
            <img src={bbc} alt="" className="otherSponsore__img" />
          </div>

          <div className="otherSponsore__logo">
            <img src={bbc} alt="" className="otherSponsore__img" />
            <img src={bi} alt="" className="otherSponsore__img" />
            <img src={forbes} alt="" className="otherSponsore__img" />
            <img src={bbc} alt="" className="otherSponsore__img" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Sponsore;
