import React, { useRef, useEffect } from 'react';
import './Gal.css';
import event1 from '../../images/Event1.png';
import event2 from '../../images/Event2.png';
import event3 from '../../images/Event3.png';

const images = [
  { id: 1, src: event1, alt: "event 1" },
  { id: 2, src: event2, alt: "event 2" },
  { id: 3, src: event3, alt: "event 3" },
];

const Gal = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryElement = galleryRef.current;

    const handleScroll = (event) => {
      event.preventDefault();
      galleryElement.scrollBy({
        top: event.deltaY,
        behavior: 'smooth',
      });
    };

    galleryElement.addEventListener('wheel', handleScroll);

    return () => {
      galleryElement.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">OUR GALLERY</h2>
      <div className="title_decorates"></div>
      <div className="gallery-grid" ref={galleryRef}>
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-img fade-in" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gal;
