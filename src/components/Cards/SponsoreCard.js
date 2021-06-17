import React from 'react';
import './SponsoreCard.scss';


function SponsoreCard({ img, headline, text }) {
  return (
    <div className="sponsoreCard">
      <div className="sponsoreCard__left">
        <img src={img} alt="" className="sponsoreCard__left--img" />
      </div>

      <div className="sponsoreCard__right">
        <div className="sponsoreCard__right--headline">{headline}</div>

        <p className="sponsoreCard__right--text">{text}</p>
      </div>
    </div>
  );
}

export default SponsoreCard;
