import React from 'react';
import './SectionsCard.scss';

import { Link } from 'react-router-dom';

import calendar from './../../Images/Vector.png';
import technical from './../../Images/technical-support-icon-robotic-hand-customer-help-tech-support_127544-400 2.webp';
const driveURL = 'https://drive.google.com/uc?id=';

function SectionsCard({ img, title, detail, department }) {
  // console.log(img);
  return (
    <div className="eventsCard">
      <Link to={`/events/${title}`} className="eventsCard__join">
        <img
          src={img === '' ? technical : driveURL + img}
          alt=""
          className="eventsCard__img"
        />

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
              to={`/events/${title}`}
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

export default SectionsCard;
