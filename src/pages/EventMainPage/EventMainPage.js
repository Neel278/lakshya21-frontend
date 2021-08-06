import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import './EventMainPage.scss';
import './allevents.js';
import EventDetailBox from './../../components/EventDetailBox/EventDetailBox';
import EventContactBox from './../../components/EventContactBox/EventContactBox';
import EventTextBox from '../../components/EventTextBox/EventTextBox';
import GradientBox from './../../components/GradientBox/GradientBox';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const driveURL = 'https://drive.google.com/uc?id=';

const EventMainPage = () => {
  const [event, setEvent] = useState([]);
  const { event: eventName } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchDeaprtment = async () => {
      try {
        // console.log(eventName);
        setEvent(await (await axios.get(`/main_events/${eventName}`)).data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDeaprtment();
    // console.log(event.name);
  }, [eventName]);
  // console.table(event);
  return (
    <div className="event-main__container">
      <div className="gradient gradient--1">
        <GradientBox></GradientBox>
      </div>
      <div className="gradient gradient--2">
        <GradientBox></GradientBox>
      </div>
      <div className="event-main">
        <div className="event-main__head">
          <div className="event-main__img-box">
            <img
              src={driveURL + event.big_img}
              alt=""
              className="event-main__img"
            />
            <div className="overlay"></div>
          </div>
        </div>

        <div className="container">
          <div className="event-main__body">
            <div className="event-main__hero-box">
              <h2 className="event-main__title">{event.name}</h2>
              <div className="event-main__btn-box">
                {/* <button className="event-main__btn event-main__btn--proceed">
                  Participate
                </button> */}
                <button
                  // onclick="open_ae_ticket_modal('80008103395933','1784072',event);return false;"
                  data-event-id="80008103395933"
                  data-ticket-id={event.allevents_id}
                  class="ae-ticket-book-button event-main__btn event-main__btn--proceed"
                  onClick={window.ae_plugin_lib_button_init()}
                >
                  Participate
                </button>
              </div>
            </div>
            <div className="event-main__box-container">
              <EventDetailBox
                price={event.price}
                platform={event.platform}
                participants={event.participants}
              ></EventDetailBox>
              <EventContactBox></EventContactBox>
            </div>
            <EventTextBox details={event}></EventTextBox>
            <div className="event-main__rule-btn-box">
              <Link
                to={{ pathname: event.rulebook }}
                target="_blank"
                className="event-main__btn event-main__btn--download"
              >
                Download Rule Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventMainPage;
