import React from 'react';

import './BgVideo.scss';

import video from './../../Images/lakshya.mp4';

function BgVideo() {
  return (
    <div className="bg-video">
      <video
        onEnded={() => {
          setTimeout(() => {
            document.getElementById('hero').style.display = 'block';
          }, 1200);
        }}
        className="bg-video__content"
        autoPlay
        muted
      >
        <source src={video} type="video/mp4"></source>
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
