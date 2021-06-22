import React from 'react';

import './SponsoredBy.scss';

import img1 from './../../Images/logo-bbc.webp';
import img2 from './../../Images/logo-bi.webp';
import img3 from './../../Images/logo-forbes.webp';
import img4 from './../../Images/logo-techcrunch.webp';

function SponsoredBy() {
  return (
    <div className="sponsored-by">
      <div className="sponsored-by__title-box">
        <div className="sponsored-by__front-line">&nbsp;</div>
        <div className="sponsored-by__title">Sponsored By</div>
        <div className="sponsored-by__back-line">&nbsp;</div>
      </div>
      <div className="sponsored-by__logo-box">
        <div className="sponsored-by__logo-item">
          <img src={img1} alt="" className="sponsored-by__logo" />
        </div>
        <div className="sponsored-by__logo-item">
          <img src={img2} alt="" className="sponsored-by__logo" />
        </div>
        <div className="sponsored-by__logo-item">
          <img src={img3} alt="" className="sponsored-by__logo" />
        </div>
        <div className="sponsored-by__logo-item">
          <img src={img4} alt="" className="sponsored-by__logo" />
        </div>
      </div>
    </div>
  );
}

export default SponsoredBy;
