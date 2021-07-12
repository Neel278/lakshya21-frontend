import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';

// import { Tabs, Tab } from '@material-ui/core';
import PropTypes from 'prop-types';
import TabPanel from './TabPanel.jsx';
// import useStyles from './styles.jsx';
// import eventData from './EventData';

import './EventCategory.scss';
import './Events.scss';
import './../../sassStyle/layout/_grid.scss';
import axios from '../../axios/axios';
import EventsCard from '../../components/EventsCard/EventsCard';
import technical from './../../Images/technical-support-icon-robotic-hand-customer-help-tech-support_127544-400 2.webp';
import { useParams } from 'react-router';

// tabpanel
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function Events(props) {
  const [data, setData] = useState([]);
  const { department } = useParams();
  useEffect(() => {
    const fetchDeaprtment = async () => {
      try {
        setData(await (await axios.get(`/departments/${department}`)).data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDeaprtment();
  }, [department]);

  const idToDepartment = (idOfDepartment) => {
    switch (idOfDepartment) {
      case 1:
        return 'COMPUTER/IT';
      case 2:
        return 'EC/IC/ELECTRICAL';
      case 3:
        return 'CHEMICAL';
      case 4:
        return 'CIVIL';
      case 5:
        return 'MECHANICAL';
      case 6:
        return 'ROBOTICS';
      case 7:
        return 'LITERARY';
      case 8:
        return 'FUN';
      case 9:
        return 'WORKSHOPS';
      default:
        return 'GENRAL';
    }
  };

  return (
    <div className="events">
      <div className="events__heading">
        <h1>{department} Events</h1>
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
                detail={
                  item.detail ??
                  'This is an ' + idToDepartment(item.id) + ' department event'
                }
                department={idToDepartment(item.id)}
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
