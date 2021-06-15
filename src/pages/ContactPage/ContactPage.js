import React from 'react';

import './ContactPage.scss';

import CardContact from './../../components/Cards/ContactCard';
import ContactForm from './../../components/ContactForm/ContactForm';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-page__title">Reach Out</div>
      <div className="contact-page__body">
        <div className="contact-page__left">
          <CardContact></CardContact>
          <CardContact></CardContact>
          <CardContact></CardContact>
        </div>
        <div className="contact-page__right">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
