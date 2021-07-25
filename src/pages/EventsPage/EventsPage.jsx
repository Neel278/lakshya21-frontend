import React, { useEffect, useState } from 'react';
import './EventsPage.scss';
import EventsCard from '../../components/EventsCardsCategory/EventsCard';
import GradientBox from '../../components/GradientBox/GradientBox';
import axios from '../../axios/axios';
// import eventsPageData from '../../SiteData/eventsPageData';

function EventsPage() {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const fetchDeaprtments = async () => {
      try {
        setPageData(await (await axios.get('/departments')).data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDeaprtments();
  }, []);

  return (
    <div className="event-page__container">
      <div className="gradient gradient--1">
        <GradientBox></GradientBox>
      </div>
      <div className="gradient gradient--2">
        <GradientBox></GradientBox>
      </div>
      <div className="event-page">
        <div className="page-wrapper">
          <div className="page-heading-wrapper">
            <div className="page-heading">Events</div>
          </div>
          <ul>
            {pageData.map((item, index) => (
              <EventsCard
                key={index}
                id={item.id}
                category={item.name}
                img={item.img}
                description={item.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
