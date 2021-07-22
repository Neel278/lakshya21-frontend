import React from 'react';
import './EventsCard.scss';
import { Link } from 'react-router-dom';
// import EventIcon from '@material-ui/icons/Event';
<<<<<<< HEAD
const typeEvent = 'Technical Events';
=======
const driveURL = 'https://drive.google.com/uc?id=';
>>>>>>> 12e83ad507a6e48ee1b82df74e1d8ec3f2e6e3d1

function EventsCard({ category, img, description }) {
  return (
    <div>
      <Link to={'/departments/' + category}>
        <div className="event-card">
          <img className="card-img" src={driveURL + img} alt={category}></img>
          <div className="card-content">
            <h2>{category}</h2>
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <li className="participate-btn">Participate</li>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventsCard;
