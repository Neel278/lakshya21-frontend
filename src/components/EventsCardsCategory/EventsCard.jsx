import React, { useState } from 'react';
import './EventsCard.scss';
import { Link } from 'react-router-dom';
// import EventIcon from '@material-ui/icons/Event';

function EventsCard({ category, img }) {
  return (
    <div>
      <div className="event-card">
        <img className="card-img" src={img} alt={category}></img>
        <div className="card-content">
          <h2>{category}</h2>
          {/* <p>10 Events</p>
          <p>10000 Worth Prizes</p> */}
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            incidunt in iusto excepturi recusandae. Veniam dicta vel quos, iure
            !
          </p>
          <Link to={'/departments/' + category}>
            <li className="participate-btn">Participate</li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
