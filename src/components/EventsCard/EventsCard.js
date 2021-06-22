import React from 'react';
import './EventsCard.scss';

import { Link } from 'react-router-dom';

import calendar from './../../Images/Vector.png';

function EventsCard({ img, title, detail, date }) {
  return (
    <div className="eventsCard">
      <img src={img} alt="" className="eventsCard__img" />

      <div className="eventsCard__cont">
        <h1 className="eventsCard__heading">{title}</h1>

        <p className="eventsCard__detail">{detail}</p>

        <div className="eventsCard__container">
          <p className="eventsCard__date">
            <img src={calendar} alt="" />
            {date}
          </p>
          <Link to="/" className="eventsCard__join">
            Join
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
