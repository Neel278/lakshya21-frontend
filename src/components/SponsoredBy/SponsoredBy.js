import React, { useState } from 'react';
import './SponsoredBy.scss';
import SponsorsPopUp from '../SponsorsPopUp/SponsorsPopUp';
import img1 from './../../Images/logo-bbc.webp';
import img2 from './../../Images/logo-bi.webp';
import img3 from './../../Images/logo-forbes.webp';
import img4 from './../../Images/logo-techcrunch.webp';

const images = [
  {
    name: 'bbc',
    source: 'https://picsum.photos/500',
    src: img1,
  },
  {
    name: 'bi',
    source: 'https://source.unsplash.com/VAoSKP_ocN0',
    src: img2,
  },
  {
    name: 'forbes',
    source: 'https://source.unsplash.com/EzYq1HOl5_8',
    src: img3,
  },
  {
    name: 'techcrunch',
    source: 'https://picsum.photos/500',
    src: img4,
  },
];

function SponsoredBy() {
  const [openOne, setOpenOne] = useState(false);
  const [OpenImgTwo, setOpenImgTwo] = useState(false);
  const [OpenImgThree, setOpenImgThree] = useState(false);
  const [OpenImgFour, setOpenImgFour] = useState(false);

  return (
    <div className="sponsored-by">
      <div className="sponsored-by__title-box">
        <div className="sponsored-by__front-line">&nbsp;</div>
        <div className="sponsored-by__title">Sponsored By</div>
        <div className="sponsored-by__back-line">&nbsp;</div>
      </div>
      <div className="logo-box">
        <SponsorsPopUp
          source={images[0].src}
          sponsorAlt={images[0].name}
          imgHover={() => {
            setOpenOne(true);
          }}
          openSponsors={openOne}
          closeSponsors={() => {
            setOpenOne(false);
          }}
          SponsorsBanner={images[0].source}
          bgColor="black"
        />
        <SponsorsPopUp
          source={images[1].src}
          sponsorAlt={images[1].name}
          closeSponsors={() => {
            setOpenImgTwo(false);
          }}
          imgHover={() => {
            setOpenImgTwo(true);
          }}
          bgColor="black"
          openSponsors={OpenImgTwo}
          SponsorsBanner={images[1].source}
        />
        <SponsorsPopUp
          source={images[2].src}
          sponsorAlt={images[2].name}
          closeSponsors={() => {
            setOpenImgThree(false);
          }}
          imgHover={() => {
            setOpenImgThree(true);
          }}
          bgColor="black"
          openSponsors={OpenImgThree}
          SponsorsBanner={images[2].source}
        />
        <SponsorsPopUp
          source={images[3].src}
          sponsorAlt={images[3].name}
          closeSponsors={() => {
            setOpenImgFour(false);
          }}
          imgHover={() => {
            setOpenImgFour(true);
          }}
          bgColor="black"
          openSponsors={OpenImgFour}
          SponsorsBanner={images[3].source}
        />
      </div>
    </div>
  );
}

export default SponsoredBy;
