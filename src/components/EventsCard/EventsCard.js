import React from 'react';
import './EventsCard.scss';

import { Link } from 'react-router-dom';

import calendar from './../../Images/Vector.png';
// const driveURL = 'https://drive.google.com/uc?id=';

function EventsCard({ img, title, detail, department }) {
  return (
    <div className="eventsCard">
      <Link to={`/sections/${title}`} className="eventsCard__join">
        <img src={img} alt="" className="eventsCard__img" />

        <div className="eventsCard__cont">
          <h1 className="eventsCard__heading">{title}</h1>

          <p
            className="eventsCard__detail"
            dangerouslySetInnerHTML={{ __html: detail }}
          ></p>

          <div className="eventsCard__container">
            <p className="eventsCard__date">
              <img src={calendar} alt="" />
              {department}
            </p>
            {/* <Link
              to={`/sections/${title}`}
              className="eventsCard__join eventsCard__join1"
            >
              Join
            </Link> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventsCard;
