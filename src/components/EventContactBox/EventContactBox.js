import React from 'react';

import './EventContactBox.scss';

const EventContactBox = () => {
  return (
    <div className="event-contact-box">
      <div className="event-contact__title">Contacts</div>
      <div className="event-contact">
        <div className="event-contact__left">
          <p className="event-contact__name">John Doe</p>
          <p className="event-contact__number">0123456789</p>
        </div>
        <div className="event-contact__right">
          <p className="event-contact__mail">johndoe@gmail.com</p>
        </div>
      </div>
      <div className="event-contact">
        <div className="event-contact__left">
          <p className="event-contact__name">John Doe</p>
          <p className="event-contact__number">0123456789</p>
        </div>
        <div className="event-contact__right">
          <p className="event-contact__mail">johndoe@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default EventContactBox;
