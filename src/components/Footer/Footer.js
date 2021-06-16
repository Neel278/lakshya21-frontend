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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
          <div className="footer__privacy-box">
            <a href="#" className="footer__privacy">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__links--title">LINKS</div>
          <div className="footer__links--item">Lorem ipsum</div>
          <div className="footer__links--item">Lorem ipsum</div>
          <div className="footer__links--item">Lorem ipsum</div>
          <div className="footer__links--item">Lorem ipsum</div>
        </div>
        <div className="footer__about">
          <div className="footer__about--title">ABOUT</div>
          <div className="footer__about--item">Lorem ipsum </div>
          <div className="footer__about--item">Lorem ipsum </div>
          <div className="footer__about--item">Lorem ipsum </div>
          <div className="footer__about--item">Lorem ipsum </div>
        </div>

        <div className="footer__contact">
          <div className="footer__contact--title">CONTACT US</div>
          <div className="footer__contact--phone">Phone: +91 1234 5678 123</div>
          <div className="footer__contact--phone">Phone: +91 1234 5678 123</div>
          <div className="footer__contact--email">Email: xyz@gmail.com</div>
          <div className="footer__contact--address">
            Address: xyz, lorem ipsum, lorem ipsium.
          </div>
        </div>
        <div className="footer__sign-up">
          <div className="footer__sign-up--title">
            SIGN UP FOR OUR EVENT BROCHURE
          </div>
          <div className="footer__sign-up--input-box">
            <input
              type="text"
              placeholder="Enter your email"
              className="footer__sign-up--input"
            />
            <button type="submit" className="footer__sign-up--submit">
              Submit
            </button>
          </div>
          <div className="footer__sign-up--social-box">
            <div className="footer__sign-up--social--title">Our Socials</div>
            <div className="footer__sign-up--social--icon-box">
              <svg
                className="footer__sign-up--social"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.375 4.27735C18.6717 4.58296 17.9275 4.7843 17.166 4.87501C17.9663 4.4064 18.5681 3.66195 18.8586 2.78126C18.102 3.22368 17.2756 3.5341 16.4148 3.69923C16.0524 3.31935 15.6165 3.01716 15.1336 2.811C14.6507 2.60484 14.1309 2.49904 13.6059 2.50001C11.4801 2.50001 9.75977 4.19532 9.75977 6.28516C9.75826 6.57585 9.79157 6.86568 9.85898 7.14844C8.33464 7.07698 6.842 6.68813 5.47656 6.00675C4.11111 5.32537 2.90292 4.36648 1.9293 3.19141C1.58772 3.76724 1.40708 4.42424 1.40625 5.09376C1.40625 6.40626 2.09102 7.56641 3.125 8.2461C2.51239 8.23156 1.91234 8.06942 1.37578 7.77344V7.82032C1.37578 9.65626 2.70391 11.1836 4.46172 11.5313C4.13117 11.6194 3.79053 11.664 3.44844 11.6641C3.20569 11.6645 2.9635 11.6409 2.72539 11.5938C3.21406 13.0977 4.63633 14.1914 6.32109 14.2227C4.9521 15.2777 3.27134 15.848 1.54297 15.8438C1.23618 15.8433 0.929674 15.825 0.625 15.7891C2.38327 16.9118 4.42713 17.5057 6.51328 17.5C13.5977 17.5 17.468 11.7305 17.468 6.72657C17.468 6.56251 17.4637 6.39844 17.4559 6.23829C18.2071 5.70394 18.857 5.03989 19.375 4.27735Z"
                  fill="#102A43"
                />
              </svg>
              <svg
                className="footer__sign-up--social"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6457 2.7082C14.6118 2.71109 15.5375 3.09616 16.2207 3.77931C16.9038 4.46246 17.2889 5.38818 17.2918 6.3543V13.6457C17.2889 14.6118 16.9038 15.5375 16.2207 16.2207C15.5375 16.9038 14.6118 17.2889 13.6457 17.2918H6.3543C5.38818 17.2889 4.46246 16.9038 3.77931 16.2207C3.09616 15.5375 2.71109 14.6118 2.7082 13.6457V6.3543C2.71109 5.38818 3.09616 4.46246 3.77931 3.77931C4.46246 3.09616 5.38818 2.71109 6.3543 2.7082H13.6457ZM13.6457 1.25H6.3543C3.54687 1.25 1.25 3.54687 1.25 6.3543V13.6457C1.25 16.4531 3.54687 18.75 6.3543 18.75H13.6457C16.4531 18.75 18.75 16.4531 18.75 13.6457V6.3543C18.75 3.54687 16.4531 1.25 13.6457 1.25Z"
                  fill="#102A43"
                />
                <path
                  d="M14.7395 6.35431C14.5231 6.35431 14.3117 6.29016 14.1318 6.16998C13.9519 6.0498 13.8117 5.87898 13.729 5.67912C13.6462 5.47926 13.6245 5.25935 13.6667 5.04718C13.7089 4.83501 13.8131 4.64013 13.9661 4.48716C14.119 4.3342 14.3139 4.23003 14.5261 4.18783C14.7382 4.14562 14.9582 4.16728 15.158 4.25007C15.3579 4.33285 15.5287 4.47304 15.6489 4.6529C15.7691 4.83277 15.8332 5.04424 15.8332 5.26056C15.8335 5.40428 15.8054 5.54665 15.7506 5.67948C15.6957 5.81232 15.6152 5.93302 15.5135 6.03465C15.4119 6.13627 15.2912 6.21683 15.1584 6.27168C15.0255 6.32654 14.8832 6.35462 14.7395 6.35431ZM10 7.08322C10.5769 7.08322 11.1408 7.25428 11.6205 7.57479C12.1002 7.89529 12.474 8.35083 12.6948 8.8838C12.9155 9.41678 12.9733 10.0032 12.8608 10.5691C12.7482 11.1349 12.4704 11.6546 12.0625 12.0625C11.6546 12.4704 11.1348 12.7482 10.569 12.8608C10.0032 12.9733 9.41677 12.9155 8.88379 12.6948C8.35082 12.474 7.89528 12.1002 7.57477 11.6205C7.25427 11.1408 7.0832 10.5769 7.0832 10C7.08403 9.22668 7.3916 8.48527 7.93843 7.93844C8.48525 7.39161 9.22667 7.08404 10 7.08322ZM10 5.62501C9.13471 5.62501 8.28885 5.8816 7.56938 6.36233C6.84992 6.84306 6.28916 7.52635 5.95803 8.32577C5.6269 9.1252 5.54026 10.0049 5.70907 10.8535C5.87788 11.7022 6.29456 12.4818 6.90641 13.0936C7.51826 13.7055 8.29781 14.1221 9.14648 14.291C9.99515 14.4598 10.8748 14.3731 11.6742 14.042C12.4737 13.7109 13.1569 13.1501 13.6377 12.4306C14.1184 11.7112 14.375 10.8653 14.375 10C14.375 8.83969 13.9141 7.72689 13.0936 6.90642C12.2731 6.08595 11.1603 5.62501 10 5.62501Z"
                  fill="#102A43"
                />
              </svg>
              <svg
                className="footer__sign-up--social"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.75 10.0527C18.75 5.2207 14.832 1.30273 10 1.30273C5.16797 1.30273 1.25 5.2207 1.25 10.0527C1.25 14.4199 4.44922 18.0398 8.63281 18.6969V12.5828H6.41055V10.0527H8.63281V8.125C8.63281 5.93242 9.93945 4.72031 11.9379 4.72031C12.8953 4.72031 13.8969 4.89141 13.8969 4.89141V7.04492H12.793C11.7066 7.04492 11.3668 7.71914 11.3668 8.41211V10.0527H13.7934L13.4059 12.5828H11.3672V18.6977C15.5508 18.041 18.75 14.4211 18.75 10.0527Z"
                  fill="#102A43"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
