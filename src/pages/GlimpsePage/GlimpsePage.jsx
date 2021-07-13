import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import './GlimpsePage.scss';
import Carousel, { Modal, ModalGateway } from 'react-images';
import photos from '../../SiteData/photos';
import video from '../../Images/lakshya.mp4';

function GlimpsePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="gallery-page-wrapper">
      <div className="page-header">
        <h2>Glimpse of Lakshya</h2>
      </div>
      <br />
      <div className="video-grid">
        <iframe
          src="https://www.youtube.com/embed/oX-opSiVojo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="grid-video-content"
        ></iframe>
      </div>

      <div className="gallery-grid">
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
}

export default GlimpsePage;
