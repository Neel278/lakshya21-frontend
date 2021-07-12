import React from 'react';

import './EventTextBox.scss';

const EventTextBox = ({ details }) => {
  // console.log(details);
  return (
    <div className="event-text">
      <div className="event-text__overview-box">
        <h2 className="event-text__title">Overview</h2>
        <p
          className="event-text__overview"
          dangerouslySetInnerHTML={{ __html: details.overview }}
        ></p>
      </div>
      <div className="event-text__structure-box">
        <h2 className="event-text__title">Event Structure</h2>
        <div className="event-text__structure">
          <ul
            className="event-text__structure--list"
            dangerouslySetInnerHTML={{ __html: details.event_structure }}
          ></ul>
        </div>
      </div>
      <div className="event-text__rules-box">
        <h2 className="event-text__title">Rules and Regulations</h2>
        <ul className="event-text__rules">
          <li
            className="event-text__rules-item"
            dangerouslySetInnerHTML={{ __html: details.rules }}
          ></li>
        </ul>
      </div>
      <div className="event-text__rules-box">
        <h2 className="event-text__title">Judging Criteria</h2>
        <ul className="event-text__rules">
          <li
            className="event-text__rules-item"
            dangerouslySetInnerHTML={{ __html: details.criteria }}
          ></li>
        </ul>
      </div>
      <div className="event-text__rules-box">
        <h2 className="event-text__title">Rewards</h2>
        <ul className="event-text__rules">
          <li
            className="event-text__rules-item"
            dangerouslySetInnerHTML={{ __html: details.rewards }}
          ></li>
        </ul>
      </div>
      <div className="event-text__rules-box">
        <h2 className="event-text__title">Note</h2>
        <ul className="event-text__rules">
          <li className="event-text__rules-item">
            ● The event date will be declared before the week of Lakshya fest
            starts. <br />● Further instructions of the event will be given via
            mail or text message.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventTextBox;
