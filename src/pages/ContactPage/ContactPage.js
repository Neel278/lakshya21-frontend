import React from 'react';

import './ContactPage.scss';

import GradientBox from './../../components/GradientBox/GradientBox';

import CardContact from './../../components/Cards/ContactCard';
import ContactForm from './../../components/ContactForm/ContactForm';
import EventHeads from '../../SiteData/EventHeadData';

function ContactPage() {
  return (
    <div className="contact-page__container ">
      <div className="gradient gradient--1">
        <GradientBox></GradientBox>
      </div>
      <div className="gradient gradient--2">
        <GradientBox></GradientBox>
      </div>
      <div className="container">
        <div className="contact-page">
          <div className="contact-page__title-box">
            <div className="contact-page__title">Reach Out</div>
          </div>
          <div className="contact-page__body">
            <div className="contact-page__left">
              {EventHeads.map((item, index) => (
                <CardContact key={index} details={item}></CardContact>
              ))}
            </div>
            <div className="contact-page__right">
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
