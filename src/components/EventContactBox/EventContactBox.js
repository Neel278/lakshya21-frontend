import React from 'react';

import './EventContactBox.scss';

const EventContactBox = () => {
  return (
    <div className="event-contact-box">
      <div className="event-contact__title">Contacts</div>
      <div className="event-contact">
        <div className="event-contact__left">
          <p className="event-contact__name">Parth Patni</p>
          <p className="event-contact__number">+91 8758942513</p>
        </div>
        <div className="event-contact__right">
          <p className="event-contact__mail">parthpatni22@gmail.com</p>
        </div>
      </div>
      <div className="event-contact">
        <div className="event-contact__left">
          <p className="event-contact__name">Jainil Vora</p>
          <p className="event-contact__number">+91 9016777043</p>
        </div>
        <div className="event-contact__right">
          <p className="event-contact__mail">jainilvora1234@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default EventContactBox;
