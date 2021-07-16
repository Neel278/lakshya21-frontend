import React from 'react';

import './Cards.scss';

// import img from './../../Images/head.webp';

function cards({ details }) {
  return (
    <div className="card-contact">
      <div className="card-contact__left">
        <div className="card-contact__img-box">
          <img src={details.img} alt="" className="card-contact__img" />
        </div>
        <p className="card-contact__name">{details.name}</p>
      </div>
      <div className="card-contact__right">
        <div className="card-contact__head">{details.position}</div>
        <div className="card-contact__mail-box">
          <svg
            className="card-contact__call-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Iconly/Bold/Call">
              <g id="Call">
                <path
                  id="Stroke 1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
                  fill="white"
                  fill-opacity="0.9"
                />
              </g>
            </g>
          </svg>

          <div className="card-contact__call">+91 {details.mobile}</div>
        </div>
        <div className="card-contact__call-box">
          <svg
            className="card-contact__mail-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Iconly/Bold/Message">
              <g id="Message">
                <path
                  id="Message_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.9395 3C18.2805 3 19.5705 3.53 20.5195 4.481C21.4695 5.43 22.0005 6.71 22.0005 8.05V15.95C22.0005 18.74 19.7305 21 16.9395 21H7.06049C4.26949 21 2.00049 18.74 2.00049 15.95V8.05C2.00049 5.26 4.25949 3 7.06049 3H16.9395ZM18.5305 9.54L18.6105 9.46C18.8495 9.17 18.8495 8.75 18.5995 8.46C18.4605 8.311 18.2695 8.22 18.0705 8.2C17.8605 8.189 17.6605 8.26 17.5095 8.4L13.0005 12C12.4205 12.481 11.5895 12.481 11.0005 12L6.50049 8.4C6.18949 8.17 5.75949 8.2 5.50049 8.47C5.23049 8.74 5.20049 9.17 5.42949 9.47L5.56049 9.6L10.1105 13.15C10.6705 13.59 11.3495 13.83 12.0605 13.83C12.7695 13.83 13.4605 13.59 14.0195 13.15L18.5305 9.54Z"
                  fill="white"
                  fill-opacity="0.9"
                />
              </g>
            </g>
          </svg>
          <div className="card-contact__mail">{details.email}</div>
        </div>
      </div>
    </div>
  );
}

export default cards;
