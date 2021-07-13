import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Cards from '../../components/Team-Cards/Cards';
import './TeamCategoryMobile.scss';
import TabPanel from '../Tab-Panel/TabPanel';
import useStyles from './styles';
import Data from '../../SiteData/TeamData';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 3 },
];

function TeamCategory() {
  const [value, setValue] = useState(0);
  const [menuItem, setMenuItem] = useState(Data);
  const classes = useStyles();

  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <div>
      <div className="team-category-mobile">
        <Tabs
          value={value}
          onChange={handleTabs}
          className="tabs-wrapper-mobile"
          textColor="inherit"
          fullWidth
          centered
          classes={{
            indicator: classes.indicator,
          }}
        >
          <Tab label={<span className={classes.tabLabel}>Convener</span>} />
          <Tab label={<span className={classes.tabLabel}>Heads</span>} />
          {/* <Tab label={<span className={classes.tabLabel}>Core-Team</span>} /> */}
          <Tab label={<span className={classes.tabLabel}>Developers</span>} />
        </Tabs>
        <div className="cards-wrapper-mobile">
          <TabPanel value={value} index={0} className="convener">
            <div className="team-cards-grid">
              {menuItem
                .filter((item) => item.team === 'convener')
                .map((item, index) => (
                  <Cards
                    key={index}
                    name={item.name}
                    role={item.roles}
                    image={item.url}
                    email={item.email}
                    linkedin={item.linkedin}
                    insta={item.insta}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} className="heads">
            <div className="team-cards-grid">
              {menuItem
                .filter((item) => item.team === 'heads')
                .map((item, index) => (
                  <Cards
                    key={index}
                    name={item.name}
                    role={item.roles}
                    image={item.url}
                    email={item.email}
                    linkedin={item.linkedin}
                    insta={item.insta}
                  />
                ))}
            </div>
          </TabPanel>
          {/* <TabPanel value={value} index={2} className="core-team">
            <div>
              <Carousel
                enableAutoPlay
                autoPlaySpeed={2000}
                breakPoints={breakPoints}
                breakPoints={breakPoints}
              >
                {menuItem
                  .filter((item) => item.team === 'core-team')
                  .map((item, index) => (
                    <Cards
                      key={index}
                      name={item.name}
                      role={item.roles}
                      image={item.url}
                    />
                  ))}
              </Carousel>
            </div>
          </TabPanel> */}
          <TabPanel value={value} index={2} className="developers">
            <div className="team-cards-grid">
              {menuItem
                .filter((item) => item.team === 'developers')
                .map((item, index) => (
                  <Cards
                    key={index}
                    name={item.name}
                    role={item.roles}
                    image={item.url}
                  />
                ))}
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

export default TeamCategory;
