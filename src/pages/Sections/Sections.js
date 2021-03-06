import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';

// import { Tabs, Tab } from '@material-ui/core';
import PropTypes from 'prop-types';
import TabPanel from '../Events/TabPanel.jsx';
// import useStyles from './styles.jsx';
// import eventData from './EventData';

import '../Events/EventCategory.scss';
import '../Events/Events.scss';
import './../../sassStyle/layout/_grid.scss';
import axios from '../../axios/axios';
// import EventsCard from '../../components/EventsCard/EventsCard';
// import technical from './../../Images/technical-support-icon-robotic-hand-customer-help-tech-support_127544-400 2.webp';
import { useParams } from 'react-router';
import SectionsCard from '../../components/SectionsCard/SectionsCard.js';

// tabpanel
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function Sections(props) {
  const [data, setData] = useState([]);
  const { section } = useParams();
  useEffect(() => {
    const fetchDeaprtment = async () => {
      try {
        setData(await (await axios.get(`/events/${section}`)).data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDeaprtment();
  }, [section]);
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
  // add item.image
  return (
    <div className="events">
      <div className="events__heading">
        <h1>{section}</h1>
      </div>
      <div className="events__card">
        <Grid
          container
          spacing={{ xs: 0, md: 12 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map((item, index) => (
            <Grid xs={12} sm={12} md={6} key={index}>
              <SectionsCard
                key={index}
                img={item.img}
                title={item.name}
                detail={
                  item.overview.substr(0, 99) + '...' ??
                  'This is a lakshya 2021 event'
                }
                department={idToDepartment(item.event_id)}
              />

              <div className="events__margin"></div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Sections;
