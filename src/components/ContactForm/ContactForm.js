import React from 'react';

import './ContactForm.scss';

function ContactForm() {
  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Leave a Message</h2>
      <div className="contact-form__body">
        <div className="contact-form__row">
          <input
            type="text"
            placeholder="Name"
            className="contact-form__name"
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-form__mail"
          />
        </div>
        <div className="contact-form__row">
          <textarea placeholder="Message" className="contact-form__message" />
        </div>
        <button className="contact-form__submit">Submit</button>
      </div>
    </div>
  );
}

export default ContactForm;
