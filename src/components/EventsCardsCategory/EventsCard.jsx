import React, { useState } from 'react';
import './EventsCard.scss';
import { Link } from 'react-router-dom';
// import EventIcon from '@material-ui/icons/Event';
const typeEvent = 'Technical Events';

function EventsCard({ id, category, img, description }) {
  const setNameOfEvent = (id) => {
    if (id === 1) return 'Technical';
    else if (id === 2) return 'Literary & Fun';
    else return 'Workshops';
  };
  return (
    <div>
      <Link to={'/departments/' + category}>
        <div className="event-card">
          <img className="card-img" src={img} alt={category}></img>
          <div className="card-content">
            <h2>{category}</h2>
            <br />
            <p className="event-category-text">
              <i>#{typeEvent}</i>
            </p>
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <li className="participate-btn">Participate</li>
            <p className="description">{setNameOfEvent(id)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventsCard;
