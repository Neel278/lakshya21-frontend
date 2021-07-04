import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';

import { Tabs, Tab } from '@material-ui/core';
import PropTypes from 'prop-types';
import TabPanel from './TabPanel.jsx';
import useStyles from './styles.jsx';
import eventData from './EventData';

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

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}
////

// function Events() {
//   const [data, setData] = useState(eventData);

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

  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleTabs = (e, val) => {
    setValue(val);
  };

  let type = 'Technical';

  return (
    <div className="events">
      <div className="events__heading">
        <h1>{type} Events</h1>
      </div>

      {type === 'Technical' ? (
        <>
          <div className="event-category">
            {/* <Tabs
              value={value}
              onChange={handleTabs}
              className="tabs"
              classes={{
                indicator: classes.indicator,
              }}
            > */}
            <div className="events__root">
              <Tabs
                value={value}
                onChange={handleTabs}
                variant="scrollable"
                scrollButtons="on"
                className="tabs"
                classes={{
                  indicator: classes.indicator,
                }}
                aria-label="scrollable force tabs example"
              >
                <Tab
                  label={<span className={classes.tabLabel}>CS/IT</span>}
                  {...a11yProps(0)}
                />
                <Tab
                  label={
                    <span className={classes.tabLabel}>EC/IC/ELECTRICAL</span>
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  label={<span className={classes.tabLabel}>CHEMICAL</span>}
                  {...a11yProps(1)}
                />
                <Tab
                  label={<span className={classes.tabLabel}>CIVIL</span>}
                  {...a11yProps(2)}
                />
                <Tab
                  label={<span className={classes.tabLabel}>MECHANICAL</span>}
                  {...a11yProps(3)}
                />
              </Tabs>
            </div>
          </div>
          <div className="events__card">
            {/* CS/IT */}
            <TabPanel value={value} index={0} className="cs/it">
              <div>
                <Grid
                  container
                  spacing={{ xs: 0, md: 12 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {data
                    .filter((item) => item.dept === 'cs/it')
                    .map((item, index) => (
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
            </TabPanel>

            {/* ELECTRICAL */}
            <TabPanel value={value} index={1} className="electrical">
              <div>
                <Grid
                  container
                  spacing={{ xs: 0, md: 12 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {data
                    .filter((item) => item.dept === 'electrical')
                    .map((item, index) => (
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
            </TabPanel>

            {/* CHEMICAL */}
            <TabPanel value={value} index={2} className="chemical">
              <div>
                <Grid
                  container
                  spacing={{ xs: 0, md: 12 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {data
                    .filter((item) => item.dept === 'chemical')
                    .map((item, index) => (
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
            </TabPanel>

            {/* CIVIL */}
            <TabPanel value={value} index={3} className="civil">
              <div>
                <Grid
                  container
                  spacing={{ xs: 0, md: 12 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {data
                    .filter((item) => item.dept === 'civil')
                    .map((item, index) => (
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
            </TabPanel>

            {/* Mechanical */}
            <TabPanel value={value} index={4} className="mechanical">
              <div>
                <Grid
                  container
                  spacing={{ xs: 0, md: 12 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {data
                    .filter((item) => item.dept === 'mechanical')
                    .map((item, index) => (
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
            </TabPanel>
          </div>
        </>
      ) : (
        <div className="events__card">
          <Grid
            container
            spacing={{ xs: 0, md: 12 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data
              .filter(
                (item) => item.event === type && item.event !== 'Technical'
              )
              .map((item, index) => (
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
      )}
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
                  'I am a fake detail please update me in events page'
                }
                date={item.date ?? 'DD/MM/YYYY'}
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
