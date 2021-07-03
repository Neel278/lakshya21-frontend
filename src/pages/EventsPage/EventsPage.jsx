import React, { useState } from 'react';
import './EventsPage.scss';
import EventsCard from '../../components/EventsCardsCategory/EventsCard';
import eventsPageData from '../../SiteData/eventsPageData';
import BgAnim from '../../components/Bg-Animation/BgAnim';

function EventsPage() {
  const [pageData, setPageData] = useState(eventsPageData);

  return (
    <div className="event-page">
      <div className="page-wrapper">
        {/* <BgAnim className="bg" /> */}

        <div className="page-heading-wrapper">
          <div className="page-heading">Events</div>
        </div>
        <ul>
          {pageData.map((item, index) => (
            <EventsCard key={index} category={item.category} img={item.img} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventsPage;
