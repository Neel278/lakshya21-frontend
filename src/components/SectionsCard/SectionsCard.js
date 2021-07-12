import React from 'react';
import './SectionsCard.scss';

import { Link } from 'react-router-dom';

// import calendar from './../../Images/Vector.png';

function SectionsCard({ img, title, detail, date }) {
  return (
    <div className="eventsCard">
      <img src={img} alt="" className="eventsCard__img" />

      <div className="eventsCard__cont">
        <h1 className="eventsCard__heading">{title}</h1>

        <p className="eventsCard__detail">{detail}</p>

        <div className="eventsCard__container">
          <Link to={`/events/${title}`} className="eventsCard__join">
            Join
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SectionsCard;
