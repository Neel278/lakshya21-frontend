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
          <div className="underline-sponsors">
            <h1>Meet Our Sponsors</h1>
          </div>
          {/* <span></span> */}
        </div>
        {/* <div className="sponsore__heading">
          <h1>To be added soon...</h1>
        </div> */}
        {/* <SponsoreCard
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
        /> */}

        <div className="otherSponsore">
          {/* <h1>Other Sponsors</h1> */}

          <div className="otherSponsore__logo">
            <div>
              <p>
                <i>Workshop Partner</i>
              </p>
              <a
                href="https://www.iantindia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://drive.google.com/uc?id=1o8PdGetNnzBgvCA_cV3je9AEVr-ljFr8"
                  alt="IANT"
                  className="otherSponsore__img"
                />
              </a>
            </div>
            <div>
              <p>
                <i>Official Photography Partner</i>
              </p>

              <a
                href="https://instituteforphotographyexcellence.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://drive.google.com/uc?id=1uapkZXznMlybCL1VeANvinj8uOkt9eZ7"
                  alt=""
                  className="otherSponsore__img"
                />
              </a>
            </div>

            {/* <img src={bbc} alt="" className="otherSponsore__img" /> */}
          </div>

          <div className="otherSponsore__logo">
            <div>
              <p>
                <i>Online Media Partner</i>
              </p>

              <a
                href="https://www.knowafest.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://drive.google.com/uc?id=117afzo2nzab8iuFAma5bAF0KpsZ9-c_K"
                  alt="KNOWAFEST"
                  className="otherSponsore__img"
                />
              </a>
            </div>
            <div>
              <p>
                <i>Powered By</i>
              </p>

              <a
                href="https://allevents.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://drive.google.com/uc?id=1GzUHWsJqY8pacZz-8MrdBP4qPbqALaF0"
                  alt="allevents"
                  className="otherSponsore__img"
                />
              </a>
            </div>

            <div>
              <p>
                <i>Special Partner</i>
              </p>

              <a
                href="https://www.khodiyarcadcenter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://drive.google.com/uc?id=1RGjtB68qbIGYsalUHKm_Oqo9FndiQ_Qz"
                  alt=""
                  className="otherSponsore__img"
                  style={{
                    backgroundColor: '#F0F4F8',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                  }}
                  style={{
                    backgroundColor: '#F0F4F8',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                  }}
                />
              </a>
            </div>
          </div>

          <div className="otherSponsore__logo">
            <div>
              <p>
                <i>In Association With</i>
              </p>

              <a
                href="http://visaeuro.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://drive.google.com/uc?id=12EVtQK-hA2nHVGECGxMUFEOyKlBLjqxJ"
                  alt=""
                  className="otherSponsore__img"
                  style={{
                    backgroundColor: '#F0F4F8',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                  }}
                />
              </a>
            </div>
            <div>
              <p>
                <i>Special Partner</i>
              </p>

              <a
                href="https://therenaissance.co.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://drive.google.com/uc?id=1pC5p4g3fUe-oPOLwqhgnU8ODX7pWkU8y"
                  alt=""
                  className="otherSponsore__img"
                />
              </a>
            </div>

            {/* <img src={bbc} alt="" className="otherSponsore__img" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsore;
