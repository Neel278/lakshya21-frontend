import React from 'react';

import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container container">
        <div className="footer__main">
          <div className="footer__logo-box">
            <svg
              className="footer-logo"
              width="135"
              height="20"
              viewBox="0 0 135 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.416 13.712L13.248 16.88H0V2.72L4.272 0.248V13.712H16.416ZM34.6913 16.88H30.3953V12.8H21.8033V16.88L17.5312 19.304V5.936L20.7473 2.72H31.4753L34.6913 5.936V16.88ZM30.3953 9.68V5.888H21.8033V9.68H30.3953ZM54.4618 2.72L49.0618 7.856L54.0058 12.8V16.88H49.7338V13.424L46.5658 10.256L42.0298 14.552V16.88L37.7578 19.304V2.72H42.0298V9.656L49.3978 2.72H54.4618ZM76.1164 12.512L72.9004 16.856H56.4844L59.6284 13.712H70.4044L71.4124 12.512L70.4044 11.24H59.6044L56.4844 7.064L59.7004 2.72H76.1164L72.9484 5.864H62.1964L61.1644 7.064L62.1964 8.336H72.9964L76.1164 12.512ZM95.5779 16.88H91.3059V11.24H82.8579V16.88L78.5859 19.304V2.72H82.8579V8.36H91.3059V2.72H95.5779V16.88ZM117.216 2.72L109.752 10.184V16.856L105.48 19.304V10.184L97.9922 2.72H103.08L107.616 7.256L112.152 2.72H117.216ZM134.09 16.88H129.794V12.8H121.202V16.88L116.93 19.304V5.936L120.146 2.72H130.874L134.09 5.936V16.88ZM129.794 9.68V5.888H121.202V9.68H129.794Z"
                fill="#131D58"
              />
            </svg>
          </div>
          <div className="footer__description">
            Lakshya is an only National level Edu-Technical festival of L.D.
            College of Engineering which is held every year since 2014.
          </div>
          <div className="footer__privacy-box">
            <Link
              to={{
                pathname:
                  'https://drive.google.com/file/d/1k5Ja13jS1v_Ed3EegLoi6OcMiUmCLQUW/view?usp=drivesdk',
              }}
              target="_blank"
              className="footer__privacy"
            >
              Privacy Policy
            </Link>
            <Link
              to={{
                pathname:
                  'https://drive.google.com/file/d/1rFlXAsK3_AW9Nx3ZhzRvedOtzJ1f5-3h/view?usp=drivesdk',
              }}
              target="_blank"
              className="footer__privacy"
            >
              Events Detailer
            </Link>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__links--title">LINKS</div>
          <Link to="/">
            <div className="footer__links--item">Home</div>
          </Link>
          <Link to="/events">
            <div className="footer__links--item">Events</div>
          </Link>
          <Link to="/contact">
            <div className="footer__links--item">Contact</div>
          </Link>
        </div>
        <div className="footer__about">
          <div className="footer__about--title">ABOUT</div>
          <Link to="/about">
            <div className="footer__about--item">Lakshya</div>
          </Link>
          <Link to="/team">
            <div className="footer__about--item">Our Team</div>
          </Link>
          <Link to="/sponsor">
            <div className="footer__about--item">Sponsors</div>
          </Link>
        </div>

        <div className="footer__contact">
          <div className="footer__contact--title">CONTACT US</div>
          <div className="footer__contact--phone">Phone: +91 87589 42513</div>
          <div className="footer__contact--phone">Phone: +91 90167 77043</div>
          <div className="footer__contact--email">
            Email: lakshyafestldce@gmail.com
          </div>
          <div className="footer__contact--address">
            Address: L.D. College Of Engineering, Ahmedabad 380015
          </div>
        </div>
        <div className="footer__sign-up">
          <div className="footer__sign-up--social-box">
            <div className="footer__sign-up--social--title">Our Socials</div>
            <div className="footer__sign-up--social--icon-box">
              <Link
                to={{
                  pathname:
                    'https://www.linkedin.com/company/lakshya-fest-l-d-college-of-engineering',
                }}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#102A43"
                  className="footer__sign-up--social"
                >
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                </svg>
              </Link>
              <Link
                to={{ pathname: 'https://www.instagram.com/lakshyafest.ldce/' }}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#102A43"
                  className="footer__sign-up--social"
                >
                  <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                </svg>
              </Link>
              <br />
              <br />
              <Link
                to={{ pathname: 'https://www.facebook.com/lakshyafest/' }}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#102A43"
                  className="footer__sign-up--social"
                >
                  <path d="M22.5 0c.83 0 1.5.67 1.5 1.5v21c0 .83-.67 1.5-1.5 1.5h-6v-9h3l.75-3.75H16.5v-1.5c0-1.5.75-2.25 2.25-2.25h1.5V3.75h-3c-2.76 0-4.5 2.16-4.5 5.25v2.25h-3V15h3v9H1.5A1.5 1.5 0 0 1 0 22.5v-21C0 .67.67 0 1.5 0h21z" />
                </svg>
              </Link>
              <Link
                to={{
                  pathname:
                    'https://youtube.com/channel/UC-QylLNstOBJy8RTbc2aaNg',
                }}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#102A43"
                  className="footer__sign-up--social"
                >
                  <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-7.7 7h-.6l-1.1.01c-1.48.03-3.7.1-4.46.29-.65.16-1.15.65-1.33 1.26-.18.64-.25 1.7-.29 2.46l-.02.82v.75c.03.76.1 2.09.31 2.85.18.61.68 1.1 1.33 1.26.74.19 2.87.26 4.34.29l1.41.01h1.16c1.45-.03 4-.09 4.81-.3a1.84 1.84 0 0 0 1.33-1.26c.2-.75.28-2.05.3-2.82v-.93c0-.67-.06-2.26-.3-3.13a1.84 1.84 0 0 0-1.33-1.26 25.9 25.9 0 0 0-3.88-.28L12.3 7zM10.46 9.9L14.39 12l-3.92 2.11V9.89z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
