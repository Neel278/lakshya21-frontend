import React from 'react';
import PopUp from '../PopUp/PopUp';
import './SponsorsPopUp.scss';

function SponsorsPopUp(props) {
  return (
    <div className="sponsors-wrapper">
      <div className="sponsored-by__logo-box">
        <div className="sponsored-by__logo-item">
          <img
            src={props.source}
            alt={props.sponsorAlt}
            className="sponsored-by__logo"
            onMouseOver={props.imgHover}
          />
        </div>
      </div>
      <PopUp
        bg={props.SponsorsBanner}
        paperHeight="60%"
        bgColor="white"
        open={props.openSponsors}
        close={props.closeSponsors}
        paperWidth="60%"
      />
    </div>
  );
}

export default SponsorsPopUp;
