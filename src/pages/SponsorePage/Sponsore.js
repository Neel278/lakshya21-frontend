import React from 'react';
import './Sponsore.scss';

// import SponsoreCard from '../../components/Cards/SponsorCard';
import GradientBox from '../../components/GradientBox/GradientBox';

// import bbc from './../../Images/logo-bbc.webp';
// import bi from './../../Images/logo-bi.webp';
// import forbes from './../../Images/logo-forbes.webp';

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

        <div className="otherSponsore">
          <div className="otherSponsore__logo">
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
          </div>

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

            <div>
              <p>
                <i>GD/PI Event Partner</i>
              </p>

              <a
                href="https://www.endeavorcareers.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://drive.google.com/uc?id=1GisTR2u5f-SijPMPGBg4EiwQT660TIEh"
                  alt=""
                  className="otherSponsore__img"
                />
              </a>
            </div>
          </div>

          <div className="otherSponsore__logo">
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
          </div>
          <div className="otherSponsore__logo">
            <div>
              <p>
                <i>Food Partner</i>
              </p>

              <a
                href="https://business.google.com/website/bombay-street-cafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://drive.google.com/uc?id=1JYXVeWS_2M87b-5PllC6xajYjDzEG6C6"
                  alt="KNOWAFEST"
                  className="otherSponsore__img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsore;
