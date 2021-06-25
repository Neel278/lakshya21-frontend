import React from 'react';

import './BgVideo.scss';

// import video from './../../Images/BgVideo.mp4';

function BgVideo() {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted>
        <source
          // src="https://infallible-banach-26daed.netlify.app/BgVideo%20(2).mp4"
          type="video/mp4"
        ></source>
        Your browser not supported
      </video>
    </div>
  );

  //       <div class="bg-video">
  //                 <video class="bg-video__content" autoplay muted >
  //                     <source src="img/video.mp4" type="video/mp4">
  //                     <source src="img/video.webm" type="video/webm">
  //                     Your browser not supported
  //                 </video>
  //             </div>
  //   </div>;
}

export default BgVideo;
