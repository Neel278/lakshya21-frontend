import React, { useState } from 'react';
import './SponsoredBy.scss';
import SponsorsPopUp from '../SponsorsPopUp/SponsorsPopUp';
// import img1 from './../../Images/logo-bbc.webp';
// import img2 from './../../Images/logo-bi.webp';
// import img3 from './../../Images/logo-forbes.webp';
// import img4 from './../../Images/logo-techcrunch.webp';
import bannerImg from './../../Images/sample.png';
const driveURL = 'https://drive.google.com/uc?id=';

function SponsoredBy() {
  const images = [
    {
      name: 'allevents',
      source: bannerImg,
      src: driveURL + '1GzUHWsJqY8pacZz-8MrdBP4qPbqALaF0',
    },
    {
      name: 'visaeuro',
      source: driveURL + '1ldHKPhnxQyyy_Lg5OHUTrcqQR4lTwtkj',
      src: driveURL + '12EVtQK-hA2nHVGECGxMUFEOyKlBLjqxJ',
    },
    {
      name: 'career lines',
      source: bannerImg,
      src: driveURL + '1kdyBeDv5cnpijGTKKFfLqeRUQFwtWaSk',
    },
    {
      name: 'I.C.E GATE Academy',
      source: bannerImg,
      src: driveURL + '13pHmGKPaOXO-zCsl6IxTVly3gbxSEQMo',
    },
  ];

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
          clicked={() => {
            setOpenImgTwo(true);
          }}
          open={openOne}
          close={() => {
            setOpenOne(false);
          }}
          SponsorsBanner={images[0].source}
          bgColor="black"
          sponsorshipText="Powered By"
        />
        <SponsorsPopUp
          source={images[1].src}
          sponsorAlt={images[1].name}
          close={() => {
            setOpenImgTwo(false);
          }}
          imgHover={() => {
            setOpenImgTwo(true);
          }}
          clicked={() => {
            setOpenImgTwo(true);
          }}
          bgColor="black"
          open={OpenImgTwo}
          SponsorsBanner={images[1].source}
          sponsorshipText="In Association "
          imgBg="#F0F4F8"
          imgPadding="0.5rem"
          imgBorderRadius="0.3rem"
        />
        <SponsorsPopUp
          source={images[2].src}
          sponsorAlt={images[2].name}
          close={() => {
            setOpenImgThree(false);
          }}
          imgHover={() => {
            setOpenImgThree(true);
          }}
          bgColor="black"
          open={OpenImgThree}
          sponsorshipText="Education Partner "
          SponsorsBanner={images[2].source}
        />
        <SponsorsPopUp
          source={images[3].src}
          sponsorAlt={images[3].name}
          close={() => {
            setOpenImgFour(false);
          }}
          imgHover={() => {
            setOpenImgFour(true);
          }}
          bgColor="black"
          open={OpenImgFour}
          sponsorshipText="Knowledge Partner "
          SponsorsBanner={images[3].source}
        />
      </div>
    </div>
  );
}

export default SponsoredBy;
