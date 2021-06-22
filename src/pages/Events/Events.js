import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
// import { spacing } from '@material-ui/system';

import './Events.scss';
import './../../sassStyle/layout/_grid.scss';

import EventsCard from '../../components/EventsCard/EventsCard';

import technical from './../../Images/technical-support-icon-robotic-hand-customer-help-tech-support_127544-400 2.webp';

const eventData = [
  {
    name: 'WEB- O- THON',
    detail:
      'Test your skills and embraces Yourself to the world of web designing and web development by using the skills in HTML, CSS and backend along with teamwork and presentation skill.',
    date: '3rd Aug 2021',
  },
  {
    name: 'WEB- O- THON',
    detail:
      'Test your skills and embraces Yourself to the world of web designing and web development by using the skills in HTML, CSS and backend along with teamwork and presentation skill.',
    date: '3rd Aug 2021',
  },
  {
    name: 'WEB- O- THON',
    detail:
      'Test your skills and embraces Yourself to the world of web designing and web development by using the skills in HTML, CSS and backend along with teamwork and presentation skill.',
    date: '3rd Aug 2021',
  },
  {
    name: 'WEB- O- THON',
    detail:
      'Test your skills and embraces Yourself to the world of web designing and web development by using the skills in HTML, CSS and backend along with teamwork and presentation skill.',
    date: '3rd Aug 2021',
  },
  {
    name: 'WEB- O- THON',
    detail:
      'Test your skills and embraces Yourself to the world of web designing and web development by using the skills in HTML, CSS and backend along with teamwork and presentation skill.',
    date: '3rd Aug 2021',
  },
  {
    name: 'WEB- O- THON',
    detail:
      'Test your skills and embraces Yourself to the world of web designing and web development by using the skills in HTML, CSS and backend along with teamwork and presentation skill.',
    date: '3rd Aug 2021',
  },
  {
    name: 'WEB- O- THON',
    detail:
      'Test your skills and embraces Yourself to the world of web designing and web development by using the skills in HTML, CSS and backend along with teamwork and presentation skill.',
    date: '3rd Aug 2021',
  },
  {
    name: 'WEB- O- THON',
    detail:
      'Test your skills and embraces Yourself to the world of web designing and web development by using the skills in HTML, CSS and backend along with teamwork and presentation skill.',
    date: '3rd Aug 2021',
  },
];

function Events() {
  const [data, setData] = useState(eventData);

  return (
    <div className="events">
      <div className="events__heading">
        <h1>Technical Events</h1>
      </div>

      <div className="events__card">
        <Grid
          container
          spacing={{ xs: 0, md: 12 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map((item, index) => (
            <Grid xs={12} sm={12} md={6} key={index}>
              <EventsCard
                key={index}
                img={technical}
                title={item.name}
                detail={item.detail}
                date={item.date}
              />

              <div className="events__margin"></div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Events;
