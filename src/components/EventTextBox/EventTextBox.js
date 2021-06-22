import React from 'react';

import './EventTextBox.scss';

const EventTextBox = () => {
  return (
    <div className="event-text">
      <div className="event-text__overview-box">
        <h2 className="event-text__title">Overview</h2>
        <p className="event-text__overview">
          WEB – O – THON is an event which tests your skills and embraces you to
          the world of web designing and web development by using the
          multidimensional skills in HTML, CSS and backend along with teamwork
          and presentation skill.
        </p>
      </div>
      <div className="event-text__structure-box">
        <h2 className="event-text__title">Event Structure</h2>
        <div className="event-text__structure">
          <ul className="event-text__structure--list">
            <li className="event-text__structure--list-item">
              Round 1: <br /> In the first round, participants are required to
              develop the frontend and its structure using HTML, CSS and
              JavaScript (You can also use Bootstrap). Time period for round 1:
              120 minutes Maximum points: 20 points
            </li>
            <li className="event-text__structure--list-item">
              Round 2: <br /> In the second round, participants are required to
              develop the backend and connect it with the frontend. You can use
              any programming language. For e.g. PHP, Python, etc. Time period
              for round 2: 120 minutes Maximum points: 15 points
            </li>
            <li className="event-text__structure--list-item">
              Round 3: <br /> In the third round, participants are required to
              present the final version of work to the judges. Some simple
              questions will be asked. Time for each team’s presentation: 5-10
              minutes Maximum points: 15 points
            </li>
          </ul>
        </div>
      </div>
      <div className="event-text__rules-box">
        <h2 className="event-text__title">Rules and Regulations</h2>
        <ul className="event-text__rules">
          <li className="event-text__rules-item">
            Every participant will have to join the discord server for all the
            updates, queries and evaluation process.
          </li>
          <li className="event-text__rules-item">
            Every participant must be present in the Inauguration ceremony and
            final presentation.
          </li>
          <li className="event-text__rules-item">
            Different topics will be given to each team in the inauguration
            ceremony.
          </li>
          <li className="event-text__rules-item">
            Participants cannot use ready-made templates. If anyone found
            breaking this rule then whole team will be disqualified and will not
            get any certificate
          </li>
          <li className="event-text__rules-item">
            After each round participants will have to submit screenshots (in
            single pdf) and screen recording. Google form will be provided for
            the same.
          </li>
          <li className="event-text__rules-item">
            Winner will be declared after considering points from each round.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventTextBox;
