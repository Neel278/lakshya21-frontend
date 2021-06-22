import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function SideBar({ clicked }) {
  return (
    <>
      <div className="sidebar">
        <div className="nav-close-wrapper">
          <ArrowForwardIosIcon
            className="nav-close"
            size="80"
            onClick={clicked}
          />
          <svg
            className="nav-logo"
            width="90"
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

        <div className="nav-links">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/events">
            <li>EVENTS</li>
          </Link>
          <Link to="/gallery">
            <li>GALLERY</li>
          </Link>
          <Link to="/about">
            <li>ABOUT</li>
          </Link>
          <Link to="/team">
            <li>OUR TEAM</li>
          </Link>
          <Link to="/contact">
            <li>CONTACT US</li>
          </Link>
          -
        </div>
      </div>
    </>
  );
}

export default SideBar;
